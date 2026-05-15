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
 * Build a Sanity CDN image URL sized for founder headshots (200×200).
 */
export function urlForFounderPhoto(
  source: SanityImageSource | null | undefined,
): string | null {
  if (!source) return null;
  try {
    return builder.image(source).width(200).height(200).fit("crop").auto("format").url();
  } catch {
    return null;
  }
}

/**
 * Build a Sanity CDN image URL for homepage section images.
 * Crops to the requested dimensions with hotspot-aware cropping.
 * Returns null if source is falsy or if the asset reference is missing.
 */
export function urlForHomepageImage(
  source: SanityImageSource | null | undefined,
  width: number,
  height: number,
): string | null {
  if (!source) return null;
  try {
    return builder.image(source).width(width).height(height).fit("crop").auto("format").url();
  } catch {
    return null;
  }
}
