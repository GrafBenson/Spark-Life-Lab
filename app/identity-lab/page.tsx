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
    label: "Explore one",
    title: "Your values",
    body: "Understand what truly matters to you now — not what mattered ten years ago.",
  },
  {
    label: "Explore two",
    title: "Your strengths",
    body: "Recognise the capacities you carry that are ready to be more fully expressed.",
  },
  {
    label: "Explore three",
    title: "Your identity",
    body: "Clarify who you are becoming, separate from the roles you have played.",
  },
  {
    label: "Explore four",
    title: "Your direction",
    body: "Begin to shape a next chapter that is honest, grounded, and genuinely yours.",
  },
  {
    label: "Your outcome",
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
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr,0.9fr] xl:gap-20">
            {/* Left — description */}
            <div>
              <p className="kicker">When you&apos;re ready for the next step.</p>
              <span aria-hidden className="section-divider mt-4" />
              <h1 className="display-hero">
                The SparkLife
                <br />
                Identity Lab
              </h1>
              <p className="lead-copy mt-6 max-w-lg">
                A guided crossing — with others who understand what this passage
                feels like.
              </p>
              <p className="body-copy mt-5">
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
                The journey ends with your personal{" "}
                <strong>IdentityMap</strong>: a beautifully designed document
                that brings together everything you discovered — your values,
                strengths, purpose, and emerging future. A compass you keep.
              </p>
              <div className="mt-8">
                <Link href="/clarity-check" className="btn-secondary">
                  Start with the free Clarity Check first →
                </Link>
              </div>
            </div>

            {/* Right — interest registration */}
            <div className="section-paper">
              <p className="eyebrow">First cohort · May 2026</p>
              <h2 className="display-sub mt-3">Register your interest</h2>
              <p
                className="mt-3 text-[0.9rem] leading-relaxed"
                style={{ color: "var(--mid-navy)" }}
              >
                Places are limited. Leave your name and email and we&apos;ll notify
                you when registration opens.
              </p>
              {/* TODO: Replace WaitlistForm with live Kit/ConvertKit waitlist
                   sequence embed when provided by the client. */}
              <div className="mt-6">
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

      {/* ─── What you'll explore — vertical step rows ─── */}
      <section className="section-pad section-soft">
        <div className="container-mid">
          <div className="mb-12">
            <p className="kicker">What you&apos;ll explore</p>
            <span aria-hidden className="section-divider mt-4" />
            <h2 className="display-section">A structured crossing</h2>
          </div>

          <div>
            {explorationItems.map((item, i) => (
              <div key={item.title} className="step-row">
                <div className={`step-num ${i === 4 ? "ember-tint" : ""}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <span className="step-label">{item.label}</span>
                  <h3 className="display-sub">{item.title}</h3>
                  <p className="body-copy mt-3">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Not coaching ─── */}
      <section
        id="not-coaching"
        className="section-pad section-lavender"
      >
        <div className="container-narrow">
          <h2 className="display-section">Not a course. Not coaching.</h2>
          <span aria-hidden className="section-divider mt-5" />
          <p className="body-copy mt-2 max-w-prose">
            The SparkLife Identity Lab is something different — a small,
            intimate guided journey for people in midlife who are ready to do
            genuine self-exploration. We don&apos;t teach content at you. We create
            the conditions for you to discover what you already know, and what
            is ready to emerge.
          </p>
          <blockquote className="pull-quote">
            First cohort launching May 2026. Places are limited.
          </blockquote>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
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
