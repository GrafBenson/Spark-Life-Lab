/**
 * On-demand ISR revalidation endpoint — called by Sanity webhook.
 *
 * When the client publishes image changes in Sanity Studio, the Sanity webhook
 * POSTs to this route. We validate the signature using the official
 * @sanity/webhook package, then call revalidatePath so Next.js serves fresh
 * Sanity data on the next request (no full Vercel rebuild required).
 *
 * Setup: see docs/SANITY_CLIENT_HANDOFF.md
 */

import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[revalidate] SANITY_WEBHOOK_SECRET is not configured");
    return NextResponse.json({ message: "Missing webhook secret" }, { status: 500 });
  }

  // Read the raw body before any parsing — signature is computed over exact bytes
  const rawBody = await req.text();
  const signature = req.headers.get(SIGNATURE_HEADER_NAME) ?? "";

  const valid = await isValidSignature(rawBody, signature, secret);
  if (!valid) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  // Parse the webhook payload to extract the document type and ID for logging.
  // This does NOT expose the secret — only the document metadata from the payload body.
  let docType = "unknown";
  let docId = "unknown";
  try {
    const payload = JSON.parse(rawBody) as { _type?: string; _id?: string };
    docType = payload._type ?? "unknown";
    docId = payload._id ?? "unknown";
  } catch {
    // Non-JSON body — validation already passed so this is unexpected but not fatal
  }

  // Revalidate all routes that render Sanity images.
  // "layout" scope purges the full route tree (HTML + data cache) for every page
  // under the root layout. Explicit page revalidations are belt-and-suspenders
  // for the specific routes we know consume Sanity data.
  revalidatePath("/", "layout");
  revalidatePath("/", "page");
  revalidatePath("/about", "page");
  revalidatePath("/identity-lab", "page");

  const timestamp = new Date().toISOString();
  console.log(
    `[revalidate] ${timestamp} — revalidated all paths — docType: ${docType}, docId: ${docId}`,
  );

  return NextResponse.json({
    revalidated: true,
    timestamp,
    document: { type: docType, id: docId },
    paths: ["/", "/about", "/identity-lab"],
  });
}
