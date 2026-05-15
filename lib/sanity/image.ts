import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./client";

// The image-url builder accepts any object with an asset reference
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = Record<string, any> | string | null | undefined;

const builder = createImageUrlBuilder(sanityClient);

/**
 * Build a Sanity CDN image URL from a raw Sanity image reference.
 * Returns null if source is falsy.
 */
export function urlFor(source: SanityImageSource | null | undefined): string | null {
  if (!source) return null;
  try {
    return builder.image(source).auto("format").url();
  } catch {
    return null;
  }
}

/**
 * Build a Sanity CDN image URL sized for founder headshots.
 * 200×200 crop at q=80 keeps file size small for the small circular display.
 */
export function urlForFounderPhoto(
  source: SanityImageSource | null | undefined,
): string | null {
  if (!source) return null;
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
  if (!source) return null;
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
