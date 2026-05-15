import type { ImageLoader } from "next/image";

/**
 * Custom Next.js Image loader for Sanity CDN images.
 *
 * WHY: Without a custom loader, next/image routes Sanity CDN images through
 * Vercel's image optimizer (/_next/image?url=…). This adds a middleman round-
 * trip on first request: browser → Vercel → Sanity CDN → Vercel → browser.
 * Sanity's CDN already serves WebP/AVIF at the quality we request, so the
 * extra Vercel re-processing step is redundant latency.
 *
 * With this loader, next/image generates srcset URLs that point directly to
 * Sanity's global CDN — eliminating the Vercel middleman on every request.
 *
 * HOW: next/image calls this function once per srcset breakpoint with the
 * display `width` (e.g. 384, 640, 828, 1080, 1200…). We append `?w={width}`
 * to the base Sanity CDN URL (which already has quality + auto=format). The
 * browser picks the right breakpoint image based on the `sizes` attribute.
 *
 * USAGE: Pass `loader={sanityImageLoader}` to <Image> only when `src` is a
 * Sanity CDN URL (i.e. starts with "https://cdn.sanity.io/"). For local
 * fallback images, omit the loader so Next.js handles them normally.
 */
export const sanityImageLoader: ImageLoader = ({ src, width, quality }) => {
  try {
    const url = new URL(src);
    // Replace any pre-set width with the requested breakpoint width
    url.searchParams.set("w", String(width));
    // Override quality if explicitly passed (default 80 is already on the URL from urlForSanityLoader)
    if (quality) url.searchParams.set("q", String(quality));
    return url.toString();
  } catch {
    // Fallback: return src unchanged (should not happen for well-formed Sanity URLs)
    return src;
  }
};
