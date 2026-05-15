"use client";

/**
 * SanityImage — next/image wrapper with a built-in Sanity CDN loader.
 *
 * WHY: In React 19 / Next.js 16, functions cannot be passed as props from
 * Server Components to Client Components. So we cannot pass `loader={fn}`
 * from app/page.tsx (server) to <Image> (client). Instead, the loader is
 * defined inside this client component and never crosses the boundary.
 *
 * BEHAVIOUR:
 * - When `src` is a Sanity CDN URL (https://cdn.sanity.io/…), the Sanity
 *   loader generates srcset entries pointing directly to Sanity's CDN edge —
 *   bypassing the Vercel image optimizer for faster delivery.
 * - When `src` is a local path (/images/…) or any other URL, the default
 *   Next.js image optimizer is used (no loader applied).
 *
 * USAGE: Use this component wherever the src might be a Sanity CDN URL.
 * Pass the same props you would to <Image> from next/image.
 */

import Image, { type ImageProps } from "next/image";
import { sanityImageLoader } from "@/lib/sanity/image-loader";

export function SanityImage(props: ImageProps) {
  const isSanityUrl =
    typeof props.src === "string" &&
    props.src.startsWith("https://cdn.sanity.io/");

  // alt is required on ImageProps and always passed by callers — ESLint can't
  // see it through the spread, so suppress the false-positive here.
  /* eslint-disable jsx-a11y/alt-text */
  return isSanityUrl ? (
    <Image {...props} loader={sanityImageLoader} />
  ) : (
    <Image {...props} />
  );
  /* eslint-enable jsx-a11y/alt-text */
}
