"use client";

import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  function openCookiePreferences() {
    window.dispatchEvent(new Event("sparklifelab:open-cookie-preferences"));
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid">

        {/* Brand column */}
        <div>
          <Link className="footer-wordmark" href="/" aria-label="SparkLifeLab home">
            <span>Spark</span>LifeLab
          </Link>
          <p className="footer-tagline">Ignite your best life — on purpose</p>
          <div className="footer-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer-contact" style={{ marginTop: "0.5rem" }}>
            <a
              href="https://sparklifelab.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our essays on Substack →
            </a>
          </div>
        </div>

        {/* Navigate column */}
        <div>
          <p className="footer-heading">Explore</p>
          <ul className="footer-links">
            <li><a href="/#clarity-check">Clarity Check</a></li>
            <li><a href="/#identity-lab">Identity Lab</a></li>
            <li><a href="/#about">Our Story</a></li>
            <li><Link href="/clarity-check/">Get the Clarity Check</Link></li>
            <li><Link href="/identity-lab/">Identity Lab page</Link></li>
          </ul>
        </div>

        {/* Legal column */}
        <div>
          <p className="footer-heading">Legal</p>
          <ul className="footer-links">
            <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use/">Terms of Use</Link></li>
            <li><Link href="/cookie-policy/">Cookie Policy</Link></li>
            <li><Link href="/impressum/">Impressum</Link></li>
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
