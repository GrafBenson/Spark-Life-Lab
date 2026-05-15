/**
 * On-demand ISR revalidation endpoint — called by Sanity webhook.
 *
 * When the client publishes image changes in Sanity Studio, the Sanity webhook
 * POSTs to this route. We validate the HMAC-SHA256 signature, then call
 * revalidatePath and revalidateTag so Next.js serves fresh Sanity data on the
 * next request (no full Vercel redeploy required).
 *
 * Setup:
 *   1. Add SANITY_WEBHOOK_SECRET to Vercel environment variables.
 *   2. Create a Sanity webhook pointing to:
 *      https://your-domain.com/api/revalidate
 *      with the same secret value set in the Sanity webhook "Secret" field.
 *   See docs/SANITY_CLIENT_HANDOFF.md for full setup instructions.
 */

import crypto from "crypto";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Validate a Sanity HMAC-SHA256 webhook signature.
 * Sanity signs the payload as: HMAC-SHA256(secret, "{timestamp}.{rawBody}")
 * and sends the result in the `sanity-webhook-signature` header as:
 *   t={timestamp},v1={hex-digest}
 */
function isValidSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string,
): boolean {
  if (!signatureHeader) return false;
  const match = signatureHeader.match(/^t=(\d+),v1=([a-f0-9]+)$/);
  if (!match) return false;
  const [, ts, v1] = match;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${ts}.${rawBody}`)
    .digest("hex");
  // Constant-time comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(v1, "hex"),
      Buffer.from(expected, "hex"),
    );
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[revalidate] SANITY_WEBHOOK_SECRET is not set");
    return NextResponse.json(
      { message: "Webhook secret not configured" },
      { status: 500 },
    );
  }

  // Read the raw body before parsing — signature is computed over the raw bytes
  const rawBody = await req.text();
  const signatureHeader = req.headers.get("sanity-webhook-signature");

  if (!isValidSignature(rawBody, signatureHeader, secret)) {
    console.warn("[revalidate] Invalid webhook signature — request rejected");
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  // Purge the full route cache for all pages under the root layout.
  // Sanity's CDN handles its own cache invalidation on publish, so the
  // next-sanity fetch will receive fresh data on the following render.
  revalidatePath("/", "layout");

  console.log("[revalidate] Route cache cleared — pages will re-fetch from Sanity on next request");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
