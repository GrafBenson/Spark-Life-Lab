import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Our Story — SparkLifeLab",
  description:
    "Three co-founders who met on a shared journey and built SparkLifeLab because something like it didn't exist when they needed it. Meet Bärbel, Gunther, and Scott.",
  openGraph: {
    title: "Our Story — SparkLifeLab",
    description:
      "We're fellow travellers, not experts standing apart. Meet the three co-founders of SparkLifeLab.",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd page="Our Story" href="/about/" />
      <main>
      {/* Hero */}
      <section
        className="section"
        style={{ background: "var(--page-bg)", paddingTop: "clamp(4.5rem,6vw,7rem)", paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="section-inner mid">
          <p className="brand-context">SparkLifeLab · About</p>
          <p className="eyebrow">We&rsquo;ve walked this path ourselves.</p>
          <h1>A calm, guided space to regain orientation</h1>
          <p className="page-intro">
            SparkLifeLab exists for people in midlife who sense that something in their
            life no longer fits — even if, from the outside, everything looks fine.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section className="section" style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="section-inner narrow">
          <p className="eyebrow">Why we exist</p>
          <h2>Midlife deserves a more thoughtful framing.</h2>
          <p>
            We exist because midlife deserves a more thoughtful, humane framing — as a
            meaningful threshold where experience, longing, and possibility meet.
          </p>
          <p>
            Feeling stuck or uncertain is not a flaw. It is often a signal that growth is
            asking for attention. We don&apos;t promise quick fixes or dramatic reinvention. We
            walk alongside people as guides — offering structure, reflection, and
            companionship as they find their own direction forward.
          </p>
          <blockquote className="pull-quote-dark">
            Midlife is not a crisis. It is a threshold — a meaningful crossing that many
            people reach alone and without support.
          </blockquote>
        </div>
      </section>

      {/* Founders story */}
      <section className="section" style={{ background: "var(--page-bg)", paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="section-inner mid">
          <p className="eyebrow">Why we built SparkLifeLab</p>
          <h2>Fellow travellers — not experts standing apart.</h2>
          <p className="lead" style={{ maxWidth: "680px", marginBottom: "1.5rem" }}>
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
            What helped us most wasn&apos;t quick advice or ready-made solutions, but the
            chance to slow down together. Space, time, and companionship. Conversations
            that didn&apos;t rush us toward answers, but helped us listen more closely to what
            mattered now. Gradually, clarity emerged.
          </p>
          <p>
            We realised this wasn&apos;t a personal failure. It was a threshold — a meaningful
            crossing many people reach in midlife, often alone and without support.
            SparkLifeLab grew from the wish that something like this had existed when we
            first felt that quiet restlessness. We&apos;re still on that path ourselves — and
            we&apos;re glad to walk it with you.
          </p>
        </div>
      </section>

      {/* Founder cards */}
      <section className="section" style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="section-inner">
          <p className="eyebrow">The founders</p>
          <h2>Who we are</h2>

          <div className="founder-grid">
            <article className="founder-card">
              <Image
                src="/images/founder_barbel.png"
                alt="Bärbel Tress, Co-founder of SparkLifeLab"
                width={120}
                height={120}
                className="founder-photo"
                style={{ width: "120px", height: "120px" }}
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

            <article className="founder-card">
              <Image
                src="/images/founder_gunther.png"
                alt="Gunther Tress, Co-founder of SparkLifeLab"
                width={120}
                height={120}
                className="founder-photo"
                style={{ width: "120px", height: "120px" }}
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

            <article className="founder-card">
              <Image
                src="/images/founder_scott.png"
                alt="Scott E. Burton, Co-founder of SparkLifeLab"
                width={120}
                height={120}
                className="founder-photo"
                style={{ width: "120px", height: "120px" }}
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
        </div>
      </section>

      {/* CTA */}
      <section
        className="section"
        style={{ background: "var(--authority)", textAlign: "center", paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="section-inner narrow">
          <h2 style={{ color: "var(--white)" }}>Ready to take the first step?</h2>
          <p style={{ color: "rgba(255,255,255,0.80)", maxWidth: "480px", margin: "0 auto 2rem" }}>
            The free Midlife Clarity Check is the best place to start. It only takes
            20–30 minutes.
          </p>
          <Link className="button button-primary" href="/clarity-check/">
            Get the free Midlife Clarity Check →
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
