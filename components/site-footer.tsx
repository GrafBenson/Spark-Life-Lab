import Link from "next/link";

import { brand, footerGroups } from "@/data/site";

import { ManageCookiesButton } from "./manage-cookies-button";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-[color:var(--color-ink)] text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Wordmark size="md" tone="dark" href={null} />
          <p className="mt-3 text-[0.85rem] tracking-[0.04em] text-white/60">
            {brand.tagline}
          </p>
          <p className="mt-5 text-[0.88rem] text-white/70">
            <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-white/45">
              Contact
            </span>
            <a
              href={`mailto:${brand.email}`}
              className="mt-1 inline-block text-[color:var(--color-spark)] hover:text-white"
            >
              {brand.email}
            </a>
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-white/45">
              {group.title}
            </p>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href + link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.88rem] text-white/65 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[0.88rem] text-white/65 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-wrap items-center justify-between gap-4 py-5 text-[0.78rem] text-white/45">
          <p>© {year} {brand.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white/80">
              Privacy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white/80">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-white/80">
              Cookies
            </Link>
            <Link href="/impressum" className="hover:text-white/80">
              Impressum
            </Link>
            <ManageCookiesButton className="text-white/45 hover:text-white/80" />
          </div>
        </div>
      </div>
    </footer>
  );
}
