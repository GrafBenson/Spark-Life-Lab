// ─── Block A — Enrollment open ───────────────────────────────────────────────
// Retained in the codebase but only rendered when
// `identityLabStatus === "enrollment-open"`. Do not activate until the cohort
// dates are final, the checkout link is wired up, and the $595 price is approved.

// TODO: point this at the real checkout / enrollment URL before going live.
const ENROLL_CHECKOUT_HREF = "mailto:hello@spark-life-lab.com?subject=Identity%20Lab%20enrollment";

// TODO: replace with the confirmed cohort dates before activating Block A.
const NEXT_COHORT = "[START DATE–END DATE]";

const INCLUDED_ITEMS = [
  "4-week guided journey",
  "5 learning stations",
  "3 live group sessions with the SparkLifeLab founders",
  "Your personal Identity Map",
  "Access to all course materials",
  "Small cohort experience for meaningful connection",
];

export function IdentityLabEnrollmentOpen() {
  return (
    <div className="il-action-card il-pricing-card">
      <p className="eyebrow-center">Ready to join?</p>
      <h2 className="il-action-heading">Join the Identity Lab</h2>

      <p className="il-pricing-price">$595</p>
      <ul className="il-pricing-list">
        {INCLUDED_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="il-cohort-note">
        Next cohort: <strong>{NEXT_COHORT}</strong>
      </p>
      <p className="il-spaces-note">
        Spaces are limited to protect the quality of the group experience.
      </p>

      <a className="button button-primary il-pricing-cta" href={ENROLL_CHECKOUT_HREF}>
        Enroll now →
      </a>

      <p className="il-cta-support">
        Questions?{" "}
        <a href="mailto:hello@spark-life-lab.com">
          Email us at hello@spark-life-lab.com
        </a>
      </p>
    </div>
  );
}
