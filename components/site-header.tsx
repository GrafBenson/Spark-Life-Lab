"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// All nav destinations are page routes — no anchor-scroll behaviour in the header.
// The homepage has its own internal anchor links for on-page scroll.
const navLinks = [
  { label: "Identity Lab", href: "/identity-lab/" },
  { label: "Our Story",    href: "/about/" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}`}>
      <Link className="wordmark" href="/" aria-label="SparkLifeLab — home">
        <span>Spark</span>LifeLab
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((item) => (
          <Link key={item.label} href={item.href}>{item.label}</Link>
        ))}
      </nav>

      <Link className="header-cta" href="/#clarity-check">
        Explore the Midlife Clarity Check →
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
      </button>

      <div
        className={`mobile-nav-panel${menuOpen ? " is-open" : ""}`}
        id="mobile-nav"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="mobile-nav-cta"
            href="/#clarity-check"
            onClick={() => setMenuOpen(false)}
          >
            Explore the Midlife Clarity Check →
          </Link>
        </nav>
      </div>
    </header>
  );
}
