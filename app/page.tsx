import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/scroll-reveal";
import { founders } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — Hero
          Background: Paper | Layout: asymmetric two-column
          H1 three-line break, cinematic scale, ember em
          No tagline here (tagline first appears in Section 8).
          ══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="section-pad-hero"
        style={{ background: "var(--paper)" }}
      >
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr,0.85fr] xl:gap-20">
            {/* Left — copy */}
            <div>
              <p className="kicker">A guided space for midlife clarity</p>
              <span aria-hidden className="section-divider mt-4" />
              <h1 className="display-hero">
                You&apos;ve built a good life.
                <br />
                So why does something
                <br />
                <em>feel off?</em>
              </h1>
              <p className="lead-copy mt-7 max-w-[480px]">
                That quiet restlessness. The sense that something has shifted
                but you can&apos;t quite name it. You&apos;re not lost — you&apos;re at a
                threshold. SparkLifeLab walks alongside people in midlife who
                are ready to find clarity, reconnect with what matters, and
                step into what comes next.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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
                className="hero-image-frame"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src="/images/landscape-01.jpeg"
                  alt="A wide, calm landscape — warm golden light, open space, a figure at a threshold"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="hero-frame-overlay" />
              </div>
              <span aria-hidden className="hero-mark-dot" />
              <span aria-hidden className="hero-mark-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — The Problem / The Midlife Fog
          Background: Cream | Large editorial pull quote
          No heavy dark block — calm, recognitional tone.
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section id="problem" className="section-pad section-soft">
          <div className="container-narrow">
            <p className="kicker">What you&apos;re experiencing has a name.</p>
            <span aria-hidden className="section-divider mt-4" />
            <h2 className="display-section">The Midlife Fog</h2>

            <div className="mt-8 max-w-[600px]">
              <p className="body-copy">
                There is a moment many people reach in midlife — quietly,
                without drama. The day has been full. Life is working, by most
                measures. And yet, when things go still, something feels
                slightly off. Not broken. Just&hellip; no longer quite yours.
              </p>
              <p className="body-copy">
                What you are experiencing has a name. At SparkLifeLab, we call
                it the Midlife Fog — the phase when old clarity begins to
                soften and a new direction has not yet formed. Familiar roles
                feel constraining. Old motivations feel thinner. Something new
                is trying to emerge, but it is not yet clear.
              </p>
              <p className="body-copy">
                This is not a crisis. It is not a sign that something has gone
                wrong.
              </p>
            </div>

            <blockquote className="pull-quote">
              It is a signal — that your life is ready to realign with who you
              are becoming now.
            </blockquote>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — About SparkLifeLab + Founders
          Background: Paper | Trust section
          Two-column intro, then horizontal founder cards (not boxes).
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section
          id="about"
          className="section-pad"
          style={{ background: "var(--paper)" }}
        >
          <div className="container-shell">
            {/* Positioning — two-column */}
            <div className="grid items-start gap-14 lg:grid-cols-2 xl:gap-20">
              <div>
                <p className="kicker">We&apos;ve walked this path ourselves.</p>
                <span aria-hidden className="section-divider mt-4" />
                <h2 className="display-section">
                  A calm, guided space to regain orientation
                </h2>
              </div>
              <div className="pt-2">
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
                <Link href="/about" className="btn-secondary mt-7">
                  Read our full story
                </Link>
              </div>
            </div>

            {/* Founders — horizontal card interior layout */}
            <div className="mt-20 lg:mt-24">
              <div className="mb-12">
                <p className="kicker">Why we built SparkLifeLab</p>
                <span aria-hidden className="section-divider mt-4" />
                <h3 className="display-section max-w-xl">
                  We&apos;re fellow travellers — not experts standing apart.
                </h3>
                <p className="lead-copy mt-5 max-w-lg">
                  SparkLifeLab began with a quiet question many people reach in
                  midlife: Is this really it — or is something else trying to
                  emerge?
                </p>
              </div>

              {/* Horizontal founder cards — photo left, content right */}
              <div className="grid gap-4 md:grid-cols-3">
                {founders.map((f) => (
                  <div key={f.initials} className="founder-card-h">
                    <div className="founder-avatar-circle">
                      <Image
                        src={`/images/${f.file}`}
                        alt={f.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-[family-name:var(--font-display)] text-[1.05rem] font-medium leading-tight text-[color:var(--deep-navy)]">
                        {f.name}
                      </p>
                      <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--slate-mist)]">
                        {f.role}
                      </p>
                      <p className="mt-2.5 text-[0.875rem] leading-relaxed text-[color:var(--mid-navy)]">
                        {f.bio}
                      </p>
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-[0.75rem] text-[color:var(--ember)] hover:underline"
                      >
                        LinkedIn →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-10 font-[family-name:var(--font-display)] italic text-[color:var(--slate-mist)]">
                Co-founders. Fellow travellers. Still becoming.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — The SparkLife Plan
          Background: Cream | Vertical step timeline — not three equal boxes.
          Large ghost numbers in Cormorant. Step 2 ember tint.
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section id="plan" className="section-pad section-soft">
          <div className="container-shell">
            <div className="mb-14 lg:grid lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="kicker">Three steps. Your pace.</p>
                <span aria-hidden className="section-divider mt-4" />
                <h2 className="display-section">How we walk alongside you</h2>
              </div>
              <div className="mt-6 lg:mt-0 lg:pt-2">
                <p className="lead-copy">
                  Three simple steps. At your own pace. There is no rush —
                  only the next honest step.
                </p>
              </div>
            </div>

            {/* Vertical step rows */}
            <div>
              <div className="step-row">
                <div className="step-num">01</div>
                <div>
                  <span className="step-label">Step one</span>
                  <h3 className="display-sub">
                    Take the Midlife Clarity Check
                  </h3>
                  <p className="body-copy mt-3">
                    Start with a short self-assessment to gain clarity on where
                    you are. Free. 20–30 minutes. No commitment required.
                  </p>
                </div>
              </div>

              <div className="step-row">
                <div className="step-num ember-tint">02</div>
                <div>
                  <span className="step-label">Step two</span>
                  <h3 className="display-sub">Join a guided experience</h3>
                  <p className="body-copy mt-3">
                    Deepen your clarity through the SparkLife Identity Lab — a
                    guided journey to help you understand who you are now and
                    shape your next chapter with intention.
                  </p>
                </div>
              </div>

              <div className="step-row">
                <div className="step-num">03</div>
                <div>
                  <span className="step-label">Step three</span>
                  <h3 className="display-sub">Live your spark</h3>
                  <p className="body-copy mt-3">
                    Begin living your next chapter — supported by a community
                    that keeps you inspired and grounded.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-start gap-5">
              <Link href="/clarity-check" className="btn-primary">
                Start with the Midlife Clarity Check — it&apos;s free →
              </Link>
              <p className="font-[family-name:var(--font-display)] italic text-[0.98rem] text-[color:var(--mid-navy)]">
                The path forward doesn&apos;t need to be clear all at once. It only
                needs to begin.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — Lead Magnet / Midlife Clarity Check
          Background: Deep navy (section-ink) — primary conversion section.
          Two-column: copy + bullets LEFT, conversion panel RIGHT.
          No form on homepage. CTA → /clarity-check.
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section
          id="clarity-check"
          className="section-pad section-ink"
        >
          <div className="container-shell">
            <div className="grid items-start gap-12 lg:grid-cols-[1.1fr,0.9fr] xl:gap-20">
              {/* Left — copy and bullet list */}
              <div>
                <p className="kicker">Free — your first honest step.</p>
                <span
                  aria-hidden
                  className="section-divider mt-4"
                  style={{ background: "var(--ember)" }}
                />
                <h2 className="display-section">
                  The Midlife Clarity Check
                </h2>
                <p className="lead-copy mt-5">
                  A free self-assessment to help you understand where you are —
                  and what may be ready to change.
                </p>
                <p className="body-copy mt-4">
                  Many people in midlife sense that something has shifted —
                  but struggle to find words for it. The Midlife Clarity Check
                  gives you language and structure for that experience.
                </p>
                <p
                  className="body-copy"
                  style={{ color: "rgba(254,253,248,0.82)" }}
                >
                  Six honest questions. Your answers reveal exactly where you
                  are in the Midlife Fog.
                </p>

                {/* Bullet list */}
                <div className="mt-6">
                  {[
                    "Recognise the signals that something in your life is ready to shift",
                    "Understand where you are in your midlife passage",
                    "Receive a personalised reflection based on your answers",
                    "Take a first step toward clarity — gently, at your own pace",
                  ].map((item) => (
                    <div key={item} className="cc-list-item">
                      <span aria-hidden className="cc-list-arrow">→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — conversion panel */}
              <div className="cc-panel">
                <p
                  className="eyebrow"
                  style={{ color: "var(--ember)" }}
                >
                  Free download
                </p>
                <h3
                  className="display-sub mt-3"
                  style={{ color: "var(--paper)" }}
                >
                  The Midlife Clarity Check
                </h3>
                <p
                  className="mt-3 text-[0.9rem] leading-relaxed"
                  style={{ color: "rgba(254,253,248,0.75)" }}
                >
                  A self-assessment with 6 honest questions and 3 scored result
                  profiles. Takes 20–30 minutes. It costs nothing. And it
                  starts with honesty.
                </p>

                {/* Metadata tags */}
                <div
                  className="mt-6 flex flex-wrap gap-2 border-t pt-5"
                  style={{ borderColor: "rgba(254,253,248,0.1)" }}
                >
                  {[
                    "6 honest questions",
                    "3 scored profiles",
                    "20–30 minutes",
                    "Free · PDF",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.12em]"
                      style={{
                        background: "rgba(254,253,248,0.08)",
                        color: "rgba(254,253,248,0.6)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7">
                  <Link
                    href="/clarity-check"
                    className="btn-primary on-dark w-full justify-center"
                  >
                    Get my free Midlife Clarity Check →
                  </Link>
                </div>
                <p
                  className="mt-4 text-[0.75rem] leading-relaxed"
                  style={{ color: "rgba(254,253,248,0.42)" }}
                >
                  No spam. No commitment. Your data is handled with care.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — SparkLife Identity Lab
          Background: Paper | Deeper invitation. IdentityMap as artifact.
          MUST: not called coaching or course.
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section
          id="identity-lab"
          className="section-pad"
          style={{ background: "var(--paper)" }}
        >
          <div className="container-shell">
            <div className="grid items-start gap-12 lg:grid-cols-[1.1fr,0.9fr] xl:gap-20">
              {/* Left — copy */}
              <div>
                <p className="kicker">When you&apos;re ready for the next step.</p>
                <span aria-hidden className="section-divider mt-4" />
                <h2 className="display-section">
                  The SparkLife Identity Lab
                </h2>
                <p className="lead-copy mt-5">
                  Your guided first step into clarity
                </p>
                <p className="body-copy mt-5">
                  Once you have a clearer sense of where you are, the SparkLife
                  Identity Lab offers the next step — a guided transformation
                  journey to help you understand who you are now, what truly
                  matters, and how to move forward with intention.
                </p>
                <p className="body-copy">
                  In a small, supported group, you will explore your values,
                  your strengths, and the direction that feels most aligned
                  with who you are becoming. Not a course. Not coaching.
                </p>
                <p className="body-copy">
                  A guided crossing — with others who understand what this
                  passage feels like.
                </p>
                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <Link href="/identity-lab" className="btn-primary">
                    Learn more about the SparkLife Identity Lab →
                  </Link>
                </div>
                <p className="mt-4 text-[0.75rem] uppercase tracking-[0.1em] text-[color:var(--slate-mist)]">
                  First cohort launching May 2026. Places are limited.
                </p>
              </div>

              {/* Right — IdentityMap artifact card */}
              <div>
                <div className="identity-map-card">
                  <div className="identity-map-header">
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">
                      Your outcome
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-display)] text-[1.15rem] font-normal">
                      IdentityMap
                    </p>
                    <p className="mt-0.5 text-[0.8rem] opacity-65">
                      A compass you keep.
                    </p>
                  </div>
                  <div className="identity-map-body">
                    <div className="identity-map-field">
                      <span className="identity-map-field-label">Values</span>
                      <div className="identity-map-field-bar lavender-long" />
                    </div>
                    <div className="identity-map-field">
                      <span className="identity-map-field-label">Strengths</span>
                      <div className="identity-map-field-bar ember" />
                    </div>
                    <div className="identity-map-field">
                      <span className="identity-map-field-label">Identity</span>
                      <div className="identity-map-field-bar lavender-mid" />
                    </div>
                    <div className="identity-map-field">
                      <span className="identity-map-field-label">Direction</span>
                      <div className="identity-map-field-bar lavender-long" />
                    </div>
                    <div className="identity-map-field">
                      <span className="identity-map-field-label">Future</span>
                      <div className="identity-map-field-bar ember" style={{ width: "55%" }} />
                    </div>
                    <div
                      className="mt-2 border-t pt-4"
                      style={{ borderColor: "var(--color-line)" }}
                    >
                      <p className="font-[family-name:var(--font-display)] italic text-[0.9rem] text-[color:var(--mid-navy)]">
                        &ldquo;A beautifully designed document that brings together
                        everything you discovered.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature list below the card */}
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Small, intimate group format",
                    "Values and identity work",
                    "Peer support and honest dialogue",
                    "Ends with your personal IdentityMap",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[0.88rem] text-[color:var(--mid-navy)]"
                    >
                      <span
                        aria-hidden
                        className="h-px w-4 flex-shrink-0"
                        style={{ background: "var(--ember)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — Stakes
          Background: Light lavender | Atmospheric pause. Not fear-based.
          Minimal — a large italicstatement, one paragraph, a quiet link.
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section id="stakes" className="section-pad section-lavender">
          <div className="container-narrow">
            <h2 className="display-section">A quiet truth worth naming.</h2>
            <span aria-hidden className="section-divider mt-5" />
            <p className="body-copy mt-2 max-w-[540px]">
              The Midlife Fog doesn&apos;t lift on its own. The gap between who you
              are and how you&apos;re living tends to widen, not close, without
              attention. Not dramatically — just slowly, quietly.
            </p>
            <blockquote className="pull-quote">
              The people who find their way through are rarely the ones who had
              all the answers. They&apos;re the ones who took one honest step.
            </blockquote>
            <div className="mt-10">
              <Link href="/clarity-check" className="btn-secondary">
                Start with the free Clarity Check →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — Closing CTA
          Background: Cream | FIRST and ONLY homepage appearance of tagline.
          Resolved, elegant, centered ending.
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <section id="closing-cta" className="section-pad section-soft">
          <div className="container-narrow text-center">
            <h2 className="display-section">
              Start with a free, honest check-in.
            </h2>
            {/* Tagline — appears here and in footer only */}
            <p className="mt-5 font-[family-name:var(--font-display)] text-[1.5rem] italic tracking-[0.02em] text-[color:var(--ember)]">
              Ignite Your Best Life — On Purpose
            </p>
            <p className="lead-copy mx-auto mt-5 max-w-xs">
              20–30 minutes. No commitment. Just clarity.
            </p>
            <div className="mt-10">
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
