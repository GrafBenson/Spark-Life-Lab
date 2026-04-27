"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type EmailCaptureProps = {
  compact?: boolean;
};

export function EmailCapture({ compact = false }: EmailCaptureProps) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Thank you. The Clarity Check email is being prepared — you'll hear from us shortly."
    );
  }

  return (
    <form className={`email-capture ${compact ? "is-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor={compact ? "first-name-compact" : "first-name"}>First name</label>
        <input
          id={compact ? "first-name-compact" : "first-name"}
          name="firstName"
          type="text"
          autoComplete="given-name"
          placeholder="First name"
        />
      </div>

      <div className="form-row">
        <label htmlFor={compact ? "email-compact" : "email"}>Email address</label>
        <input
          id={compact ? "email-compact" : "email"}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          required
        />
      </div>

      <label className="consent-row">
        <input name="consent" type="checkbox" required />
        <span>
          I agree to receive the Midlife Clarity Check and occasional SparkLifeLab insights by
          email. I can unsubscribe at any time. See the{" "}
          <Link href="/privacy-policy/">Privacy Policy</Link>.
        </span>
      </label>

      <button type="submit">Send me the Midlife Clarity Check</button>
      <p className="form-reassurance">Free. No spam. Unsubscribe at any time.</p>
      {message ? (
        <p className="form-status" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
