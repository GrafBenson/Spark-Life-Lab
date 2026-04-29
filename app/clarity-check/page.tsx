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
    label: "Profile one",
    title: "Early Fog",
    body: "Something feels slightly off but you haven't yet named it. The first stirrings of a signal. Recognition begins here.",
  },
  {
    num: "02",
    label: "Profile two",
    title: "Deep Fog",
    body: "The fog has settled. Old motivations feel thin. You sense that something needs to change, but the path forward isn't yet visible.",
  },
  {
    num: "03",
    label: "Profile three",
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
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr,0.9fr] xl:gap-20">
            {/* Left — description */}
            <div>
              <p className="kicker">Free — your first honest step.</p>
              <span aria-hidden className="section-divider mt-4" />
              <h1 className="display-hero">
                The Midlife
                <br />
                Clarity Check
              </h1>
              <p className="lead-copy mt-6 max-w-[460px]">
                A free self-assessment to help you understand where you are —
                and what may be ready to change.
              </p>
              <p className="body-copy mt-5">
                Six honest questions. Your answers reveal exactly where you are
                in the Midlife Fog. In 20–30 minutes, you will:
              </p>

              <ul className="mt-6 space-y-0">
                {bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t py-3 text-[0.93rem] text-[color:var(--mid-navy)]"
                    style={{ borderColor: "var(--color-line)" }}
                  >
                    <span
                      aria-hidden
                      className="mt-[0.18rem] shrink-0 text-[0.78rem] text-[color:var(--ember)]"
                    >
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[0.7rem] uppercase tracking-[0.16em] text-[color:var(--slate-mist)]">
                6 honest questions · 3 scored profiles · 20–30 minutes · free
              </p>
            </div>

            {/* Right — form panel */}
            <div className="section-paper">
              <h2 className="display-sub mb-2">
                Get your free Midlife Clarity Check
              </h2>
              <p
                className="text-[0.9rem] leading-relaxed"
                style={{ color: "var(--mid-navy)" }}
              >
                Enter your name and email. We&apos;ll send it straight to your inbox.
              </p>
              {/* TODO: Replace ClarityCheckForm with live Kit/ConvertKit embed
                   when embed code is provided by the client.
                   Test flow: submit → welcome email → PDF/assessment delivered. */}
              <div className="mt-6">
                <ClarityCheckForm />
              </div>
              <p className="form-help mt-4">
                No spam. No commitment. Your data is handled with care —{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Three scored profiles — vertical timeline style ─── */}
      <section className="section-pad section-soft">
        <div className="container-mid">
          <div className="mb-12">
            <p className="kicker">Three scored result profiles</p>
            <span aria-hidden className="section-divider mt-4" />
            <h2 className="display-section">
              Where are you in the Midlife Fog?
            </h2>
            <p className="lead-copy mt-5 max-w-lg">
              Your answers to six honest questions reveal your current position
              in the midlife passage — and what step makes sense next.
            </p>
          </div>

          {/* Profiles as step rows */}
          <div>
            {profiles.map((p) => (
              <div key={p.num} className="step-row">
                <div className="step-num">{p.num}</div>
                <div>
                  <span className="step-label">{p.label}</span>
                  <h3 className="display-sub">{p.title}</h3>
                  <p className="body-copy mt-3">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Closing note ─── */}
      <section
        className="section-pad-tight"
        style={{ background: "var(--paper)" }}
      >
        <div className="container-narrow">
          <blockquote className="pull-quote">
            It takes 20–30 minutes. It costs nothing. And it starts with
            honesty.
          </blockquote>
          <p className="mt-8 font-[family-name:var(--font-display)] italic text-[color:var(--mid-navy)]">
            Ready to begin?
          </p>
        </div>
      </section>
    </>
  );
}
