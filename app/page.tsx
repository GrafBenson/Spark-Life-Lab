import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "SparkLifeLab — Midlife Clarity Coaching & Reflection",
  description:
    "A calm, guided space for people in midlife who sense something has shifted. Take the free Midlife Clarity Check or explore the SparkLife Identity Lab.",
  openGraph: {
    type: "website",
    title: "SparkLifeLab — Midlife Clarity Coaching & Reflection",
    description:
      "A calm, guided space for people in midlife who sense something has shifted. Free Midlife Clarity Check and SparkLife Identity Lab.",
    siteName: "SparkLifeLab",
  },
};

export default function Home() {
  return (
    <main>

      {/* ─── SECTION 1 — HERO ─── */}
      <section id="hero" className="hero">
        <div className="hero-grid section-inner">
          <div>
            <p className="eyebrow">A guided space for midlife clarity</p>
            <h1>
              You've built a good life. So why does something feel off?
            </h1>
            <p className="hero-copy">
              That quiet restlessness. The sense that something has shifted but you can't
              quite name it. You're not lost — you're at a threshold. SparkLifeLab walks
              alongside people in midlife who are ready to find clarity, reconnect with
              what matters, and step into what comes next.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#clarity-check">
                Download the Midlife Clarity Check — free
              </Link>
              <a className="button-text" href="#problem">
                Learn more ↓
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <Image
              src="/images/landscape-01.jpeg"
              alt="Three figures standing on a mountain summit at golden hour, looking out over an expansive landscape."
              width={700}
              height={520}
              priority
              style={{ width: "100%", height: "520px", objectFit: "cover", borderRadius: "4px" }}
            />
          </div>
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

      {/* ─── SECTION 3 — ABOUT + FOUNDERS ─── */}
      <Reveal as="section" id="about" className="section-about">
        <div className="section-inner">
          <p className="eyebrow">We&rsquo;ve walked this path ourselves.</p>
          <h2>A calm, guided space to regain orientation</h2>
          <p className="lead founders-lead">
            SparkLifeLab exists for people in midlife who sense that something in their
            life no longer fits — even if, from the outside, everything looks fine. We
            exist because midlife deserves a more thoughtful, humane framing — as a
            meaningful threshold where experience, longing, and possibility meet.
          </p>
          <p className="lead founders-lead" style={{ marginTop: "1rem" }}>
            Feeling stuck or uncertain is not a flaw. It is often a signal that growth is
            asking for attention. We don't promise quick fixes or dramatic reinvention. We
            walk alongside people as guides — offering structure, reflection, and
            companionship as they find their own direction forward.
          </p>

          <h3 style={{ marginTop: "3rem", marginBottom: "0.4rem" }}>
            Why we built SparkLifeLab
          </h3>
          <p style={{ fontStyle: "italic", color: "var(--muted)", marginBottom: "1.5rem" }}>
            We're fellow travellers — not experts standing apart.
          </p>
          <p className="lead">
            SparkLifeLab began with a quiet question many people reach in midlife: Is this
            really it — or is something else trying to emerge?
          </p>
          <p>
            The three of us — Bärbel, Gunther, and Scott — met during an online course on
            life purpose. None of us was in a difficult place. Our careers were
            established, our lives looked solid and successful from the outside. Yet each
            of us felt a growing sense that the stories we were living no longer quite fit.
            Something had shifted — subtle, persistent, hard to name.
          </p>
          <p>
            What helped us most wasn't quick advice or ready-made solutions, but the
            chance to slow down together. Space, time, and companionship. Conversations
            that didn't rush us toward answers, but helped us listen more closely to what
            mattered now. Gradually, clarity emerged.
          </p>
          <p>
            We realised this wasn't a personal failure. It was a threshold — a meaningful
            crossing many people reach in midlife, often alone and without support.
            SparkLifeLab grew from the wish that something like this had existed when we
            first felt that quiet restlessness. We're still on that path ourselves — and
            we're glad to walk it with you.
          </p>

          {/* Founder cards */}
          <div className="founder-grid">
            {/* Bärbel */}
            <article className="founder-card">
              <Image
                src="/images/founder_barbel.png"
                alt="Bärbel Tress, Co-founder of SparkLifeLab"
                width={100}
                height={100}
                className="founder-photo"
              />
              <h3>Bärbel Tress</h3>
              <p className="founder-role">Co-founder</p>
              <p>
                A scientist and maven who spent decades guiding researchers forward — and
                found her own path forward when she discovered her genius and purpose in
                midlife.
              </p>
              <a
                className="founder-linkedin"
                href="https://www.linkedin.com/in/baerbeltress"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bärbel Tress on LinkedIn (opens in new tab)"
              >
                LinkedIn →
              </a>
            </article>

            {/* Gunther */}
            <article className="founder-card">
              <Image
                src="/images/founder_gunther.png"
                alt="Gunther Tress, Co-founder of SparkLifeLab"
                width={100}
                height={100}
                className="founder-photo"
              />
              <h3>Gunther Tress</h3>
              <p className="founder-role">Co-founder</p>
              <p>
                A communicator, scientist, and storyteller who built a career making
                complex ideas come alive — and brings that same clarity, warmth, and
                lightness to midlife transformation.
              </p>
              <a
                className="founder-linkedin"
                href="https://www.linkedin.com/in/gunthertress"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gunther Tress on LinkedIn (opens in new tab)"
              >
                LinkedIn →
              </a>
            </article>

            {/* Scott */}
            <article className="founder-card">
              <Image
                src="/images/founder_scott.png"
                alt="Scott E. Burton, Co-founder of SparkLifeLab"
                width={100}
                height={100}
                className="founder-photo"
              />
              <h3>Scott E. Burton</h3>
              <p className="founder-role">Co-founder</p>
              <p>
                A strategist and guide with decades in leadership and transformation who
                found that the most important journey was the one inward.
              </p>
              <a
                className="founder-linkedin"
                href="https://www.linkedin.com/in/scotteburton"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scott E. Burton on LinkedIn (opens in new tab)"
              >
                LinkedIn →
              </a>
            </article>
          </div>

          <p className="founders-closing">Co-founders. Fellow travellers. Still becoming.</p>

          <p style={{ marginTop: "1.5rem" }}>
            <Link className="button-text" href="/about/">
              Read our full story →
            </Link>
          </p>
        </div>
      </Reveal>

      {/* ─── SECTION 4 — THE SPARKLIFE PLAN ─── */}
      <Reveal as="section" id="plan" className="section-plan">
        <div className="section-inner">
          <p className="eyebrow">A clear path forward</p>
          <h2>How SparkLifeLab works</h2>

          <div className="steps">
            <article className="step-card step-card-default">
              <div className="step-number">01</div>
              <h3>Take the Midlife Clarity Check</h3>
              <p>
                Start with a short self-assessment to gain clarity on where you are.
                Free. 20–30 minutes.
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

          <div style={{ marginTop: "2.5rem" }}>
            <Link className="button button-primary" href="/clarity-check/">
              Start with the Midlife Clarity Check — it&rsquo;s free →
            </Link>
          </div>
          <p className="plan-closing">
            The path forward doesn't need to be clear all at once. It only needs to begin.
          </p>
        </div>
      </Reveal>

      {/* ─── SECTION 5 — LEAD MAGNET / MIDLIFE CLARITY CHECK ─── */}
      <Reveal as="section" id="clarity-check" className="section-lead">
        <div className="section-inner narrow">
          <p className="eyebrow-white">Free — your first honest step.</p>
          <h2>The Midlife Clarity Check</h2>
          <p className="lead-white">
            A free self-assessment to help you understand where you are — and what may be
            ready to change.
          </p>
          <p style={{ color: "rgba(255,255,255,0.80)", marginTop: "1rem" }}>
            Many people in midlife sense that something has shifted — but struggle to find
            words for it. The Midlife Clarity Check gives you language and structure for
            that experience.
          </p>
          <p style={{ color: "rgba(255,255,255,0.80)" }}>
            Six honest questions. Your answers reveal exactly where you are in the
            Midlife Fog.
          </p>
          <p style={{ color: "rgba(255,255,255,0.80)", marginBottom: "0.5rem" }}>
            In around 20–30 minutes, you will:
          </p>
          <ul className="lead-benefits">
            <li>Recognise the signals that something in your life is ready to shift</li>
            <li>Understand where you are in your midlife passage</li>
            <li>Receive a personalised reflection based on your answers</li>
            <li>Take a first step toward clarity — gently, at your own pace</li>
          </ul>

          <Link className="button button-primary" href="/clarity-check/">
            Get my free Midlife Clarity Check →
          </Link>

          <p className="lead-closing">
            It takes 20–30 minutes. It costs nothing. And it starts with honesty.
          </p>
        </div>
      </Reveal>

      {/* ─── SECTION 6 — SPARKLIFE IDENTITY LAB ─── */}
      <Reveal as="section" id="identity-lab" className="section-lab">
        <div className="section-inner">
          <p className="eyebrow">When you&rsquo;re ready for the next step.</p>
          <h2>The SparkLife Identity Lab</h2>
          <p
            className="lead"
            style={{ fontStyle: "italic", maxWidth: "600px", marginBottom: "1.25rem" }}
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
            A guided crossing — with others who understand what this passage feels like.
          </p>
          <p style={{ maxWidth: "680px" }}>
            The journey ends with your personal <strong>IdentityMap</strong>: a
            beautifully designed document that brings together everything you discovered —
            your values, strengths, purpose, and emerging future. A compass you keep.
          </p>

          <div style={{ marginTop: "2rem" }}>
            <Link className="button button-primary" href="/identity-lab/">
              Learn more about the SparkLife Identity Lab →
            </Link>
          </div>
          <p className="lab-meta">First cohort launching May 2026. Places are limited.</p>
        </div>
      </Reveal>

      {/* ─── SECTION 7 — STAKES ─── */}
      <Reveal as="section" id="stakes" className="section-stakes">
        <div className="section-inner narrow">
          <h2>A quiet truth worth naming.</h2>
          <p>
            The Midlife Fog doesn't lift on its own. The gap between who you are and how
            you're living tends to widen, not close, without attention. Not dramatically
            — just slowly, quietly.
          </p>
          <p className="stakes-key">
            The people who find their way through are rarely the ones who had all the
            answers. They're the ones who took one honest step.
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="button-text" href="/clarity-check/">
              Start with the free Clarity Check →
            </Link>
          </p>
        </div>
      </Reveal>

      {/* ─── SECTION 8 — CLOSING CTA ─── */}
      <Reveal as="section" id="closing-cta" className="section-closing">
        <div className="section-inner narrow">
          <h2>Start with a free, honest check-in.</h2>
          <p className="closing-tagline">Ignite Your Best Life — On Purpose</p>
          <p className="lead" style={{ marginBottom: "2rem" }}>
            20–30 minutes. No commitment. Just clarity.
          </p>
          <Link className="button button-primary" href="/clarity-check/">
            Get the free Midlife Clarity Check →
          </Link>
        </div>
      </Reveal>

    </main>
  );
}
