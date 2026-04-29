"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { primaryCta, primaryNav } from "@/data/site";

import { Wordmark } from "./wordmark";

/**
 * Sticky top navigation.
 *
 * Nav links are homepage anchor links (e.g. #clarity-check).
 * From subpages they are prefixed with / so the browser navigates home first.
 *
 * Desktop: wordmark + 3 anchor links + primary CTA button.
 * Mobile: wordmark + hamburger that opens a stacked panel.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  // Reset mobile menu when the route changes (derived-state pattern — no effect needed).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [open]);

  // Anchor links scroll on the homepage; from other pages they navigate home first.
  const navHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header
        className="sticky top-0 z-50"
        style={{
          background: "var(--cream)",
          borderBottom: "1px solid rgba(139, 143, 166, 0.25)",
        }}
      >
        <div className="container-shell flex h-[68px] items-center justify-between gap-6">
          <Wordmark size="md" />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={navHref(link.href)}
                className="text-[0.78rem] uppercase tracking-[0.14em] text-[color:var(--mid-navy)] transition-colors hover:text-[color:var(--deep-navy)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

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
            style={{ border: "1px solid rgba(139, 143, 166, 0.3)" }}
          >
            <span aria-hidden className="relative block h-3 w-5">
              <span
                className={`absolute left-0 right-0 top-0 h-[1.5px] bg-[color:var(--deep-navy)] transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-[color:var(--deep-navy)] transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className="lg:hidden"
            style={{
              background: "var(--cream)",
              borderTop: "1px solid rgba(139, 143, 166, 0.2)",
            }}
          >
            <nav
              aria-label="Mobile primary"
              className="container-shell grid gap-1 py-4"
            >
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={navHref(link.href)}
                  className="px-2 py-3 text-[0.95rem] text-[color:var(--mid-navy)] hover:text-[color:var(--deep-navy)]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={primaryCta.href}
                className="btn-primary mt-3 justify-center"
              >
                {primaryCta.label}
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
