"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Identity Lab waitlist form.
 *
 * IMPORTANT (TODO before launch): same as ClarityCheckForm — this is a
 * placeholder. The first SparkLife Identity Lab cohort launches May 2026, so
 * this is the page that captures interest in the meantime. Replace the
 * onSubmit handler with a Kit (ConvertKit) waitlist sequence before launch.
 */
export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <p className="font-[family-name:var(--font-display)] text-lg text-[color:var(--color-ink)]">
          You&apos;re on the waitlist.
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          Once registration opens for the May 2026 cohort, we&apos;ll be in
          touch. In the meantime, the{" "}
          <Link
            href="/clarity-check"
            className="underline underline-offset-2"
          >
            Midlife Clarity Check
          </Link>{" "}
          is a good place to start.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form-stack"
      onSubmit={(event) => {
        // TODO: wire to Kit (ConvertKit) waitlist sequence.
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="sr-only" htmlFor="waitlist-firstname">
        First name
      </label>
      <input
        id="waitlist-firstname"
        name="first_name"
        type="text"
        required
        autoComplete="given-name"
        placeholder="First name"
        className="form-field"
      />

      <label className="sr-only" htmlFor="waitlist-email">
        Email address
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        className="form-field"
      />

      <button type="submit" className="form-submit">
        Join the waitlist →
      </button>

      <p className="form-help mt-2">
        We&apos;ll only email you about the Identity Lab. You can unsubscribe at
        any time. See our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </form>
  );
}
