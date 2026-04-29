"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Clarity Check email-capture form.
 *
 * IMPORTANT (TODO before launch): this form does NOT actually submit anywhere.
 * The brief specifies Kit (ConvertKit) for the email integration — Kit handles
 * GDPR consent, double opt-in, and PDF delivery. Replace the onSubmit handler
 * below with one of:
 *   1. Kit form embed:  https://app.kit.com/forms/<id>/edit
 *   2. <form action> POST to a Kit landing-page URL.
 * The visual structure here is designed to be drop-in replaceable.
 */
export function ClarityCheckForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <p className="font-[family-name:var(--font-display)] text-lg text-[color:var(--color-ink)]">
          Thank you.
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          Once the email integration is connected, the Midlife Clarity Check
          will arrive in your inbox shortly. For now, you can{" "}
          <Link
            href="mailto:hello@spark-life-lab.com"
            className="underline underline-offset-2"
          >
            email us directly
          </Link>{" "}
          and we&apos;ll send it to you.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form-stack"
      onSubmit={(event) => {
        // TODO: wire to Kit (ConvertKit). See file header comment.
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="sr-only" htmlFor="clarity-firstname">
        First name
      </label>
      <input
        id="clarity-firstname"
        name="first_name"
        type="text"
        required
        autoComplete="given-name"
        placeholder="First name"
        className="form-field"
      />

      <label className="sr-only" htmlFor="clarity-email">
        Email address
      </label>
      <input
        id="clarity-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        className="form-field"
      />

      <button type="submit" className="form-submit">
        Send me the Midlife Clarity Check →
      </button>

      <p className="form-help mt-2">
        Free. Instant download. No spam. Unsubscribe at any time.
      </p>
      <p className="form-help">
        By submitting, you agree to receive the Midlife Clarity Check and the
        occasional SparkLifeLab essay by email. See our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </form>
  );
}
