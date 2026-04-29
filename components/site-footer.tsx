import Link from "next/link";

import { brand, footerGroups } from "@/data/site";

import { ManageCookiesButton } from "./manage-cookies-button";
import { Wordmark } from "./wordmark";

/**
 * Site footer — Option B: refined dark, generous spacing, wordmark prominence.
 *
 * Background: Deep navy (#202841).
 * Three-column layout: brand/contact | Explore | Read | Legal.
 * Footer column headings in Slate mist for low-key elegance.
 * Bottom strip: copyright + legal links + manage cookies.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-24"
      style={{ background: "var(--deep-navy)", color: "var(--paper)" }}
    >
      {/* Main grid */}
      <div className="container-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr,1fr,1fr]">
          {/* Brand column */}
          <div>
            <Wordmark size="md" tone="dark" href={null} />
            <p
              className="mt-2.5 font-[family-name:var(--font-display)] italic text-[0.95rem]"
              style={{ color: "rgba(254,253,248,0.5)" }}
            >
              {brand.tagline}
            </p>

            <div className="mt-7">
              <p
                className="text-[0.65rem] uppercase tracking-[0.2em]"
                style={{ color: "rgba(254,253,248,0.35)" }}
              >
                Contact
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="mt-1.5 inline-block text-[0.88rem] transition-opacity"
                style={{ color: "var(--ember)" }}
              >
                {brand.email}
              </a>
            </div>

            <div className="mt-5">
              <a
                href={brand.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.85rem] transition-opacity hover:opacity-80"
                style={{ color: "rgba(254,253,248,0.55)" }}
              >
                Read our essays on Substack ↗
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p
                className="text-[0.65rem] uppercase tracking-[0.2em]"
                style={{ color: "rgba(254,253,248,0.35)" }}
              >
                {group.title}
              </p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.88rem] transition-opacity hover:opacity-80"
                        style={{ color: "rgba(254,253,248,0.6)" }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[0.88rem] transition-opacity hover:opacity-80"
                        style={{ color: "rgba(254,253,248,0.6)" }}
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
      </div>

      {/* Bottom strip */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(139,143,166,0.15)" }}
      >
        <div className="container-shell flex flex-wrap items-center justify-between gap-4 py-5">
          <p
            className="text-[0.78rem]"
            style={{ color: "rgba(254,253,248,0.35)" }}
          >
            © {year} {brand.name}. All rights reserved.
          </p>
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem]"
            style={{ color: "rgba(254,253,248,0.35)" }}
          >
            <Link href="/privacy-policy" className="hover:opacity-70 transition-opacity">
              Privacy
            </Link>
            <Link href="/terms-of-use" className="hover:opacity-70 transition-opacity">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:opacity-70 transition-opacity">
              Cookies
            </Link>
            <Link href="/impressum" className="hover:opacity-70 transition-opacity">
              Impressum
            </Link>
            <ManageCookiesButton className="transition-opacity hover:opacity-70 text-[0.78rem]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
