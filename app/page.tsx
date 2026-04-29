import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/scroll-reveal";
import { founders } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────
          SECTION 1 — Hero
          Background: Paper | Layout: two-column
          Tagline must NOT appear here.
          ───────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="section-pad"
        style={{ background: "var(--paper)" }}
      >
        <div className="container-shell">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left — copy */}
            <div>
              <p className="kicker">A guided space for midlife clarity</p>
              <h1 className="display-hero">
                You&apos;ve built a good life.
                <br />
                So why does something <em>feel off</em>?
              </h1>
              <p className="lead-copy mt-6 max-w-lg">
                That quiet restlessness. The sense that something has shifted
                but you can&apos;t quite name it. You&apos;re not lost — you&apos;re at a
                threshold. SparkLifeLab walks alongside people in midlife who
                are ready to find clarity, reconnect with what matters, and
                step into what comes next.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4">
                <Link href="#clarity-check" className="btn-primary">
                  Download the Midlife Clarity Check — free
                </Link>
                <Link href="#problem" className="btn-ghost">
                  Learn more ↓
                </Link>
              </div>
            </div>

            {/* Right — landscape image */}
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-sm"
                style={{ aspectRatio: "3 / 4" }}
              >
                <Image
                  src="/images/landscape-01.jpeg"
                  alt="A wide, calm landscape — warm golden light, open space, a figure at a threshold"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="hero-frame-overlay" />
              </div>
              <span aria-hidden className="hero-mark-dot" />
              <span aria-hidden className="hero-mark-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2 — The Problem / The Midlife Fog
          Background: Cream (per Addendum — not dark navy)
          ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section id="problem" className="section-pad section-soft">
          <div className="container-narrow">
            <p className="kicker">What you&apos;re experiencing has a name.</p>
            <span aria-hidden className="section-divider" />
            <h2 className="display-section">The Midlife Fog</h2>
            <div className="mt-8">
              <p className="body-copy">
                There is a moment many people reach in midlife — quietly,
                without drama. The day has been full. Life is working, by most
                measures. And yet, when things go still, something feels
                slightly off. Not broken. Just… no longer quite yours.
              </p>
              <p className="body-copy">
                What you are experiencing has a name. At SparkLifeLab, we call
                it the Midlife Fog — the phase when old clarity begins to soften
                and a new direction has not yet formed. Familiar roles feel
                constraining. Old motivations feel thinner. Something new is
                trying to emerge, but it is not yet clear.
              </p>
              <p className="body-copy">
                This is not a crisis. It is not a sign that something has gone
                wrong.
              </p>
            </div>
            <blockquote className="problem-reframe">
              It is a signal — that your life is ready to realign with who you
              are becoming now.
            </blockquote>
          </div>
        </section>
      </ScrollReveal>

      {/* ─────────────────────────────────────────────────────────
          SECTION 3 — About SparkLifeLab + Founders
          Background: Paper
          ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          id="about"
          className="section-pad"
          style={{ background: "var(--paper)" }}
        >
          <div className="container-shell">
            {/* SLL positioning — two-column */}
            <div className="grid items-start gap-14 lg:grid-cols-2">
              <div>
                <p className="kicker">We&apos;ve walked this path ourselves.</p>
                <span aria-hidden className="section-divider" />
                <h2 className="display-section">
                  A calm, guided space to regain orientation
                </h2>
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
                  We don&apos;t promise quick fixes or dramatic reinvention. Instead,
                  we walk alongside people as guides — offering structure,
                  reflection, and companionship as they find their own direction
                  forward.
                </p>
                <Link href="/about" className="btn-secondary mt-6">
                  Read our full story
                </Link>
              </div>
            </div>

            {/* Founders */}
            <div className="mt-20 lg:mt-24">
              <div className="text-center">
                <p className="kicker">Why we built SparkLifeLab</p>
                <span aria-hidden className="section-divider center" />
                <h3 className="display-section">
                  We&apos;re fellow travellers — not experts standing apart.
                </h3>
                <p className="lead-copy mx-auto mt-5 max-w-lg">
                  SparkLifeLab began with a quiet question many people reach in
                  midlife: Is this really it — or is something else trying to
                  emerge?
                </p>
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {founders.map((f) => (
                  <div key={f.initials} className="founder-card">
                    {/* Circular founder photo */}
                    <div className="relative mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full">
                      <Image
                        src={`/images/${f.file}`}
                        alt={f.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <p className="font-[family-name:var(--font-display)] text-lg text-[color:var(--deep-navy)]">
                      {f.name}
                    </p>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-[color:var(--slate-mist)]">
                      {f.role}
                    </p>
                    <p className="mt-3 text-[0.88rem] leading-relaxed text-[color:var(--mid-navy)]">
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

              <p className="mt-10 text-center font-[family-name:var(--font-display)] italic text-[color:var(--slate-mist)]">
                Co-founders. Fellow travellers. Still becoming.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─────────────────────────────────────────────────────────
          SECTION 4 — The SparkLife Plan
          Background: Cream | Step cards: equal Light Lavender (no dark Step 2)
          ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section id="plan" className="section-pad section-soft">
          <div className="container-shell">
            <div className="text-center">
              <p className="kicker">Three steps. Your pace.</p>
              <span aria-hidden className="section-divider center" />
              <h2 className="display-section">How we walk alongside you</h2>
              <p className="lead-copy mx-auto mt-4 max-w-md">
                Three simple steps. At your own pace.
              </p>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-3">
              <article className="step-card">
                <span className="step-icon">01</span>
                <h3 className="display-sub">Take the Midlife Clarity Check</h3>
                <p className="body-copy">
                  Start with a short self-assessment to gain clarity on where
                  you are. Free. 20–30 minutes.
                </p>
              </article>
              <article className="step-card">
                <span className="step-icon">02</span>
                <h3 className="display-sub">Join a guided experience</h3>
                <p className="body-copy">
                  Deepen your clarity through the SparkLife Identity Lab — a
                  guided journey to help you understand who you are now and
                  shape your next chapter with intention.
                </p>
              </article>
              <article className="step-card">
                <span className="step-icon">03</span>
                <h3 className="display-sub">Live your spark</h3>
                <p className="body-copy">
                  Begin living your next chapter — supported by a community
                  that keeps you inspired and grounded.
                </p>
              </article>
            </div>

            <div className="mt-12 flex flex-col items-center gap-5 text-center">
              <Link href="#clarity-check" className="btn-primary">
                Start with the Midlife Clarity Check — it&apos;s free →
              </Link>
              <p className="font-[family-name:var(--font-display)] italic text-[0.95rem] text-[color:var(--mid-navy)]">
                The path forward doesn&apos;t need to be clear all at once. It only
                needs to begin.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─────────────────────────────────────────────────────────
          SECTION 5 — Lead Magnet / The Midlife Clarity Check
          Background: Paper | Layout: two-column
          No homepage form — CTA links to /clarity-check
          ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          id="clarity-check"
          className="section-pad"
          style={{ background: "var(--paper)" }}
        >
          <div className="container-shell">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* Document preview card */}
              <div className="section-paper">
                <p className="eyebrow">Free Download</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[color:var(--deep-navy)]">
                  The Midlife Clarity Check
                </p>
                <ul className="mt-6 space-y-0 divide-y divide-[color:var(--color-line)]">
                  {[
                    "Recognise the signals that something is ready to shift",
                    "Understand where you are in your midlife passage",
                    "Receive a personalised reflection based on your answers",
                    "Take a first step toward clarity — at your own pace",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 py-3 text-[0.9rem] text-[color:var(--mid-navy)]"
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
                <p className="mt-5 text-[0.72rem] uppercase tracking-[0.1em] text-[color:var(--slate-mist)]">
                  6 honest questions · 3 scored profiles · 20–30 minutes · PDF
                </p>
              </div>

              {/* Copy + CTA */}
              <div>
                <p className="kicker">Free — your first honest step.</p>
                <span aria-hidden className="section-divider" />
                <h2 className="display-section">The Midlife Clarity Check</h2>
                <p className="body-copy mt-5">
                  Many people in midlife sense that something has shifted — but
                  struggle to find words for it. The Midlife Clarity Check gives
                  you language and structure for that experience.
                </p>
                <p className="body-copy">
                  Six honest questions. Your answers reveal exactly where you
                  are in the Midlife Fog.
                </p>
                <p className="mt-4 font-[family-name:var(--font-display)] italic text-[color:var(--mid-navy)]">
                  It takes 20–30 minutes. It costs nothing. And it starts with
                  honesty.
                </p>
                <Link href="/clarity-check" className="btn-primary mt-7">
                  Get my free Midlife Clarity Check →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─────────────────────────────────────────────────────────
          SECTION 6 — SparkLife Identity Lab
          Background: Cream | Mention IdentityMap as tangible outcome
          Not coaching. Not a course.
          ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section id="identity-lab" className="section-pad section-soft">
          <div className="container-shell">
            <div className="grid items-start gap-14 lg:grid-cols-2">
              {/* Copy */}
              <div>
                <p className="kicker">When you&apos;re ready for the next step.</p>
                <span aria-hidden className="section-divider" />
                <h2 className="display-section">
                  The SparkLife Identity Lab
                </h2>
                <p className="body-copy mt-5">
                  Once you have a clearer sense of where you are, the SparkLife
                  Identity Lab offers the next step — a guided transformation
                  journey to help you understand who you are now, what truly
                  matters, and how to move forward with intention.
                </p>
                <p className="body-copy">
                  In a small, supported group, you will explore your values,
                  your strengths, and the direction that feels most aligned with
                  who you are becoming. Not a course. Not coaching.
                </p>
                <p className="body-copy">
                  A guided crossing — with others who understand what this
                  passage feels like.
                </p>
                <Link href="/identity-lab" className="btn-secondary mt-6">
                  Learn more about the SparkLife Identity Lab →
                </Link>
              </div>

              {/* Feature panel */}
              <div
                className="rounded-sm p-8"
                style={{
                  background: "var(--paper)",
                  border: "1px solid rgba(139, 143, 166, 0.25)",
                }}
              >
                <p className="eyebrow">SparkLife Identity Lab</p>
                <h3 className="display-sub mt-3">A guided crossing</h3>
                <p className="body-copy mt-3">
                  For people ready to move from fog to clarity — with structure,
                  support, and companionship.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "Small, intimate group format",
                    "Structured self-exploration",
                    "Values and identity work",
                    "Peer support and honest dialogue",
                    "Guided by experienced facilitators",
                    "Ends with your personal IdentityMap",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[0.9rem] text-[color:var(--mid-navy)]"
                    >
                      <span
                        aria-hidden
                        className="text-[color:var(--ember)]"
                      >
                        ○
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-[0.72rem] uppercase tracking-[0.1em] text-[color:var(--slate-mist)]">
                  First cohort launching May 2026. Places are limited.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─────────────────────────────────────────────────────────
          SECTION 7 — Stakes
          Background: Light Lavender (per Addendum)
          Tone: honest, compassionate — not fear-based.
          ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section id="stakes" className="section-pad section-lavender">
          <div className="container-narrow">
            <h2 className="display-section">A quiet truth worth naming.</h2>
            <div className="mt-8 max-w-prose">
              <p className="body-copy">
                The Midlife Fog doesn&apos;t lift on its own. The gap between who
                you are and how you&apos;re living tends to widen, not close, without
                attention. Not dramatically — just slowly, quietly.
              </p>
              <p className="mt-6 font-[family-name:var(--font-display)] text-[1.2rem] italic leading-relaxed text-[color:var(--deep-navy)]">
                The people who find their way through are rarely the ones who
                had all the answers. They&apos;re the ones who took one honest step.
              </p>
            </div>
            <div className="mt-9">
              <Link href="/clarity-check" className="btn-secondary">
                Start with the free Clarity Check →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─────────────────────────────────────────────────────────
          SECTION 8 — Closing CTA
          Background: Cream | FIRST + ONLY homepage appearance of tagline.
          ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section id="closing-cta" className="section-pad section-soft">
          <div className="container-narrow text-center">
            <h2 className="display-section">
              Start with a free, honest check-in.
            </h2>
            {/* Tagline — appears here and footer only */}
            <p className="mt-5 font-[family-name:var(--font-display)] text-[1.35rem] italic tracking-[0.02em] text-[color:var(--ember)]">
              Ignite Your Best Life — On Purpose
            </p>
            <p className="lead-copy mx-auto mt-5 max-w-xs">
              20–30 minutes. No commitment. Just clarity.
            </p>
            <div className="mt-9">
              <Link href="/clarity-check" className="btn-primary">
                Get the free Midlife Clarity Check →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
