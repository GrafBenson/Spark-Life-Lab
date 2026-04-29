"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * localStorage-backed cookie-consent state using useSyncExternalStore.
 *
 * Three values:
 *   - "accepted"     → user accepted all (analytics + functional OK)
 *   - "essential"    → user wants only essential cookies
 *   - null           → user has not yet decided (banner should be shown)
 *
 * Cross-tab sync via the standard `storage` event.
 * Same-tab sync via a custom event so multiple components stay aligned.
 *
 * NOTE (TODO before launch): this hook only records the user's preference; it
 * does NOT actually load or block analytics scripts. Wire it (or replace it)
 * to a real consent provider (Termly, iubenda, Cookiebot, …) before launch.
 */
export type CookieConsent = "accepted" | "essential" | null;

const STORAGE_KEY = "sll_cookie_consent";
const EVENT_NAME = "sll:cookie-consent-change";

function readStorage(): CookieConsent {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "accepted" || raw === "essential") return raw;
    return null;
  } catch {
    return null;
  }
}

/** Subscribe to both cross-tab (storage) and same-tab (custom event) changes. */
function subscribe(cb: () => void): () => void {
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) cb();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(EVENT_NAME, cb);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(EVENT_NAME, cb);
  };
}

export function useCookieConsent() {
  // useSyncExternalStore guarantees:
  // - Server renders with getServerSnapshot (→ null, avoids hydration mismatch).
  // - Client reads from localStorage and re-renders on any storage/custom event.
  // No useEffect needed — no cascading render warnings.
  const consent = useSyncExternalStore(
    subscribe,
    readStorage,
    () => null as CookieConsent,
  );

  // hydrated: false on the server, true on the client.
  // Allows the cookie banner to avoid a flash of incorrect content.
  const hydrated = useSyncExternalStore(
    () => () => {},   // no-op: nothing external to subscribe to
    () => true,       // client snapshot
    () => false,      // server snapshot
  );

  const persist = useCallback((next: CookieConsent) => {
    try {
      if (next === null) window.localStorage.removeItem(STORAGE_KEY);
      else window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage may be unavailable (Safari private mode); fail silently.
    }
    window.dispatchEvent(new Event(EVENT_NAME));
  }, []);

  const acceptAll = useCallback(() => persist("accepted"), [persist]);
  const essentialOnly = useCallback(() => persist("essential"), [persist]);
  const reopen = useCallback(() => persist(null), [persist]);

  return { consent, hydrated, acceptAll, essentialOnly, reopen } as const;
}
