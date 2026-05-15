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

  // Purge the full route cache for all pages so the next request re-fetches
  // fresh image data from Sanity CDN
  revalidatePath("/", "layout");

  return NextResponse.json({ revalidated: true });
}
