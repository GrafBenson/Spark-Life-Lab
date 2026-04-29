import type { Metadata } from "next";
import Link from "next/link";

import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact SparkLifeLab",
  description: "Reach us at hello@spark-life-lab.com.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="section-pad" style={{ background: "var(--paper)" }}>
        <div className="container-narrow">
          <p className="kicker">We&apos;d love to hear from you.</p>
          <span aria-hidden className="section-divider mt-4" />
          <h1 className="display-hero">Get in touch.</h1>
          <p className="lead-copy mt-6 max-w-lg">
            Whether you have a question about the Clarity Check, want to know
            more about the SparkLife Identity Lab, or simply want to reach us —
            we read every message and reply personally.
          </p>
        </div>
      </section>

      {/* ─── Contact details + what we help with ─── */}
      <section className="section-pad section-soft">
        <div className="container-mid">
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Email block */}
            <div>
              <p className="kicker">Email us</p>
              <span aria-hidden className="section-divider mt-4" />
              <p className="body-copy max-w-sm">
                The best way to reach us is by email. We aim to respond within
                two working days.
              </p>
              <a
                href={`mailto:${brand.email}?subject=Hello%20from%20the%20website`}
                className="btn-primary mt-7"
              >
                {brand.email}
              </a>
            </div>

            {/* What we can help with */}
            <div>
              <p className="kicker">What we can help with</p>
              <span aria-hidden className="section-divider mt-4" />
              <ul className="space-y-0">
                {[
                  "Questions about the Midlife Clarity Check",
                  "Interest in the SparkLife Identity Lab",
                  "Press and partnership enquiries",
                  "Anything else on your mind",
                ].map((item) => (
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
            </div>
          </div>
        </div>
      </section>

      {/* ─── Identity Lab interest ─── */}
      <section className="section-pad section-lavender">
        <div className="container-narrow">
          <h2 className="display-section">
            Interested in the Identity Lab?
          </h2>
          <span aria-hidden className="section-divider mt-5" />
          <p className="body-copy max-w-prose">
            If you&apos;d like to register your interest in the first SparkLife
            Identity Lab cohort, the fastest route is via the waitlist on the
            Identity Lab page. Places are limited and the first cohort launches
            May 2026.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
            <Link href="/identity-lab" className="btn-primary">
              Register your interest →
            </Link>
            <a
              href={`mailto:${brand.email}?subject=Identity%20Lab%20interest`}
              className="btn-secondary"
            >
              Or email us directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
