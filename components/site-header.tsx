"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { primaryNavLinks, restaurant } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)] bg-[rgba(255,249,239,0.95)] backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" onClick={() => setOpen(false)} className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-spice)]">
            Banthai
          </p>
          <p className="font-[family-name:var(--font-display)] text-2xl leading-none text-[color:var(--color-ink)]">
            Heim- & Partyservice
          </p>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {primaryNavLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b px-0 py-2 text-sm font-semibold ${
                  active
                    ? "border-[rgba(164,65,43,0.44)] text-[color:var(--color-spice)]"
                    : "border-transparent text-[color:var(--color-ink)] hover:border-[rgba(164,65,43,0.22)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${restaurant.phones[0].href}`} className="button-secondary">
            Anrufen
          </a>
          <a href={restaurant.sourceSystemUrl} className="button-primary" target="_blank" rel="noreferrer">
            Jetzt bestellen
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
          className="rounded-full border border-[color:var(--color-line)] bg-white/70 px-4 py-2 text-sm font-semibold text-[color:var(--color-ink)] lg:hidden"
        >
          Menü
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-[color:var(--color-line)] bg-[rgba(255,249,241,0.97)] lg:hidden">
          <div className="container-shell grid gap-2 py-4">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-semibold text-[color:var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
