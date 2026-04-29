import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { founders } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "SparkLifeLab was founded by Bärbel Tress, Gunther Tress, and Scott E. Burton — fellow travellers in midlife who believe this threshold deserves a more thoughtful, humane framing.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Intro ─── */}
      <section className="section-pad" style={{ background: "var(--paper)" }}>
        <div className="container-shell">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="kicker">We&apos;ve walked this path ourselves.</p>
              <span aria-hidden className="section-divider" />
              <h1 className="display-hero">
                A calm, guided space to regain orientation
              </h1>
            </div>
            <div>
              <p className="body-copy">
                SparkLifeLab exists for people in midlife who sense that
                something in their life no longer fits — even if, from the
                outside, everything looks fine. We exist because midlife
                deserves a more thoughtful, humane framing — as a meaningful
                threshold where experience, longing, and possibility meet.
              </p>
              <p className="body-copy">
                Feeling stuck or uncertain is not a flaw. It is often a signal
                that growth is asking for attention. We don&apos;t promise quick
                fixes or dramatic reinvention. We walk alongside people as
                guides — offering structure, reflection, and companionship as
                they find their own direction forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Founders' story ─── */}
      <section className="section-pad section-soft">
        <div className="container-narrow">
          <p className="kicker">Why we built SparkLifeLab</p>
          <span aria-hidden className="section-divider" />
          <h2 className="display-section">
            We&apos;re fellow travellers — not experts standing apart.
          </h2>

          <div className="mt-10 space-y-5">
            <p className="body-copy">
              SparkLifeLab began with a quiet question many people reach in
              midlife: Is this really it — or is something else trying to
              emerge?
            </p>
            <p className="body-copy">
              The three of us — Bärbel, Gunther, and Scott — met during an
              online course on life purpose. None of us was in a difficult
              place. Our careers were established, our lives looked solid and
              successful from the outside. Yet each of us felt a growing sense
              that the stories we were living no longer quite fit. Something
              had shifted — subtle, persistent, hard to name.
            </p>
            <p className="body-copy">
              What helped us most wasn&apos;t quick advice or ready-made solutions,
              but the chance to slow down together. Space, time, and
              companionship. Conversations that didn&apos;t rush us toward answers,
              but helped us listen more closely to what mattered now.
              Gradually, clarity emerged.
            </p>
            <p className="body-copy">
              We realised this wasn&apos;t a personal failure. It was a threshold —
              a meaningful crossing many people reach in midlife, often alone
              and without support. SparkLifeLab grew from the wish that
              something like this had existed when we first felt that quiet
              restlessness. We&apos;re still on that path ourselves — and we&apos;re
              glad to walk it with you.
            </p>
          </div>

          <blockquote className="problem-reframe">
            Co-founders. Fellow travellers. Still becoming.
          </blockquote>
        </div>
      </section>

      {/* ─── Founder cards ─── */}
      <section className="section-pad" style={{ background: "var(--paper)" }}>
        <div className="container-shell">
          <div className="text-center">
            <p className="kicker">The team</p>
            <span aria-hidden className="section-divider center" />
            <h2 className="display-section">Meet the founders</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {founders.map((f) => (
              <div key={f.initials} className="founder-card">
                <div className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full">
                  <Image
                    src={`/images/${f.file}`}
                    alt={f.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <p className="font-[family-name:var(--font-display)] text-xl text-[color:var(--deep-navy)]">
                  {f.name}
                </p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-[color:var(--slate-mist)]">
                  {f.role}
                </p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-[color:var(--mid-navy)]">
                  {f.bio}
                </p>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[0.78rem] text-[color:var(--ember)] hover:underline"
                >
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad section-soft">
        <div className="container-narrow text-center">
          <h2 className="display-section">Ready to take the first step?</h2>
          <p className="lead-copy mx-auto mt-5 max-w-sm">
            The Midlife Clarity Check is free, takes 20–30 minutes, and starts
            with honesty.
          </p>
          <div className="mt-9">
            <Link href="/clarity-check" className="btn-primary">
              Get the free Midlife Clarity Check →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
