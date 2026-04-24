import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { MobileActionBar } from "@/components/mobile-action-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { restaurant } from "@/data/site";

import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(restaurant.siteUrl),
  title: { default: restaurant.name, template: `%s | ${restaurant.name}` },
  description: "Modernes Redesign auf Basis des öffentlichen Originalsystems von Banthai Heim- & Partyservice.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${manrope.variable} ${cormorant.variable} scroll-smooth`}>
      <body>
        <SiteHeader />
        <div className="flex min-h-screen flex-col pb-24 lg:pb-0">{children}<SiteFooter /></div>
        <MobileActionBar />
      </body>
    </html>
  );
}
