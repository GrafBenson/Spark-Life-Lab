"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem(storageKey);
      if (!stored) {
        setVisible(true);
      }
    }, 0);

    const openPreferences = () => {
      const current = window.localStorage.getItem(storageKey);
      if (current) {
        try {
          const parsed = JSON.parse(current) as ConsentState;
          setAnalytics(parsed.analytics);
          setMarketing(parsed.marketing);
        } catch {
          setAnalytics(false);
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

  function saveConsent(consent: ConsentState) {
    window.localStorage.setItem(storageKey, JSON.stringify(consent));
    setVisible(false);
    setManageOpen(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <section className="cookie-panel" aria-label="Cookie consent">
      <div className="cookie-copy">
        <p className="cookie-title">Cookie preferences</p>
        <p>
          We use essential cookies for this website to work. Non-essential analytics or
          marketing cookies should only be enabled after consent. Read the{" "}
          <Link href="/cookie-policy/">Cookie Policy</Link>.
        </p>
      </div>

      {manageOpen ? (
        <div className="cookie-manage">
          <label>
            <input type="checkbox" checked disabled /> Essential cookies
          </label>
          <label>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(event) => setAnalytics(event.target.checked)}
            />{" "}
            Analytics cookies
          </label>
          <label>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(event) => setMarketing(event.target.checked)}
            />{" "}
            Marketing cookies
          </label>
        </div>
      ) : null}

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
            onClick={() =>
              saveConsent({
                mode: "custom",
                analytics,
                marketing,
              })
            }
          >
            Save choices
          </button>
        ) : (
          <button
            type="button"
            className="cookie-primary"
            onClick={() =>
              saveConsent({
                mode: "all",
                analytics: true,
                marketing: true,
              })
            }
          >
            Accept all
          </button>
        )}
      </div>
    </section>
  );
}
