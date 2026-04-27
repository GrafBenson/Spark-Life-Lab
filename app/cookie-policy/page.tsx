import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "SparkLifeLab Cookie Policy placeholder connected to the cookie consent banner and preference controls.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This placeholder explains the current consent model and the information the final cookie policy must include."
    >
      {/* TODO: Replace with final Termly/iubenda/lawyer-reviewed Cookie Policy. */}
      <div className="legal-grid">
        <article className="legal-card">
          <h2>Essential cookies</h2>
          <p>
            Essential storage is used to remember cookie preferences and keep the website
            usable. These are not optional in the banner.
          </p>
        </article>
        <article className="legal-card">
          <h2>Analytics cookies</h2>
          <p>
            Analytics are not currently loaded. If added later, the script must wait until
            the visitor grants analytics consent.
          </p>
        </article>
        <article className="legal-card">
          <h2>Marketing cookies</h2>
          <p>
            Marketing cookies are not currently loaded. If added later, they must wait until
            the visitor grants marketing consent.
          </p>
        </article>
        <article className="legal-card">
          <h2>Preferences</h2>
          <p>
            Visitors can reopen cookie preferences from the footer and update their choices
            at any time.
          </p>
        </article>
      </div>
    </LegalPage>
  );
}
