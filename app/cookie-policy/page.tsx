import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How SparkLifeLab uses essential browser storage and privacy-friendly, cookieless Vercel Web Analytics.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This policy explains the essential browser storage and privacy-friendly analytics used on the SparkLifeLab website."
    >
      <div className="legal-grid">
        <article className="legal-card">
          <h2>Essential storage</h2>
          <p>
            Local browser storage remembers your privacy preferences and keeps the website
            usable. This essential storage is always active.
          </p>
        </article>
        <article className="legal-card">
          <h2>Website analytics</h2>
          <p>
            We use Vercel Web Analytics to measure page views and basic technical information
            in aggregated form. It does not use cookies and is not intended to identify
            individual visitors.
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
