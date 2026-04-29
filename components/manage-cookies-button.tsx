"use client";

import { useCookieConsent } from "./use-cookie-consent";

/**
 * Small "Manage cookie preferences" button suitable for the footer or a
 * cookie-policy page. Clears the stored preference so the cookie banner
 * re-appears at the bottom of the viewport for re-consent.
 */
export function ManageCookiesButton({
  className = "",
  children = "Manage cookie preferences",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { reopen, hydrated } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={reopen}
      className={`text-sm underline-offset-4 hover:underline ${className}`}
      disabled={!hydrated}
    >
      {children}
    </button>
  );
}
