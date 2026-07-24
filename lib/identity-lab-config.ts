// ─── Identity Lab enrollment status ──────────────────────────────────────────
//
// This single flag controls whether the Identity Lab page shows the pre-launch
// waitlist block (Block B) or the paid enrollment block (Block A).
//
// To switch the page when enrollment genuinely opens, change ONE value below:
//
//     "waitlist"         → shows "Join the waitlist" (embedded Kit form)
//     "enrollment-open"  → shows "Join the Identity Lab" ($595 + Enroll Now)
//
// Do NOT set "enrollment-open" until the cohort dates are final, the checkout
// is ready, and the $595 price has been approved.

export type IdentityLabStatus = "waitlist" | "enrollment-open";

export const identityLabStatus: IdentityLabStatus = "waitlist";

// Stable in-page anchor used by every primary CTA on the Identity Lab page.
// It points at whichever block (A or B) is currently active, so the CTA links
// never need to change when the status flag flips.
export const IDENTITY_LAB_ACTION_ANCHOR = "identity-lab-action";
export const IDENTITY_LAB_ACTION_HREF = `#${IDENTITY_LAB_ACTION_ANCHOR}`;

// Primary CTA label that matches the current status.
export const IDENTITY_LAB_CTA_LABEL =
  identityLabStatus === "waitlist" ? "Join the waitlist →" : "Enroll now →";
