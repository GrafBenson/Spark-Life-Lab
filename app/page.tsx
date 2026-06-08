import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { HeroVideo } from "@/components/hero-video";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "SparkLifeLab — Midlife Clarity & Guided Transformation",
  description:
    "A calm, guided space for people in midlife who sense something has shifted. Explore the SparkLife Identity Lab — a guided journey to clarity, values, and direction.",
  openGraph: {
    type: "website",
    title: "SparkLifeLab — Find Your Way Through Midlife",
    description:
      "A calm, guided space for people in midlife who sense something has shifted. Explore the SparkLife Identity Lab.",
    siteName: "SparkLifeLab",
  },
};

// ─── Static founder data (approved V1.3 copy — text and photos are hardcoded) ────

const founders = [
  {
    id: "founder-barbel",
    name: "Bärbel Tress, PhD",
    role: "Co-founder",
    bio: "A scientist and maven who spent decades guiding researchers forward — and found her own path forward when she discovered her genius and purpose in midlife.",
    linkedinUrl: "https://www.linkedin.com/in/baerbeltress",
    linkedinAriaLabel: "Bärbel Tress on LinkedIn (opens in new tab)",
    photo: "/images/founder_barbel.png",
    photoAlt: "Bärbel Tress, Co-founder of SparkLifeLab",
  },
  {
    id: "founder-gunther",
    name: "Gunther Tress, PhD",
    role: "Co-founder",
    bio: "A communicator, scientist, and storyteller who built a career making complex ideas come alive — and brings that same clarity, warmth, and lightness to midlife transformation.",
    linkedinUrl: "https://www.linkedin.com/in/gunthertress",
    linkedinAriaLabel: "Gunther Tress on LinkedIn (opens in new tab)",
    photo: "/images/founder_gunther.png",
    photoAlt: "Gunther Tress, Co-founder of SparkLifeLab",
  },
  {
    id: "founder-scott",
    name: "Scott E. Burton",
    role: "Co-founder",
    bio: "A strategist and guide with decades in leadership and transformation who found that the most important journey was the one inward.",
    linkedinUrl: "https://www.linkedin.com/in/scotteburton",
    linkedinAriaLabel: "Scott E. Burton on LinkedIn (opens in new tab)",
    photo: "/images/founder_scott.png",
    photoAlt: "Scott E. Burton, Co-founder of SparkLifeLab",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  // ── Image alt text for the local /public/images assets ──
  const guidanceImageAlt =
    "A small group in warm, unhurried conversation — the feeling of being heard and accompanied.";
  const travelersImageAlt =
    "Two people sharing a reflective conversation at an outdoor table against a coastal sunset — the warmth of shared understanding.";
  const identityMapImageAlt =
    "SparkLife Identity Map showing a visual path for clarity, values, strengths, growth, and direction";
  const stakesImageAlt =
    "Three people walking together along a coastal path at sunset — fellow travellers moving forward with intention.";

  return (
    <main>

      {/* ─── SECTION 1 — HERO ─── */}
      <section id="hero" className="hero">
        <div className="hero-grid section-inner">
          <div>
            <p className="eyebrow">A guided space for midlife clarity</p>
            <h1>
              You&apos;ve built a good life. So why does something feel{" "}
              <em style={{ color: "var(--ember)" }}>off?</em>
            </h1>
            <p className="hero-copy">
              That quiet restlessness. The sense that something has shifted but you can&rsquo;t
              quite name it. You&rsquo;re not lost — you&rsquo;re at a threshold. SparkLifeLab
              walks alongside people in midlife who are ready to find clarity, reconnect with
              what matters, and step into what comes next.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/identity-lab/">
                Explore the SparkLife Identity Lab →
              </Link>
              <a className="hero-learn-more" href="#problem">
                Learn more ↓
              </a>
            </div>
          </div>

          <HeroVideo
            src="/videos/sll-hero-sunrise.mp4"
            poster="/images/sll-hero-sunrise-start-poster.png"
            finalPoster="/images/sll-hero-sunrise-poster.jpeg"
            alt="A lone figure standing on a mountain ridge above the clouds at sunrise — a sense of quiet orientation and possibility."
          />
        </div>
      </section>

      {/* ─── SECTION 2 — THE PROBLEM / MIDLIFE FOG ─── */}
      <Reveal as="section" id="problem" className="section-problem">
        <div className="section-inner narrow">
          <p className="eyebrow-white">What you&rsquo;re experiencing has a name.</p>
          <h2>The Midlife Fog</h2>
          <p>
            There is a moment many people reach in midlife — quietly, without drama. The
            day has been full. Life is working, by most measures. And yet, when things go
            still, something feels slightly off. Not broken. Just… no longer quite yours.
          </p>
          <p>
            What you are experiencing has a name. At SparkLifeLab, we call it the Midlife
            Fog — the phase when old clarity begins to soften and a new direction has not
            yet formed. Familiar roles feel constraining. Old motivations feel thinner.
            Something new is trying to emerge, but it is not yet clear.
          </p>
          <p>This is not a crisis. It is not a sign that something has gone wrong.</p>
          <blockquote className="pull-quote">
            It is a signal — that your life is ready to realign with who you are becoming now.
          </blockquote>
        </div>
      </Reveal>

      {/* ─── SECTION 3A — A CALM GUIDED SPACE ─── */}
      <Reveal as="section" id="about" className="section-guidance">
        <div className="guidance-inner">
          <div className="guidance-text">
            <p className="eyebrow">A calm guided space to regain orientation</p>
            <h2>You don&rsquo;t have to figure this out alone.</h2>
            <p className="lead founders-lead">
              SparkLifeLab exists for people in midlife who sense that something in their
              life no longer fits — even if, from the outside, everything looks fine. We
              exist because midlife deserves a more thoughtful, humane framing — as a
              meaningful threshold where experience, longing, and possibility meet.
            </p>
            <p className="lead founders-lead" style={{ marginTop: "1rem" }}>
              Feeling stuck or uncertain is not a flaw. It is often a signal that growth is
              asking for attention. We don&rsquo;t promise quick fixes or dramatic reinvention. We
              walk alongside people as guides — offering structure, reflection, and
              companionship as they find their own direction forward.
            </p>
          </div>
          <Reveal delay={150} className="guidance-image-reveal">
            <Image
              src="/images/sll-people-07.jpg"
              alt={guidanceImageAlt}
              width={1200}
              height={490}
              className="guidance-image"
              sizes="(max-width: 1024px) 100vw, 820px"
              priority
            />
          </Reveal>
        </div>
      </Reveal>

      {/* ─── SECTION 3B — FELLOW TRAVELERS ─── */}
      <Reveal as="section" id="travelers" className="section-travelers">
        <div className="travelers-grid section-inner" style={{ maxWidth: "var(--max)", margin: "0 auto" }}>

          <div>
            <Image
              src="/images/sll-sunrise-05.jpg"
              alt={travelersImageAlt}
              width={700}
              height={480}
              className="travelers-image"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>

          <div>
            <p className="eyebrow">We&rsquo;re fellow travellers</p>
            <h2>Why we built SparkLifeLab</h2>
            <p style={{ fontStyle: "italic", color: "var(--muted)", marginBottom: "1.25rem" }}>
              Not experts standing apart — companions on the same path.
            </p>
            <p>
              SparkLifeLab began with a quiet question many people reach in midlife: Is this
              really it — or is something else trying to emerge?
            </p>
            <p>
              The three of us — Bärbel, Gunther, and Scott — met during an online course on
              life purpose. Our careers were established, our lives looked solid from the
              outside. Yet each of us felt a growing sense that the stories we were living
              no longer quite fit. Something had shifted — subtle, persistent, hard to name.
            </p>
            <p>
              What helped us most was the chance to slow down together. Space, time, and
              companionship. Gradually, clarity emerged. We realised this was a threshold —
              a meaningful crossing many people reach in midlife, often alone.
              SparkLifeLab grew from the wish that something like this had existed when we
              first felt that quiet restlessness.
            </p>
            <p>
              We&rsquo;re still on that path ourselves, and we&rsquo;re glad to walk it with you.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              <Link className="button-text" href="/about/">
                Read our full story →
              </Link>
            </p>
          </div>
        </div>

        {/* Founder cards */}
        <div className="section-inner" style={{ marginTop: "4rem", borderTop: "1px solid var(--line)", paddingTop: "3.5rem" }}>
          <div className="founder-grid">
            {founders.map((founder) => (
              <article className="founder-card" key={founder.id}>
                <Image
                  src={founder.photo}
                  alt={founder.photoAlt}
                  width={100}
                  height={100}
                  className="founder-photo"
                />
                <h3>{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p>{founder.bio}</p>
                {founder.linkedinUrl && (
                  <a
                    className="founder-linkedin"
                    href={founder.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={founder.linkedinAriaLabel}
                  >
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                  </a>
                )}
              </article>
            ))}
          </div>

          <p className="founders-closing">Co-founders. Fellow travellers. Still becoming.</p>
        </div>
      </Reveal>

      {/* ─── SECTION 4 — HOW IT WORKS ─── */}
      <Reveal as="section" id="plan" className="section-plan">
        <div className="section-inner">
          <p className="eyebrow">A clear path forward</p>
          <h2>How SparkLifeLab works</h2>

          <div className="steps">
            <article className="step-card step-card-default">
              <div className="step-number">01</div>
              <h3>Locate yourself</h3>
              <p>
                Start by naming where you are. Recognise what has shifted and begin to
                understand what is asking for your attention.
              </p>
            </article>

            <article className="step-card step-card-featured">
              <div className="step-number">02</div>
              <h3>Join a guided experience</h3>
              <p>
                Deepen your clarity through the SparkLife Identity Lab — a guided journey
                to help you understand who you are now and shape your next chapter with
                intention.
              </p>
            </article>

            <article className="step-card step-card-default">
              <div className="step-number">03</div>
              <h3>Live your spark</h3>
              <p>
                Begin living your next chapter — supported by a community that keeps you
                inspired and grounded.
              </p>
            </article>
          </div>

          <div className="plan-cta">
            <Link className="button button-primary" href="/identity-lab/">
              Explore the SparkLife Identity Lab →
            </Link>
          </div>
          <p className="plan-closing">
            The path forward doesn&rsquo;t need to be clear all at once. It only needs to begin.
          </p>
        </div>
      </Reveal>

      {/* ─── SECTION 6 — SPARKLIFE IDENTITY LAB ─── */}
      <Reveal as="section" id="identity-lab" className="section-lab">
        <div className="section-inner">
          <div className="lab-grid">
            {/* Text + CTA */}
            <div>
              <p className="eyebrow">When you&rsquo;re ready for the next step.</p>
              <h2>The SparkLife Identity Lab</h2>
              <p
                className="lead"
                style={{ fontStyle: "italic", maxWidth: "600px", marginBottom: "1.25rem", marginTop: "1.25rem" }}
              >
                Your guided first step into clarity
              </p>
              <p style={{ maxWidth: "680px" }}>
                Once you have a clearer sense of where you are, the SparkLife Identity Lab
                offers the next step — a guided transformation journey to help you understand
                who you are now, what truly matters, and how to move forward with intention.
              </p>
              <p style={{ maxWidth: "680px" }}>
                In a small, supported group, you will explore your values, your strengths,
                and the direction that feels most aligned with who you are becoming. Not a
                course. Not coaching.
              </p>
              <p style={{ maxWidth: "680px" }}>
                The journey ends with your personal <strong>IdentityMap</strong>: a
                beautifully designed document that brings together everything you discovered —
                your values, strengths, purpose, and emerging future. A compass you keep.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <Link className="button button-secondary" href="/identity-lab/">
                  Learn more about the SparkLife Identity Lab →
                </Link>
              </div>
              <p className="lab-meta">Places are limited. Applications are now open.</p>
            </div>

            {/* Identity Map visual */}
            <div className="lab-map-wrap">
              <Image
                src="/images/sll-map-007.jpg"
                alt={identityMapImageAlt}
                width={1024}
                height={1536}
                className="lab-map-image"
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
          </div>
        </div>
      </Reveal>

      {/* ─── SECTION 7 — A QUIET TRUTH WORTH NAMING ─── */}
      <Reveal as="section" id="stakes" className="section-stakes">
        <div className="stakes-grid">
          <div>
            <p className="eyebrow">A quiet truth worth naming.</p>
            <h2 style={{ color: "var(--navy)" }}>The fog doesn&rsquo;t lift on its own.</h2>
            <p style={{ color: "rgba(32,43,65,0.82)" }}>
              The gap between who you are and how you&rsquo;re living tends to widen, not
              close, without attention. Not dramatically — just slowly, quietly.
            </p>
            <p style={{ color: "rgba(32,43,65,0.82)" }}>
              And the longer the gap stays unnamed, the harder it becomes to cross.
            </p>
            <p className="stakes-key">
              The people who find their way through are rarely the ones who had all the
              answers. They&rsquo;re the ones who took one honest step.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              <Link className="button-text" href="/identity-lab/">
                Explore the SparkLife Identity Lab →
              </Link>
            </p>
          </div>
          <div>
            <Image
              src="/images/sll-sunrise-04.jpg"
              alt={stakesImageAlt}
              width={640}
              height={420}
              className="stakes-image"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>
        </div>
      </Reveal>

      {/* ─── SECTION 8 — CLOSING CTA ─── */}
      <Reveal as="section" id="closing-cta" className="section-closing">
        <div className="section-inner narrow">
          <h2>Ready to find your way through?</h2>
          <p className="closing-tagline">
            <span className="closing-tagline-lead">Ignite your best life —</span>{" "}
            <span className="closing-tagline-tail">on purpose.</span>
          </p>
          <Link className="button button-primary" href="/identity-lab/">
            Explore the SparkLife Identity Lab →
          </Link>
          <p className="closing-sub">A guided journey to clarity, values, and direction.</p>
        </div>
      </Reveal>

    </main>
  );
}

/* Inline LinkedIn SVG icon — no external dependency */
function LinkedInIcon() {
  return (
    <svg
      className="founder-linkedin-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
