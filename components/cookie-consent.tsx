"use client";

// Preferences are stored locally. Vercel Web Analytics is cookieless and loads
// independently; the optional categories are reserved for future cookie-based tools.

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ConsentMode = "essential" | "all" | "custom";

type ConsentState = {
  mode: ConsentMode;
  analytics: boolean;
  marketing: boolean;
};

const storageKey = "sparklifelab-cookie-consent";

const essentialOnly: ConsentState = {
  mode: "essential",
  analytics: false,
  marketing: false,
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem(storageKey);
      if (!stored) setVisible(true);
    }, 0);

    const openPreferences = () => {
      const current = window.localStorage.getItem(storageKey);
      if (current) {
        try {
          const parsed = JSON.parse(current) as ConsentState;
          setMarketing(parsed.marketing);
        } catch {
          setMarketing(false);
        }
      }
      setManageOpen(true);
      setVisible(true);
    };

    window.addEventListener("sparklifelab:open-cookie-preferences", openPreferences);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("sparklifelab:open-cookie-preferences", openPreferences);
    };
  }, []);

  // Reserve page space equal to the fixed banner's height while it is visible.
  // Without this, the bottom-pinned bar overlays page content and intercepts
  // clicks on any CTA sitting in its band (the closing CTA and footer links can
  // never be scrolled clear of it). Tracks height changes (mobile wrap / manage panel).
  useEffect(() => {
    const el = panelRef.current;
    if (!visible || !el) return;

    const root = document.documentElement;
    const apply = () => root.style.setProperty("--cookie-banner-h", `${el.offsetHeight}px`);
    apply();
    document.body.classList.add("has-cookie-banner");

    const ro = new ResizeObserver(apply);
    ro.observe(el);

    return () => {
      ro.disconnect();
      document.body.classList.remove("has-cookie-banner");
      root.style.removeProperty("--cookie-banner-h");
    };
  }, [visible]);

  function saveConsent(consent: ConsentState) {
    window.localStorage.setItem(storageKey, JSON.stringify(consent));
    setVisible(false);
    setManageOpen(false);
  }

  if (!visible) return null;

  return (
    <section ref={panelRef} className="cookie-panel" role="dialog" aria-label="Cookie consent" aria-modal="true">
      <div className="cookie-copy">
        <p className="cookie-title">Cookie preferences</p>
        <p>
          Essential storage remembers your preferences. Our privacy-friendly traffic
          analytics do not use cookies. Read our <Link href="/cookie-policy/">Cookie Policy</Link>.
        </p>

        {manageOpen ? (
          <div className="cookie-manage">
            <label>
              <input type="checkbox" checked disabled readOnly aria-label="Essential cookies (always active)" />
              {" "}Essential cookies <em style={{ fontSize: "0.8em", opacity: 0.65 }}>(always active)</em>
            </label>
            <label>
              <input
                type="checkbox"
                checked={false}
                disabled
                readOnly
                aria-label="Analytics cookies (not currently used)"
              />
              {" "}Analytics cookies <em style={{ fontSize: "0.8em", opacity: 0.65 }}>(not currently used)</em>
            </label>
            <label>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                aria-label="Marketing cookies"
              />
              {" "}Marketing cookies
            </label>
          </div>
        ) : null}
      </div>

      <div className="cookie-actions">
        <button type="button" onClick={() => saveConsent(essentialOnly)}>
          Essential only
        </button>
        <button type="button" onClick={() => setManageOpen(true)}>
          Manage preferences
        </button>
        {manageOpen ? (
          <button
            type="button"
            className="cookie-primary"
            onClick={() => saveConsent({ mode: "custom", analytics: false, marketing })}
          >
            Save choices
          </button>
        ) : (
          <button
            type="button"
            className="cookie-primary"
            onClick={() => saveConsent({ mode: "all", analytics: false, marketing: true })}
          >
            Accept all
          </button>
        )}
      </div>
    </section>
  );
}
