import Link from "next/link";
import { IdentityWaitlistKitForm } from "@/components/identity-waitlist-kit-form";

// ─── Block B — Pre-launch waitlist ───────────────────────────────────────────
// Shown while `identityLabStatus === "waitlist"`. Converts Identity Lab visitors
// into waitlist subscribers on-page, reusing the same Kit form (UID fed36a3d05)
// that powers the standalone /identity-lab/waitlist/ page — so both feed the
// same Kit form, tags, and automation.

const SUMMARY_ITEMS = [
  "A four-week guided journey",
  "Five learning stations",
  "Three live group sessions with the SparkLifeLab founders",
  "Your personal Identity Map",
  "Access to all course materials",
  "A small cohort for meaningful connection",
];

export function IdentityLabWaitlist() {
  return (
    <div className="il-action-card il-waitlist-card">
      <p className="eyebrow-center">Ready to join?</p>
      <h2 className="il-action-heading">Join the waitlist</h2>

      <p className="il-waitlist-intro">
        The first Identity Lab cohort will open soon. Join the waitlist and we&rsquo;ll
        let you know as soon as enrollment opens.
      </p>

      <ul className="il-waitlist-summary">
        {SUMMARY_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="il-waitlist-form-intro">
        Add your first name and email, and we&rsquo;ll let you know when enrollment opens.
      </p>

      <IdentityWaitlistKitForm />

      <p className="il-waitlist-privacy">
        We&rsquo;ll only email you about the Identity Lab and related SparkLifeLab
        updates. No spam. You can unsubscribe at any time.
      </p>

      <p className="il-waitlist-secondary">
        <Link className="button-text" href="/#clarity-check">
          Not ready yet? Start with the Midlife Clarity Check →
        </Link>
      </p>
    </div>
  );
}
