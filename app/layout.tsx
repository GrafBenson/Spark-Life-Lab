import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
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
    default: "SparkLifeLab — Midlife Clarity Coaching & Reflection",
    template: "%s | SparkLifeLab",
  },
  description:
    "Midlife clarity coaching for professionals in their 40s and 50s. Get the free Midlife Clarity Check or join the SparkLife Identity Lab small-group programme.",
  applicationName: "SparkLifeLab",
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "SparkLifeLab",
    title: "SparkLifeLab — Midlife Clarity Coaching & Reflection",
    description:
      "Midlife clarity coaching for professionals in their 40s and 50s. Free Clarity Check + small-group Identity Lab programme.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkLifeLab — Midlife Clarity Coaching & Reflection",
    description:
      "SparkLifeLab helps professionals in their 40s and 50s find clarity, reconnect with what matters, and step forward with intention.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SparkLifeLab",
  url: site.url,
  email: site.email,
  description:
    "SparkLifeLab offers midlife clarity coaching through the free Midlife Clarity Check and the SparkLife Identity Lab small-group programme.",
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
      </body>
    </html>
  );
}
