import type { Metadata } from "next";
import { site } from "@/data/site";

// ─── Shared social-preview asset ─────────────────────────────────────────────
// An existing, approved SparkLifeLab photograph already published on the
// Identity Lab page. 1714x918 (~1.87:1) is the closest landscape asset in the
// repository to the 1.91:1 ratio LinkedIn, Facebook, Slack and X expect.
// Replace `url`/`width`/`height` here (one place) when a purpose-built
// 1200x630 branded card becomes available.

export const socialImage = {
  url: "/images/identity-lab-ready-client.jpeg",
  width: 1714,
  height: 918,
  alt: "A woman sits on a stone terrace at sunset, overlooking a river valley — SparkLifeLab.",
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
