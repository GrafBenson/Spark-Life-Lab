"use client";

import Link from "next/link";

import { useCookieConsent } from "./use-cookie-consent";

/**
 * Bottom-fixed cookie banner.
 *
 * Renders only after hydration AND only when no consent has been stored yet
 * (so server-rendered HTML and the first client paint match — no CLS).
 *
 * IMPORTANT (TODO before launch): this banner records the user's preference
 * but does not actually gate analytics/marketing scripts. Wire to a real
 * consent provider (Termly, iubenda, Cookiebot) before going live.
 */
export function CookieBanner() {
  const { consent, hydrated, acceptAll, essentialOnly } = useCookieConsent();

  if (!hydrated || consent !== null) return null;

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label="Cookie preferences"
    >
      <p className="cookie-banner-text">
        We use a small number of cookies to keep this site working and to help
        us understand how it&apos;s used. You can manage your preferences at
        any time. See our <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>
      <div className="cookie-banner-actions">
        <button
          type="button"
          className="cookie-btn"
          onClick={essentialOnly}
        >
          Essential only
        </button>
        <Link
          href="/cookie-policy"
          className="cookie-btn"
        >
          Manage preferences
        </Link>
        <button
          type="button"
          className="cookie-btn primary"
          onClick={acceptAll}
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
