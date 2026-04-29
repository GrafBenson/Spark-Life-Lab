import type { Metadata } from "next";
import Link from "next/link";

import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "SparkLife Identity Lab",
  description:
    "A guided transformation journey to help you understand who you are now, what truly matters, and how to move forward with intention. Ends with your personal IdentityMap.",
};

const explorationItems = [
  {
    title: "Your values",
    body: "Understand what truly matters to you now — not what mattered ten years ago.",
  },
  {
    title: "Your strengths",
    body: "Recognise the capacities you carry that are ready to be more fully expressed.",
  },
  {
    title: "Your identity",
    body: "Clarify who you are becoming, separate from the roles you have played.",
  },
  {
    title: "Your direction",
    body: "Begin to shape a next chapter that is honest, grounded, and genuinely yours.",
  },
  {
    title: "Your IdentityMap",
    body: "Leave with a beautifully designed document that brings together everything you discovered — your values, strengths, purpose, and emerging future. A compass you keep.",
  },
];

export default function IdentityLabPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="section-pad" style={{ background: "var(--paper)" }}>
        <div className="container-shell">
          <div className="grid items-start gap-14 lg:grid-cols-[1.2fr,0.8fr]">
            {/* Left — description */}
            <div>
              <p className="kicker">When you&apos;re ready for the next step.</p>
              <span aria-hidden className="section-divider" />
              <h1 className="display-hero">
                The SparkLife
                <br />
                Identity Lab
              </h1>
              <p className="lead-copy mt-6 max-w-lg">
                A guided crossing — with others who understand what this passage
                feels like.
              </p>
              <p className="body-copy mt-6">
                Once you have a clearer sense of where you are, the SparkLife
                Identity Lab offers the next step — a guided transformation
                journey to help you understand who you are now, what truly
                matters, and how to move forward with intention.
              </p>
              <p className="body-copy">
                In a small, supported group, you will explore your values, your
                strengths, and the direction that feels most aligned with who
                you are becoming. Not a course. Not coaching.
              </p>
              <p className="body-copy">
                A guided crossing — with others who understand what this passage
                feels like.
              </p>
              <p className="body-copy">
                The journey ends with your personal{" "}
                <strong>IdentityMap</strong>: a beautifully designed document
                that brings together everything you discovered — your values,
                strengths, purpose, and emerging future. A compass you keep.
              </p>
              <Link href="/clarity-check" className="btn-secondary mt-8">
                Start with the free Clarity Check first →
              </Link>
            </div>

            {/* Right — interest registration */}
            <div
              className="rounded-sm p-7"
              style={{
                background: "var(--cream)",
                border: "1px solid rgba(139, 143, 166, 0.25)",
              }}
            >
              <p className="eyebrow">First cohort · May 2026</p>
              <h2 className="display-sub mt-3">Register your interest</h2>
              <p className="body-copy mt-3 text-[0.9rem]">
                Places are limited. Leave your name and email and we&apos;ll
                notify you when registration opens.
              </p>
              <div className="mt-6">
                {/* TODO: Replace WaitlistForm with live Kit/ConvertKit waitlist
                     sequence embed when provided by the client. */}
                <WaitlistForm />
              </div>
              <p className="form-help mt-4">
                No commitment. No spam.{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What you'll explore ─── */}
      <section className="section-pad section-soft">
        <div className="container-narrow">
          <p className="kicker">What you&apos;ll explore</p>
          <span aria-hidden className="section-divider" />
          <h2 className="display-section">A structured crossing</h2>

          <div className="mt-12 space-y-0">
            {explorationItems.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[0.45fr,1fr] gap-8 border-t pt-5 pb-5"
                style={{ borderColor: "var(--color-line)" }}
              >
                <p className="font-[family-name:var(--font-display)] text-[1.05rem] text-[color:var(--deep-navy)]">
                  {item.title}
                </p>
                <p className="body-copy text-[0.92rem]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Not coaching ─── */}
      <section id="not-coaching" className="section-pad section-lavender">
        <div className="container-narrow">
          <h2 className="display-section">Not a course. Not coaching.</h2>
          <p className="body-copy mt-6 max-w-prose">
            The SparkLife Identity Lab is something different — a small,
            intimate guided journey for people in midlife who are ready to do
            genuine self-exploration. We don&apos;t teach content at you. We create
            the conditions for you to discover what you already know, and what
            is ready to emerge.
          </p>
          <p className="mt-6 font-[family-name:var(--font-display)] text-[1.15rem] italic text-[color:var(--deep-navy)]">
            First cohort launching May 2026. Places are limited.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
            <Link href="/clarity-check" className="btn-primary">
              Start with the free Clarity Check first
            </Link>
            <a
              href="mailto:hello@spark-life-lab.com?subject=Identity%20Lab%20interest"
              className="btn-secondary"
            >
              Contact us directly →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
