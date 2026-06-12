"use client";

import Link from "next/link";
import { site, legalItems } from "@/data/site";

const DESCRIPTOR =
  "A self-assessment, a guided transformation, and a community — for people ready to move forward.";
const SUBSTACK_URL = "https://sparklifelab.substack.com/";

export function SiteFooter() {
  function openCookiePreferences() {
    window.dispatchEvent(new Event("sparklifelab:open-cookie-preferences"));
  }

  const descriptor = DESCRIPTOR;
  const email = site.email;
  const substackHref = SUBSTACK_URL;
  const resolvedLegalLinks = legalItems;

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
            <li><Link href="/#clarity-check">Clarity Check</Link></li>
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
                Cookie Preferences
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
