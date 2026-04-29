"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { primaryCta, primaryNav } from "@/data/site";

import { Wordmark } from "./wordmark";

/**
 * Sticky top navigation — Option B premium treatment.
 *
 * Background: Cream (#EEEAE5), calm and refined.
 * Desktop: wordmark left · 3 anchor links centre · navy CTA button right.
 * Mobile: wordmark left · hamburger right.
 *
 * Nav links are homepage anchor links (e.g. #clarity-check).
 * From subpages they are prefixed with / so the browser navigates home first.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  // Reset mobile menu on route change (derived-state pattern).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Subtle shadow on scroll.
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll while mobile menu is open.
  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [open]);

  // Anchor links scroll on homepage; from subpages they navigate home first.
  const navHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header
        className="sticky top-0 z-50 transition-shadow duration-200"
        style={{
          background: "var(--cream)",
          borderBottom: "1px solid rgba(139, 143, 166, 0.18)",
          boxShadow: scrolled
            ? "0 2px 16px rgba(32, 40, 65, 0.06)"
            : "none",
        }}
      >
        <div className="container-shell flex h-[66px] items-center justify-between gap-6">
          <Wordmark size="md" />

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={navHref(link.href)}
                className="text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--mid-navy)] transition-colors hover:text-[color:var(--deep-navy)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((c) => !c)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm"
            style={{
              border: "1px solid rgba(139, 143, 166, 0.28)",
              background: "transparent",
            }}
          >
            <span aria-hidden className="relative block h-[10px] w-[18px]">
              <span
                className={`absolute left-0 right-0 top-0 h-[1.5px] bg-[color:var(--deep-navy)] transition-all duration-200 ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-[color:var(--deep-navy)] transition-all duration-200 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile nav panel */}
        {open && (
          <div
            id="mobile-nav"
            className="lg:hidden"
            style={{
              background: "var(--cream)",
              borderTop: "1px solid rgba(139, 143, 166, 0.16)",
            }}
          >
            <nav
              aria-label="Mobile primary"
              className="container-shell grid gap-0.5 py-5"
            >
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={navHref(link.href)}
                  className="px-2 py-3.5 text-[0.95rem] text-[color:var(--mid-navy)] hover:text-[color:var(--deep-navy)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t pt-4" style={{ borderColor: "rgba(139, 143, 166, 0.18)" }}>
                <Link
                  href={primaryCta.href}
                  className="btn-primary w-full justify-center"
                >
                  {primaryCta.label}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
