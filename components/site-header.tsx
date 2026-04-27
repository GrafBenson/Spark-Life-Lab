"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClarityCheckPage = pathname === "/clarity-check/" || pathname === "/clarity-check";

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link className="wordmark" href="/" aria-label="SparkLifeLab home">
        <span>Spark</span>LifeLab
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.slice(1).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {onClarityCheckPage ? (
        <span aria-hidden="true" />
      ) : (
        <Link className="header-cta" href="/clarity-check/">
          Clarity Check
        </Link>
      )}

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <div className={`mobile-nav-panel ${menuOpen ? "is-open" : ""}`} id="mobile-nav">
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {onClarityCheckPage ? null : (
            <Link
              className="mobile-nav-cta"
              href="/clarity-check/"
              onClick={() => setMenuOpen(false)}
            >
              Get the Midlife Clarity Check
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
