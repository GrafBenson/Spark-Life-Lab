import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────
// Post-confirmation landing page for the Identity Lab waitlist. Reached only by
// the redirect Kit fires after a subscriber clicks the double opt-in link, so it
// replaces Kit's generic "Subscription confirmed!" page.
//
// Deliberately hidden: not in the header, footer or sitemap.xml, and not linked
// from anywhere on the public site. It stays directly reachable by URL so Kit's
// redirect resolves. `noindex: true` emits `index: false, follow: false`.
//
// The canonical carries the site-wide trailing slash (next.config.ts sets
// `trailingSlash: true`), which is the URL that actually serves a 200. Kit's
// redirect target without the slash still lands here via Next's automatic 308.

export const metadata: Metadata = pageMetadata({
  title: "Identity Lab Waitlist Confirmed",
  description:
    "Your email is confirmed and you are on the waitlist for the next Identity Lab cohort at SparkLifeLab.",
  path: "/identity-lab-waitlist-confirmed/",
  noindex: true,
});

const LINKEDIN_URL = "https://www.linkedin.com/company/sparklifelab/";

// The   keeps the arrow tied to "LinkedIn" so it never wraps onto a line of
// its own on narrow phones.
const CTA_LABEL = "Follow SparkLifeLab on LinkedIn →";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IdentityLabWaitlistConfirmedPage() {
  return (
    <main className="waitlist-confirmed-page">
      <section className="waitlist-confirmed-section">
        <div className="waitlist-confirmed-inner">

          <p className="eyebrow">IDENTITY LAB</p>
          <h1 className="waitlist-confirmed-title">You’re on the waitlist</h1>

          <p className="waitlist-confirmed-copy">
            Thank you — your email is confirmed, and you’re now on the Identity Lab waitlist.
          </p>
          <p className="waitlist-confirmed-copy">
            We’ll let you know when enrollment for the next cohort opens and share occasional
            updates as the Identity Lab takes shape.
          </p>

          <p className="waitlist-confirmed-transition">
            In the meantime, you can stay connected with SparkLifeLab on LinkedIn.
          </p>

          <p className="waitlist-confirmed-cta">
            <a
              className="button button-primary"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CTA_LABEL}
            </a>
          </p>

          <p className="waitlist-confirmed-closing">We’re glad you’re here.</p>

        </div>
      </section>
    </main>
  );
}
