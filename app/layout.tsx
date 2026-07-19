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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "SparkLifeLab",
    title: "SparkLifeLab — Find Your Way Through Midlife",
    description:
      "A calm, guided space for people in midlife who sense something has shifted. Free Midlife Clarity Check and Identity Lab.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkLifeLab — Find Your Way Through Midlife",
    description:
      "SparkLifeLab walks alongside people in midlife — from their 40s through their 70s — who are ready to find clarity, reconnect with what matters, and step into what comes next.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SparkLifeLab",
  url: site.url,
  email: site.email,
  description:
    "SparkLifeLab offers midlife clarity tools — the free Midlife Clarity Check and the Identity Lab small-group guided transformation.",
  founder: [
    { "@type": "Person", name: "Bärbel" },
    { "@type": "Person", name: "Gunther" },
    { "@type": "Person", name: "Scott" },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SparkLifeLab",
  url: site.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
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
