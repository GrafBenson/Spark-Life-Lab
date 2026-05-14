"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// V10 navigation logic:
// On homepage  → anchors point to #section-id
// On subpages  → anchors point to /#section-id
// CTA always   → /clarity-check/

type NavLink =
  | { label: string; anchor: string }
  | { label: string; href: string };

// anchor → scrolls to #section on homepage, /#section on subpages
// href   → always navigates to that page
const navLinks: NavLink[] = [
  { label: "Identity Lab", anchor: "identity-lab" },
  { label: "Our Story",    anchor: "about" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function anchorHref(anchor: string) {
    return isHome ? `#${anchor}` : `/#${anchor}`;
  }

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}`}>
      <Link className="wordmark" href="/" aria-label="SparkLifeLab — home">
        <span>Spark</span>LifeLab
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((item) => (
          "href" in item ? (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ) : (
            <a key={item.label} href={anchorHref(item.anchor)}>{item.label}</a>
          )
        ))}
      </nav>

      <a className="header-cta" href={anchorHref("clarity-check")}>
        Get the Midlife Clarity Check →
      </a>

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
            "href" in item ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={anchorHref(item.anchor)}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          ))}
          <a
            className="mobile-nav-cta"
            href={anchorHref("clarity-check")}
            onClick={() => setMenuOpen(false)}
          >
            Get the Midlife Clarity Check →
          </a>
        </nav>
      </div>
    </header>
  );
}
