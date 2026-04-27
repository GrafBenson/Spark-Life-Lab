"use client";

import Link from "next/link";
import { legalItems, navItems, site } from "@/data/site";

export function SiteFooter() {
  function openCookiePreferences() {
    window.dispatchEvent(new Event("sparklifelab:open-cookie-preferences"));
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="footer-wordmark" href="/">
            <span>Spark</span>LifeLab
          </Link>
          <p>Midlife clarity coaching — for people ready to find what comes next.</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">Legal</p>
          <ul className="footer-links">
            {legalItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <button type="button" className="footer-text-button" onClick={openCookiePreferences}>
                Cookie preferences
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {site.year} SparkLifeLab. All rights reserved.</p>
        <p>Midlife clarity coaching at {site.domain}.</p>
      </div>
    </footer>
  );
}
