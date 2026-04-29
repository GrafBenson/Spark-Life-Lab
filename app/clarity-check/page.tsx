import type { Metadata } from "next";
import Link from "next/link";

import { ClarityCheckForm } from "@/components/clarity-check-form";

export const metadata: Metadata = {
  title: "The Midlife Clarity Check",
  description:
    "A free 6-question self-assessment to help you understand where you are in your midlife passage — and what may be ready to change.",
};

const bullets = [
  "Recognise the signals that something in your life is ready to shift",
  "Understand where you are in your midlife passage",
  "Receive a personalised reflection based on your answers",
  "Take a first step toward clarity — gently, at your own pace",
];

const profiles = [
  {
    num: "01",
    title: "Early Fog",
    body: "Something feels slightly off but you haven't yet named it. The first stirrings of a signal. Recognition begins here.",
  },
  {
    num: "02",
    title: "Deep Fog",
    body: "The fog has settled. Old motivations feel thin. You sense that something needs to change, but the path forward isn't yet visible.",
  },
  {
    num: "03",
    title: "Emerging Clarity",
    body: "You're already in motion. Something new is trying to form. The work now is to give it shape, structure, and direction.",
  },
];

export default function ClarityCheckPage() {
  return (
    <>
      {/* ─── Hero + form ─── */}
      <section className="section-pad" style={{ background: "var(--paper)" }}>
        <div className="container-shell">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            {/* Left — description */}
            <div>
              <p className="kicker">Free — your first honest step.</p>
              <span aria-hidden className="section-divider" />
              <h1 className="display-hero">
                The Midlife Clarity Check
              </h1>
              <p className="lead-copy mt-5 max-w-lg">
                A free self-assessment to help you understand where you are —
                and what may be ready to change.
              </p>
              <p className="body-copy mt-5">
                Six honest questions. Your answers reveal exactly where you are
                in the Midlife Fog. In 20–30 minutes, you will:
              </p>
              <ul className="mt-5 space-y-2.5">
                {bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.95rem] text-[color:var(--mid-navy)]"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 shrink-0 text-[color:var(--ember)]"
                    >
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.78rem] uppercase tracking-[0.1em] text-[color:var(--slate-mist)]">
                6 honest questions · 3 scored profiles · 20–30 minutes · free
              </p>
            </div>

            {/* Right — form */}
            <div className="section-paper">
              <h2 className="display-sub mb-1">
                Get your free Midlife Clarity Check
              </h2>
              <p className="body-copy mb-6 text-[0.9rem]">
                Enter your name and email. We&apos;ll send it straight to your
                inbox.
              </p>
              {/* TODO: Replace ClarityCheckForm with live Kit/ConvertKit embed
                   when embed code is provided by the client.
                   Test flow: submit → welcome email → PDF/assessment delivered. */}
              <ClarityCheckForm />
              <p className="form-help mt-4">
                No spam. No commitment. Your data is handled with care —{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Three scored profiles ─── */}
      <section className="section-pad section-soft">
        <div className="container-shell">
          <div className="text-center">
            <p className="kicker">Three scored result profiles</p>
            <span aria-hidden className="section-divider center" />
            <h2 className="display-section">
              Where are you in the Midlife Fog?
            </h2>
            <p className="lead-copy mx-auto mt-4 max-w-lg">
              Your answers to six honest questions reveal your current position
              in the midlife passage — and what step makes sense next.
            </p>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {profiles.map((p) => (
              <article key={p.num} className="step-card">
                <span className="step-icon">{p.num}</span>
                <h3 className="display-sub">{p.title}</h3>
                <p className="body-copy">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom note ─── */}
      <section
        className="section-pad-tight"
        style={{ background: "var(--paper)" }}
      >
        <div className="container-narrow text-center">
          <p className="lead-copy">
            It takes 20–30 minutes. It costs nothing. And it starts with
            honesty.
          </p>
          <p className="mt-4 font-[family-name:var(--font-display)] italic text-[color:var(--mid-navy)]">
            Ready to begin?
          </p>
        </div>
      </section>
    </>
  );
}
