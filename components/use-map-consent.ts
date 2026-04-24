"use client";

import { useEffect, useState } from "react";

export type MapConsentState = "accepted" | "necessary" | null;

export const MAP_CONSENT_EVENT = "kabir:map-consent-change";

function readStoredConsent(storageKey: string): MapConsentState {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(storageKey);

  return value === "accepted" || value === "necessary" ? value : null;
}

export function useMapConsent(storageKey: string) {
  const [consent, setConsentState] = useState<MapConsentState>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // VERBESSERUNG: Consent-State zwischen Banner und Karten-Embed synchronisieren.
    const syncConsent = () => {
      setConsentState(readStoredConsent(storageKey));
      setHydrated(true);
    };

    syncConsent();

    window.addEventListener(MAP_CONSENT_EVENT, syncConsent);
    window.addEventListener("storage", syncConsent);

    return () => {
      window.removeEventListener(MAP_CONSENT_EVENT, syncConsent);
      window.removeEventListener("storage", syncConsent);
    };
  }, [storageKey]);

  const persistConsent = (value: Exclude<MapConsentState, null>) => {
    window.localStorage.setItem(storageKey, value);
    setConsentState(value);
    window.dispatchEvent(new CustomEvent(MAP_CONSENT_EVENT, { detail: value }));
  };

  return {
    consent,
    hydrated,
    accepted: consent === "accepted",
    persistConsent,
  };
}
