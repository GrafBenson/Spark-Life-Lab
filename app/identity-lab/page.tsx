import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { IdentityLabFaq, type FaqItem } from "@/components/identity-lab-faq";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "SparkLife Identity Lab | SparkLifeLab",
  description:
    "A guided transformation journey for people in midlife who are ready to move from fog to grounded forward movement.",
  openGraph: {
    title: "SparkLife Identity Lab | SparkLifeLab",
    description:
      "Not a course. Not coaching. A guided crossing — with others who understand what this passage feels like. Ends with your personal Identity Map.",
  },
};

// ─── CTA destination ─────────────────────────────────────────────────────────
// TODO: Replace JOIN_HREF with the Kajabi sales page URL when provided by SparkLifeLab.
// Current placeholder: mailto link so no broken destination exists in the meantime.
const JOIN_HREF =
  "mailto:hello@spark-life-lab.com?subject=Identity%20Lab%20Interest";

// ─── FAQ data — approved V1.0 copy ───────────────────────────────────────────

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Is this a course?",
    a: "No. The Identity Lab is a guided transformation journey — more structured than coaching, more reflective than a course, and more supportive than self-study. You receive material twice weekly and participate in live sessions that deepen your understanding over time.",
  },
  {
    q: "Is this therapy or coaching?",
    a: "No. The Identity Lab is not therapy or one-on-one coaching. It is a structured, group-based journey to help you understand who you are and what direction feels true. If you are in crisis or need therapeutic support, we recommend working with a licensed professional.",
  },
  {
    q: "Do I need to complete the Midlife Clarity Check first?",
    a: "No, but it helps. The Midlife Clarity Check is free and takes 20–30 minutes. It introduces the Midlife Fog concept and helps you assess where you are. If you have not taken it yet, we recommend starting there.",
  },
  {
    q: "How much time does this take each week?",
    a: "Approximately 3–5 hours per week, including live sessions, reflection exercises, and assessments. Material is released twice weekly, and you work at your own pace between releases.",
  },
  {
    q: "What if I cannot attend the live sessions?",
    a: "All live sessions are recorded and available afterward. While we encourage live participation, you can still complete the journey and receive your Identity Map if you miss a session.",
  },
  {
    q: "What if I do not know what I want yet?",
    a: "That is exactly why the Identity Lab exists. You do not need answers. This journey helps you discover what matters and what direction wants to emerge — without pressure to define a fixed plan.",
  },
  {
    q: "Is this right for me if I am retired or not in crisis?",
    a: "Yes. The Identity Lab is designed for people who are not in crisis but who sense that something has shifted. If your life looks fine from the outside but something inside no longer fits, this journey is for you.",
  },
  {
    q: "How is AI used in the Identity Lab?",
    a: "You complete all the reflection work — exercises, prompts, and assessments. You upload your insights throughout the journey. We use advanced tools, including AI, to help synthesize and visualize your work into your personal Identity Map.\n\nWe protect your privacy. As scientists, we know how to handle sensitive personal information responsibly. Before any AI processing, we anonymize all your reflections — removing names, identifying details, and personal data. The AI works only with your anonymized insights to help us identify patterns and structure your content. We then re-personalize your final Identity Map and deliver it to you.\n\nYour data is never used to train AI models, never shared, and never retained beyond creating your map.\n\nThe AI does not create your insights — it helps us organize and present them beautifully. Every word in your Identity Map reflects your own reflections, guided and curated by the SparkLifeLab founders.",
    badge: "Privacy protected",
  },
  {
    q: "What do I get at the end?",
    a: "You receive your personal Identity Map — a beautifully designed PDF that synthesizes your journey. You also gain clarity on who you are, what matters, and what direction feels aligned.",
  },
  {
    q: "What if I am not sure this is for me?",
    a: "Start with the free Midlife Clarity Check. It takes 20–30 minutes and will help you assess whether the Identity Lab feels like the right next step.",
  },
];

// ─── Persona data — approved V1.0 copy ───────────────────────────────────────

const PERSONAS = [
  {
    title: "A Career Re-Orienter",
    desc: "Your career path no longer feels aligned. You want clarity on what comes next, but you are not ready to settle or step aside.",
  },
  {
    title: "A Transition Navigator",
    desc: "You are between chapters — leaving one role, entering another — and need structure and support as you find your footing.",
  },
  {
    title: "A Purpose Seeker Beyond Retirement",
    desc: "You are retired or approaching retirement, but you want your next phase to be about contribution and relevance, not just leisure.",
  },
  {
    title: "An Inner or Creative Explorer",
    desc: "You are drawn to personal growth, curiosity, and living more consciously. You want to understand yourself at a deeper level.",
  },
  {
    title: "A Life Rebuilder",
    desc: "You have faced a significant life change — loss, disruption, or upheaval — and you are ready to rebuild with intention and companionship.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IdentityLabPage() {
  const heroImageAlt =
    "A small group in warm, unhurried conversation outdoors — the companionship of fellow travellers navigating the midlife threshold together.";
  const identityMapImageAlt =
    "SparkLife Identity Map showing a visual path for clarity, values, strengths, growth, and direction";
  const closingImageAlt =
    "People walking together along a coastal path at sunset — moving forward with clarity and companionship.";

  return (
    <>
      <BreadcrumbJsonLd page="Identity Lab" href="/identity-lab/" />
      <main>

        {/* ─── SECTION 1 — HERO ─── */}
        <section className="hero">
          <div className="il-hero-grid section-inner">
            <div>
              <p className="eyebrow">When you&rsquo;re ready for the next step</p>
              <h1>The SparkLife Identity Lab</h1>
              <p className="hero-copy">
                A guided transformation journey for people in midlife who are ready to
                move from fog to grounded forward movement.
              </p>
              <p className="il-descriptor">
                Not a course. Not coaching. A guided crossing.
              </p>
              <p>
                Once you have a clearer sense of where you are, the SparkLife Identity
                Lab offers the next step — a structured journey to help you understand
                who you are now, what truly matters, and how to move forward with
                intention.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={JOIN_HREF}>
                  Join the Identity Lab
                </a>
                <Link className="button-text" href="/#clarity-check">
                  Explore the Midlife Clarity Check →
                </Link>
              </div>
            </div>

            <div className="il-hero-image-wrap">
              <Image
                src="/images/sll-people-07.jpg"
                alt={heroImageAlt}
                width={600}
                height={750}
                priority
                className="il-hero-img"
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        {/* ─── SECTION 2 — WHAT THIS IS ─── */}
        <section
          className="section"
          style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner mid">
            <p className="eyebrow">What it is</p>
            <h2>A guided crossing — with others who understand</h2>
            <p>
              The SparkLife Identity Lab is a guided journey for people in midlife who
              are navigating the threshold between what no longer fits and what wants to
              emerge next.
            </p>
            <p>
              In a small, supported group, you will explore your values, your strengths,
              and the direction that feels most aligned with who you are becoming. This
              is not about consuming information or following a self-help formula. It is
              about slowing down, looking inward, and making sense of who you are now.
            </p>
            <p>
              The journey is deliberately paced — human pace, not the pace of a training
              program. There is no performance, no grading, no pressure to have answers.
              Only the invitation to look more closely.
            </p>
          </div>
        </section>

        {/* ─── SECTION 3 — IDENTITY MAP (FEATURED) ─── */}
        <section
          className="section il-map-section"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="il-map-grid section-inner">
            <div>
              <p className="eyebrow">What you leave with</p>
              <h2>Your personal Identity Map</h2>
              <p>
                The journey ends with your personal Identity Map — a beautifully designed
                document that brings together everything you discovered: your values,
                strengths, purpose, and emerging future.
              </p>
              <blockquote className="il-map-tagline">
                Not a worksheet. Not a summary. A compass you keep.
              </blockquote>
              <p>
                The Identity Map is created specifically for you. Throughout the four
                weeks, you complete reflection exercises, assessments, and guided prompts.
                You upload your work, and we synthesize your insights — using advanced
                tools including AI — into a clear, visual document that reflects who you
                are now and the direction that feels most yours.
              </p>
              <p className="il-ai-note">
                <strong>The AI role:</strong> We use technology to help organize and
                visualize your reflections, but every insight comes from you. The Identity
                Map is not generated by AI — it is created from your work, guided by the
                SparkLifeLab founders, and designed to be something you return to whenever
                the fog creeps back.
              </p>
            </div>

            <div className="il-map-visual-col">
              <div className="il-map-badge-row">
                <span className="il-map-badge">Your signature deliverable</span>
              </div>
              {/* Identity Map: no cropping — displayed with object-fit: contain so all map labels remain readable. */}
              <Image
                src="/images/sll-map-007.jpg"
                alt={identityMapImageAlt}
                width={1024}
                height={1536}
                className="il-map-img"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </section>

        {/* ─── SECTION 4 — HOW THE JOURNEY UNFOLDS ─── */}
        <section
          className="section"
          style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner">
            <p className="eyebrow">The journey</p>
            <h2>How the journey unfolds</h2>
            <p className="il-phases-intro">
              The Identity Lab moves through three distinct phases over four weeks. Each
              phase deepens the previous one and helps you build a clearer understanding
              of who you are and what becomes possible.
            </p>

            <div className="il-phases">
              <article className="il-phase-card">
                <div className="il-phase-number" aria-hidden="true">01</div>
                <h3 className="il-phase-name">Understanding Yourself</h3>
                <p>
                  You explore your values, personality, and behavioral patterns. You
                  begin to see what has shaped you and what still resonates now.
                </p>
                <p className="il-phase-what">What happens</p>
                <p>
                  Reflection exercises and assessments help you see yourself more
                  clearly. You examine what you have been holding onto and what may be
                  ready to release.
                </p>
              </article>

              <article className="il-phase-card">
                <div className="il-phase-number" aria-hidden="true">02</div>
                <h3 className="il-phase-name">Revealing Your Core Identity</h3>
                <p>
                  You move from understanding patterns to recognizing your essence. You
                  identify your natural strengths and the moments when you are most
                  alive.
                </p>
                <p className="il-phase-what">What happens</p>
                <p>
                  You uncover your innate strengths and recognize when you are at your
                  best. You begin to sense a deeper purpose and contribution.
                </p>
              </article>

              <article className="il-phase-card">
                <div className="il-phase-number" aria-hidden="true">03</div>
                <h3 className="il-phase-name">Emerging Possibilities</h3>
                <p>
                  You shift from self-understanding to exploring what draws you forward.
                  You reconnect with what inspires you and begin to sense how your
                  identity can come to life in the future.
                </p>
                <p className="il-phase-what">What happens</p>
                <p>
                  You explore new directions that feel aligned. You integrate your
                  insights and receive your personal Identity Map — a visual synthesis
                  of your journey.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5 — WHAT'S INCLUDED ─── */}
        <section
          className="section"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner">
            <p className="eyebrow">The full picture</p>
            <h2>What&rsquo;s included</h2>

            <div className="il-included-grid">
              <div>
                <div className="il-included-group">
                  <h3 className="il-included-heading">Duration &amp; Structure</h3>
                  <ul className="il-included-list">
                    <li>4 weeks of guided material</li>
                    <li>
                      5 learning stations — content released twice weekly (Tuesdays
                      and Fridays)
                    </li>
                    <li>
                      Deliberately paced to allow time for reflection between releases
                    </li>
                  </ul>
                </div>

                <div className="il-included-group">
                  <h3 className="il-included-heading">Your Deliverables</h3>
                  <ul className="il-included-list">
                    <li>
                      Your personal Identity Map — a beautifully designed PDF
                      synthesizing your reflections and insights
                    </li>
                    <li>Guided prompts, exercises, and frameworks at every station</li>
                    <li>Access to all materials and recordings</li>
                  </ul>
                </div>

                <div className="il-included-group">
                  <h3 className="il-included-heading">Time Commitment</h3>
                  <ul className="il-included-list">
                    <li>
                      Approximately 3–5 hours per week, including live sessions and
                      reflection exercises
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="il-included-group">
                  <h3 className="il-included-heading">Live Sessions</h3>
                  <ul className="il-included-list">
                    <li>
                      3 live group sessions with the SparkLifeLab founders:
                      <ul className="il-included-sublist">
                        <li>Kick-off: orientation and welcome</li>
                        <li>
                          Integration &amp; Exchange: deepening insights midway through
                        </li>
                        <li>
                          Identity Map Ceremony: receiving your map and closing the
                          journey
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="il-included-group">
                  <h3 className="il-included-heading">Group Experience</h3>
                  <ul className="il-included-list">
                    <li>Small cohort for meaningful connection</li>
                    <li>Private space for sharing reflections (optional)</li>
                    <li>Recordings available for those who cannot attend live</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 6 — IS THIS FOR YOU? ─── */}
        <section
          className="section"
          style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner">
            <p className="eyebrow">Self-qualify</p>
            <h2>Is the Identity Lab right for you?</h2>
            <p className="il-qualify-intro">
              The Identity Lab is designed for people in midlife (roughly ages 45–75)
              who are navigating a threshold — a moment when life no longer fits the way
              it used to, and the way forward is unclear.
            </p>
            <p className="il-qualify-lead">This journey is for you if you are:</p>

            <div className="il-persona-grid">
              {PERSONAS.map((p) => (
                <div className="il-persona-card" key={p.title}>
                  <h3 className="il-persona-title">{p.title}</h3>
                  <p className="il-persona-desc">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="il-not-for-you">
              <h3 className="il-nfy-heading">This journey is not for you if:</h3>
              <ul className="il-nfy-list">
                <li>
                  You are looking for a quick solution or someone to tell you what to do
                </li>
                <li>You are in acute crisis and need immediate therapeutic support</li>
                <li>
                  You are not willing to engage in reflection, writing, and introspection
                </li>
                <li>
                  You prefer to work entirely alone without any live or group elements
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── SECTION 7 — INVESTMENT ─── */}
        <section
          id="investment"
          className="section"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner mid">
            <p className="eyebrow">Investment</p>
            <h2>Investment</h2>

            <div className="il-pricing-card">
              <p className="il-pricing-price">$497</p>
              {/* TODO: Confirm installment options with SparkLifeLab before launch.
                  Remove or update this line if not offered. */}
              <p className="il-pricing-option">
                One-time payment or installment options
              </p>
              <ul className="il-pricing-list">
                <li>4 weeks of guided content across 5 learning stations</li>
                <li>3 live group sessions with the SparkLifeLab founders</li>
                <li>Personalized support throughout your journey</li>
                <li>Your personal Identity Map (delivered at the end)</li>
                <li>Access to all materials and recordings</li>
                <li>Small cohort experience for meaningful connection</li>
              </ul>
              {/* TODO: Update when specific cohort date is confirmed by SparkLifeLab. */}
              <p className="il-cohort-note">
                Next cohort: <strong>Forming now.</strong>
              </p>
              <p className="il-spaces-note">
                Spaces are limited to preserve the quality of the group experience.
              </p>
              <a className="button button-primary il-pricing-cta" href={JOIN_HREF}>
                Join the Identity Lab
              </a>
            </div>
          </div>
        </section>

        {/* ─── SECTION 8 — READY TO BEGIN? ─── */}
        <section
          className="section il-cta-band"
          style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner mid">
            <p className="eyebrow">Ready when you are</p>
            <h2>Ready to begin?</h2>
            <p className="il-cta-band-copy">
              If you are standing at this threshold now and ready to cross it with
              clarity and companionship, the Identity Lab is here.
            </p>
            <a className="button button-primary" href={JOIN_HREF}>
              Join the Identity Lab
            </a>
            <p className="il-cta-support">
              Questions?{" "}
              <a href="mailto:hello@spark-life-lab.com">
                Email us at hello@spark-life-lab.com
              </a>
            </p>
          </div>
        </section>

        {/* ─── SECTION 9 — FAQ ─── */}
        <section
          className="section"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner mid">
            <p className="eyebrow">Common questions</p>
            <h2>Frequently Asked Questions</h2>
            <IdentityLabFaq items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ─── SECTION 10 — CLOSING ─── */}
        <section className="il-closing">
          <Image
            src="/images/sll-sunrise-04.jpg"
            alt={closingImageAlt}
            fill
            className="il-closing-bg"
            sizes="100vw"
          />
          <div className="il-closing-overlay" aria-hidden="true" />
          <div className="il-closing-content">
            <h2 className="il-closing-heading">
              A threshold crossed with clarity and companionship
            </h2>
            <p className="il-closing-copy">Midlife is not a crisis. It is a crossing.</p>
            <p className="il-closing-copy">
              The Identity Lab is not about fixing yourself or proving anything. It is
              about understanding who you are now and taking the next honest step with
              clarity and companionship.
            </p>
            <p className="il-closing-copy">
              If you are standing at this threshold, you do not have to cross it alone.
            </p>
            <div className="il-closing-actions">
              <a className="button button-primary" href={JOIN_HREF}>
                Join the Identity Lab
              </a>
              <Link className="il-closing-secondary" href="/#clarity-check">
                Explore the Midlife Clarity Check →
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
