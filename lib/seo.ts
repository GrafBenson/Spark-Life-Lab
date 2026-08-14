import type { Metadata } from "next";
import { site } from "@/data/site";

// ─── Shared social-preview asset ─────────────────────────────────────────────
// The purpose-built branded card: SparkLifeLab wordmark and tagline over the
// coastal sunset photo, at 1730x909 (~1.90:1) — matching the 1.91:1 ratio
// LinkedIn, Facebook, Slack, WhatsApp and X expect.

export const socialImage = {
  url: "/images/social-preview.jpg",
  width: 1730,
  height: 909,
  alt: "SparkLifeLab — Ignite your best life, on purpose. Sunset over a coastal cliff.",
} as const;

// ─── Page metadata builder ───────────────────────────────────────────────────
// Next.js replaces (rather than deep-merges) the `openGraph` and `twitter`
// objects when a page declares its own. Building them here guarantees every
// route keeps og:url, og:type, og:site_name, og:locale, og:image and a
// page-specific Twitter card instead of silently inheriting the homepage's.
//
// `title` is intentionally the short page name: the root layout template
// (`%s | SparkLifeLab`) appends the brand exactly once. `ogTitle` carries the
// full branded form, because metadata templates do not apply to Open Graph.

type PageMetadataInput = {
  /** Short page name. The root layout template appends "| SparkLifeLab". */
  title: string;
  description: string;
  /** Canonical path including trailing slash, e.g. "/about/". */
  path: string;
  /** Full branded Open Graph title. Defaults to `${title} | SparkLifeLab`. */
  ogTitle?: string;
  /** Open Graph description. Defaults to `description`. */
  ogDescription?: string;
  /** Keep the route out of search indexes. */
  noindex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noindex = false,
}: PageMetadataInput): Metadata {
  const socialTitle = ogTitle ?? `${title} | ${site.name}`;
  const socialDescription = ogDescription ?? description;

  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: "website",
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: "en_US",
      title: socialTitle,
      description: socialDescription,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [socialImage.url],
    },
  };
}
