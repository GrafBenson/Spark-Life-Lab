import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { EmberCursor } from "@/components/ember-cursor";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";
import { socialImage } from "@/lib/seo";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SparkLifeLab — Midlife Clarity & Guided Transformation",
    template: "%s | SparkLifeLab",
  },
  description:
    "A calm, guided space for people in midlife who sense something has shifted. Take the free Midlife Clarity Check or explore the Identity Lab.",
  applicationName: "SparkLifeLab",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "SparkLifeLab",
    locale: "en_US",
    title: "SparkLifeLab — Find Your Way Through Midlife",
    description:
      "A calm, guided space for people in midlife who sense something has shifted. Free Midlife Clarity Check and Identity Lab.",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkLifeLab — Find Your Way Through Midlife",
    description:
      "SparkLifeLab walks alongside people in midlife — from their 40s through their 70s — who are ready to find clarity, reconnect with what matters, and step into what comes next.",
    images: [socialImage.url],
  },
  // Search-engine ownership verification. Both stay absent from the rendered
  // <head> until the matching environment variable is set in Vercel, so no
  // placeholder token is ever shipped.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
};

// Structured data. Every value below is stated publicly somewhere on the
// site — the Legal Notice (legal entity, registered address), the footer
// (logo, LinkedIn, Substack) and the founder cards (full names, LinkedIn
// profiles). Nothing is inferred, and no ratings, pricing, availability or
// accreditation are claimed.

const ORGANIZATION_ID = `${site.url}/#organization`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "SparkLifeLab",
  legalName: "SparkLifeLab Inc.",
  url: site.url,
  email: site.email,
  logo: `${site.url}/images/sparklifelab-wordmark.png`,
  description:
    "SparkLifeLab offers midlife clarity tools — the free Midlife Clarity Check and the Identity Lab small-group guided transformation.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1217 Golden Star Way",
    addressLocality: "Wake Forest",
    addressRegion: "NC",
    postalCode: "27587-3934",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/sparklifelab/",
    "https://sparklifelab.substack.com/",
  ],
  founder: [
    {
      "@type": "Person",
      name: "Bärbel Tress",
      sameAs: "https://www.linkedin.com/in/baerbeltress",
    },
    {
      "@type": "Person",
      name: "Gunther Tress",
      sameAs: "https://www.linkedin.com/in/gunthertress",
    },
    {
      "@type": "Person",
      name: "Scott E. Burton",
      sameAs: "https://www.linkedin.com/in/scotteburton",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: "SparkLifeLab",
  url: site.url,
  inLanguage: "en-US",
  publisher: { "@id": ORGANIZATION_ID },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link rel="mask-icon" href="/favicon.svg?v=3" color="#ef7c62" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <ScrollProgress />
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsent />
        <EmberCursor />
        {/* Vercel Web Analytics — privacy-friendly, no cookies, no external tracking */}
        <Analytics />
      </body>
    </html>
  );
}
