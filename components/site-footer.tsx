"use client";

import Link from "next/link";
import { site, legalItems } from "@/data/site";

// Static fallbacks — used when Sanity settings are unavailable
const FALLBACK_DESCRIPTOR =
  "A self-assessment, a guided transformation, and a community — for people ready to move forward.";
const FALLBACK_SUBSTACK = "https://sparklifelab.substack.com/";

type LegalLink = { label: string; href: string };

type SiteFooterProps = {
  footerDescriptor?: string;
  contactEmail?: string;
  substackUrl?: string;
  legalLinks?: LegalLink[];
};

export function SiteFooter({
  footerDescriptor,
  contactEmail,
  substackUrl,
  legalLinks,
}: SiteFooterProps = {}) {
  function openCookiePreferences() {
    window.dispatchEvent(new Event("sparklifelab:open-cookie-preferences"));
  }

  const descriptor =
    footerDescriptor && footerDescriptor.trim().length > 0
      ? footerDescriptor
      : FALLBACK_DESCRIPTOR;

  const email =
    contactEmail && contactEmail.trim().length > 0 ? contactEmail : site.email;

  const substackHref =
    substackUrl && substackUrl.trim().length > 0 ? substackUrl : FALLBACK_SUBSTACK;

  // Use Sanity legalLinks if present and non-empty; otherwise use static legalItems
  const resolvedLegalLinks: LegalLink[] =
    legalLinks && legalLinks.length > 0
      ? legalLinks.filter((l) => l.label && l.href)
      : legalItems;

  return (
    <footer className="site-footer">
      <div className="footer-grid">

        {/* Brand column */}
        <div>
          <Link className="footer-wordmark" href="/" aria-label="SparkLifeLab home">
            <span>Spark</span>LifeLab
          </Link>
          <p className="footer-tagline">Ignite your best life — on purpose</p>
          <p className="footer-descriptor">{descriptor}</p>
          <div className="footer-contact">
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="footer-contact" style={{ marginTop: "0.5rem" }}>
            <a href={substackHref} target="_blank" rel="noopener noreferrer">
              Read our essays on Substack →
            </a>
          </div>
        </div>

        {/* Navigate column */}
        <div>
          <p className="footer-heading">Explore</p>
          <ul className="footer-links">
            <li><Link href="/clarity-check/">Clarity Check</Link></li>
            <li><Link href="/identity-lab/">Identity Lab</Link></li>
            <li><Link href="/about/">Our Story</Link></li>
          </ul>
        </div>

        {/* Legal column */}
        <div>
          <p className="footer-heading">Legal</p>
          <ul className="footer-links">
            {resolvedLegalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="footer-text-button"
                onClick={openCookiePreferences}
              >
                Cookie preferences
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {site.year} SparkLifeLab. All rights reserved.</p>
        <p>spark-life-lab.com</p>
      </div>
    </footer>
  );
}
