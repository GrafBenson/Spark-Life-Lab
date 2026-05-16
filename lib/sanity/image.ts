import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./client";

// The image-url builder accepts any object with an asset reference
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = Record<string, any> | string | null | undefined;

const builder = createImageUrlBuilder(sanityClient);

/**
 * Returns true only when source has a real, non-empty asset._ref string.
 *
 * When a Sanity image field is cleared in Studio and the document is re-published,
 * the GROQ projection may return a truthy-but-invalid object like
 * `{ _type: "image", asset: null }` or `{}`. These pass a simple `!source` guard
 * but cause the image-url builder to fail silently or return a broken URL.
 *
 * This helper treats a missing or null asset._ref as "no image" so the calling
 * function can fall through to the local fallback immediately.
 *
 * String sources (direct Sanity CDN URLs, e.g. from asset->url projection) are
 * considered valid if non-empty — the builder handles them natively.
 */
function hasValidSanityImage(source: SanityImageSource): source is NonNullable<SanityImageSource> {
  if (!source) return false;
  if (typeof source === "string") return source.length > 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const asset = (source as Record<string, any>).asset;
  return typeof asset?._ref === "string" && asset._ref.length > 0;
}

/**
 * Build a Sanity CDN image URL from a raw Sanity image reference.
 * Returns null if source is falsy or has no valid asset reference.
 */
export function urlFor(source: SanityImageSource | null | undefined): string | null {
  if (!hasValidSanityImage(source)) return null;
  try {
    return builder.image(source).auto("format").url();
  } catch {
    return null;
  }
}

/**
 * Build a Sanity CDN image URL sized for founder headshots.
 * 200×200 crop at q=80 keeps file size small for the small circular display.
 * Returns null if source has no valid asset reference (e.g. field was cleared in Studio).
 */
export function urlForFounderPhoto(
  source: SanityImageSource | null | undefined,
): string | null {
  if (!hasValidSanityImage(source)) return null;
  try {
    return builder.image(source).width(200).height(200).fit("crop").quality(80).auto("format").url();
  } catch {
    return null;
  }
}

/**
 * Build a Sanity CDN image URL for homepage section images.
 *
 * Dimensions should match the actual display crop, not the original upload size:
 * - guidanceImage: 1200×490 (CSS aspect-ratio 16/6.5, max display ~820px, 2x buffer)
 * - travelersImage: 700×480 (CSS fixed height 480px, column ~550px wide)
 * - identityMapImage: 640×480 (CSS width 100%, max column ~560px)
 * - stakesImage: 640×480 (CSS fixed height 420px, column ~560px wide)
 *
 * Quality 80 gives a good size/quality tradeoff for photography.
 * Hotspot-aware cropping via fit("crop") + auto("format") (WebP/AVIF where supported).
 * Returns null if source is falsy or if the asset reference is missing.
 */
export function urlForHomepageImage(
  source: SanityImageSource | null | undefined,
  width: number,
  height: number,
): string | null {
  if (!hasValidSanityImage(source)) return null;
  try {
    return builder
      .image(source)
      .width(width)
      .height(height)
      .fit("crop")
      .quality(80)
      .auto("format")
      .url();
  } catch {
    return null;
  }
}

/**
 * Build a base Sanity CDN URL for use with the custom sanityImageLoader.
 *
 * Returns a URL without explicit width/height so the custom loader can append
 * responsive `?w=` values at each srcset breakpoint — serving images directly
 * from Sanity's global CDN and bypassing the Next.js image optimizer overhead.
 *
 * Only quality and auto=format are set here. The loader adds the width per breakpoint.
 * Returns null if source is falsy.
 */
export function urlForSanityLoader(
  source: SanityImageSource | null | undefined,
): string | null {
  if (!hasValidSanityImage(source)) return null;
  try {
    return builder.image(source).quality(80).auto("format").url();
  } catch {
    return null;
  }
}
