import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { IdentityLabFaq, type FaqItem } from "@/components/identity-lab-faq";
import { IdentityLabWaitlist } from "@/components/identity-lab-waitlist";
import { IdentityLabEnrollmentOpen } from "@/components/identity-lab-enrollment-open";
import {
  identityLabStatus,
  IDENTITY_LAB_ACTION_ANCHOR,
  IDENTITY_LAB_ACTION_HREF,
  IDENTITY_LAB_CTA_LABEL,
} from "@/lib/identity-lab-config";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Identity Lab | SparkLifeLab",
  description:
    "A guided journey for people in midlife who are ready to move from fog to grounded forward movement.",
  alternates: { canonical: "/identity-lab/" },
  openGraph: {
    title: "Identity Lab | SparkLifeLab",
    description:
      "Not just a course. Not just coaching. A guided journey — with others who understand. Ends with your personal Identity Map.",
  },
};

// ─── CTA destinations ────────────────────────────────────────────────────────
// Every primary CTA points at the same stable in-page anchor (#identity-lab-action),
// which resolves to whichever conversion block is active. The label follows the
// status flag in lib/identity-lab-config.ts — no per-CTA edits needed on switch.

// ─── FAQ data — approved V1.0 copy (unchanged) ───────────────────────────────

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

// ─── Persona data — approved V1.2 copy ───────────────────────────────────────

const PERSONAS = [
  {
    title: "A Career Re-Orienter",
    desc: "Your work no longer feels aligned, and you want greater clarity about what comes next.",
  },
  {
    title: "A Transition Navigator",
    desc: "You are between chapters — leaving one role, entering another — and want support as you find your footing again.",
  },
  {
    title: "A Purpose Seeker Beyond Retirement",
    desc: "You want your next phase to be about contribution, meaning, and relevance — not just leisure.",
  },
  {
    title: "An Inner or Creative Explorer",
    desc: "You are drawn to reflection, personal growth, or creative expression, and want to reconnect with parts of yourself that have been overlooked or left unexplored.",
  },
  {
    title: "A Life Rebuilder",
    desc: "You have been through a major life change or disruption and are ready to rebuild with more intention and clarity.",
  },
];

// ─── Founder reflection quotes — approved V1.2 copy ──────────────────────────

const REFLECTIONS = [
  {
    name: "Gunther",
    quote:
      "It helped me see more clearly what is truly mine — what gives me energy, what no longer fits, and what kind of life I want to shape more consciously.",
  },
  {
    name: "Bärbel",
    quote:
      "What stayed with me most was the growing clarity. I saw more clearly what drives me, what grounds me, and what I want to give more space in my life.",
  },
  {
    name: "Scott",
    quote:
      "It helped me recognize that growth at this stage is less about proving something and more about living in a way that feels authentic and true.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IdentityLabPage() {
  const heroImageAlt =
    "A small group in warm, unhurried conversation outdoors — the companionship of fellow travellers navigating the midlife passage together.";
  const whatIsImageAlt =
    "A man participating in an online group session for the Identity Lab";
  const identityMapImageAlt =
    "A woman reviews her personal Identity Map at a table — insights gathered and ready to guide the next chapter.";
  const readyImageAlt =
    "A woman sits on a stone terrace at sunset, overlooking a river valley — a calm, reflective moment of readiness.";

  return (
    <>
      <BreadcrumbJsonLd page="Identity Lab" href="/identity-lab/" />
      <main>

        {/* ─── SECTION 1 — HERO ─── */}
        <section className="hero">
          <div className="il-hero-grid section-inner">
            <div>
              <p className="eyebrow">When you&rsquo;re ready for the next step</p>
              <h1>The Identity Lab</h1>
              <p className="hero-copy">
                A guided journey for people in midlife who are ready to move from fog
                to grounded forward movement.
              </p>
              <p className="il-descriptor">
                Not just a course. Not just coaching. A guided journey.
              </p>
              <p>
                Once you have a clearer sense of where you are, the Identity Lab
                offers the next step — a structured journey to help you understand
                who you are now, what truly matters, and how to move forward with
                intention.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={IDENTITY_LAB_ACTION_HREF}>
                  {IDENTITY_LAB_CTA_LABEL}
                </a>
                <Link className="button-text" href="/#clarity-check">
                  Take the Midlife Clarity Check →
                </Link>
              </div>
            </div>

            <div className="il-hero-image-wrap">
              <Image
                src="/images/identity-lab-hero-client.jpg"
                alt={heroImageAlt}
                width={1024}
                height={1536}
                priority
                className="il-hero-img"
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        {/* ─── SECTION 2 — WHY THIS MATTERS ─── */}
        <section
          className="section"
          style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner mid">
            <p className="eyebrow">Why this matters</p>
            <h2>When life no longer fits the way it used to</h2>
            <p>
              You may not be in crisis. From the outside, life may still look solid.
              But something feels off. What once felt right no longer fits in the same
              way. The old structure still exists, yet it no longer gives you the same
              sense of meaning, energy, or direction.
            </p>
            <p>
              That can be hard to name. It can feel like fog, restlessness,
              disorientation, or a quiet loss of aliveness. You know something is
              shifting — but you do not yet know what to hold on to, what to let go of,
              or what comes next.
            </p>
            <p>This is the moment the Identity Lab is designed for.</p>
          </div>
        </section>

        {/* ─── SECTION 3 — WHAT IT IS ─── */}
        <section
          className="section"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="il-whatis-grid section-inner">
            <div>
              <p className="eyebrow">What it is</p>
              <h2>A guided journey — with others who understand</h2>
              <p>
                The Identity Lab is a guided journey for people in midlife who are
                navigating the space between what no longer fits and what wants to
                emerge next.
              </p>
              <p>
                In a small, supported group, you explore your values, your strengths,
                and the direction that feels most aligned with who you are becoming.
                This is not about consuming information or following a self-help
                formula. It is about slowing down, looking inward, and making sense of
                who you are now.
              </p>
              <p>
                The journey is deliberately paced — human pace, not the pace of a
                training program. There is no performance, no grading, and no pressure
                to have all the answers. Only the invitation to look more closely, with
                structure, reflection, and support.
              </p>
              <div className="il-whatis-actions">
                <a className="button button-primary" href={IDENTITY_LAB_ACTION_HREF}>
                  {IDENTITY_LAB_CTA_LABEL}
                </a>
              </div>
            </div>

            <div className="il-whatis-image-wrap">
              <Image
                src="/images/ID-Lab-What-is-section.jpg"
                alt={whatIsImageAlt}
                width={1023}
                height={1537}
                className="il-whatis-img"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </section>

        {/* ─── SECTION 4 — WHAT YOU GAIN ─── */}
        <section
          className="section"
          style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner">
            <p className="eyebrow">Why it matters</p>
            <h2>What you gain</h2>
            <p className="il-benefits-intro">
              Through the Identity Lab, you move from uncertainty toward a clearer
              sense of who you are, what matters now, and how to move forward.
            </p>

            <ol className="il-journey" aria-label="What you gain — a five-stage journey from uncertainty to clarity">
              <li className="il-journey-stage il-journey-stage--up">
                <span className="il-journey-marker" aria-hidden="true">01</span>
                <div className="il-journey-card">
                  <h3 className="il-benefit-title">Greater self-understanding</h3>
                  <p className="il-benefit-desc">
                    You see yourself more clearly — your values, patterns, strengths, and
                    deeper motivations.
                  </p>
                </div>
              </li>

              <li className="il-journey-stage il-journey-stage--down">
                <span className="il-journey-marker" aria-hidden="true">02</span>
                <div className="il-journey-card">
                  <h3 className="il-benefit-title">Clarity about what fits</h3>
                  <p className="il-benefit-desc">
                    You recognize what still belongs in your life, what no longer does,
                    and where change is needed.
                  </p>
                </div>
              </li>

              <li className="il-journey-stage il-journey-stage--up">
                <span className="il-journey-marker" aria-hidden="true">03</span>
                <div className="il-journey-card">
                  <h3 className="il-benefit-title">
                    Reconnection with what is most alive in you
                  </h3>
                  <p className="il-benefit-desc">
                    You rediscover the parts of yourself that have been overlooked,
                    postponed, or pushed aside.
                  </p>
                </div>
              </li>

              <li className="il-journey-stage il-journey-stage--down">
                <span className="il-journey-marker" aria-hidden="true">04</span>
                <div className="il-journey-card">
                  <h3 className="il-benefit-title">A stronger sense of direction</h3>
                  <p className="il-benefit-desc">
                    You see more clearly which future possibilities feel aligned,
                    meaningful, and worth exploring.
                  </p>
                </div>
              </li>

              <li className="il-journey-stage il-journey-stage--up il-journey-stage--final">
                <span className="il-journey-marker" aria-hidden="true">05</span>
                <div className="il-journey-card">
                  <h3 className="il-benefit-title">A personal compass for the future</h3>
                  <p className="il-benefit-desc">
                    You leave with insights you can return to when making grounded
                    decisions about what comes next.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* ─── SECTION 5 — YOUR PERSONAL IDENTITY MAP ─── */}
        <section
          className="section il-map-section"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="il-map-grid section-inner">
            <div>
              <p className="eyebrow">What you leave with</p>
              <h2>Your personal Identity Map</h2>
              <p>
                At the end of the journey, you receive your personal Identity Map — a
                beautifully designed document that brings together what you discovered
                about yourself: your values, strengths, patterns, purpose, and emerging
                future.
              </p>
              <blockquote className="il-map-tagline">
                Not a worksheet. Not a summary. A compass you keep.
              </blockquote>
              <p>
                The Identity Map is created from your own reflections, assessments, and
                written exercises across the journey. It brings your insights together
                in a way that is clear, visual, and easier to return to later —
                especially when life feels foggy again.
              </p>
              <div className="il-ai-note">
                <p className="il-ai-note-label">The AI role</p>
                <p className="il-ai-note-copy">
                  We use AI carefully to help organize and synthesize your reflections,
                  but every insight comes from you. The Identity Map is created from
                  your own work and shaped into a clear, personal document you can
                  return to over time.
                </p>
              </div>
            </div>

            <div className="il-map-visual-col">
              <Image
                src="/images/identity-lab-map-client.jpg"
                alt={identityMapImageAlt}
                width={1024}
                height={1536}
                className="il-map-img"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </section>

        {/* ─── SECTION 6 — HOW IT UNFOLDS ─── */}
        <section
          className="section"
          style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner">
            <p className="eyebrow">How it unfolds</p>
            <h2>The journey in three phases</h2>
            <p className="il-phases-intro">
              The Identity Lab unfolds over three phases. Each one builds on the last
              and helps you move from self-understanding toward a clearer sense of
              direction.
            </p>

            <div className="il-phases">
              <article className="il-phase-card">
                <div className="il-phase-number" aria-hidden="true">01</div>
                <h3 className="il-phase-name">Understanding yourself</h3>
                <p className="il-phase-desc">
                  You explore your values, personality, and patterns, and begin to
                  understand what has shaped you and what still feels true now.
                </p>
              </article>

              <article className="il-phase-card">
                <div className="il-phase-number" aria-hidden="true">02</div>
                <h3 className="il-phase-name">Revealing your core identity</h3>
                <p className="il-phase-desc">
                  You uncover your natural strengths, recognize when you are at your
                  best, and begin to see what you are here to bring to life.
                </p>
              </article>

              <article className="il-phase-card">
                <div className="il-phase-number" aria-hidden="true">03</div>
                <h3 className="il-phase-name">Emerging possibilities</h3>
                <p className="il-phase-desc">
                  You explore what draws you forward, reconnect with what inspires you,
                  and begin to sense what kind of future may be opening next.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ─── SECTION 7 — WHAT'S INCLUDED ─── */}
        <section
          className="section"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner">
            <p className="eyebrow">What&rsquo;s included</p>
            <h2>What you get</h2>

            <div className="il-included-grid">
              <div>
                <div className="il-included-group">
                  <h3 className="il-included-heading">Duration &amp; structure</h3>
                  <ul className="il-included-list">
                    <li>4 weeks of guided material</li>
                    <li>5 learning stations</li>
                    <li>Content released twice weekly</li>
                    <li>Deliberately paced to allow time for reflection</li>
                  </ul>
                </div>

                <div className="il-included-group">
                  <h3 className="il-included-heading">Live sessions</h3>
                  <ul className="il-included-list">
                    <li>3 live group sessions with the SparkLifeLab founders</li>
                    <li>Kick-off at the start</li>
                    <li>Integration &amp; Exchange midway</li>
                    <li>Identity Map Ceremony at the end</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="il-included-group">
                  <h3 className="il-included-heading">Materials &amp; access</h3>
                  <ul className="il-included-list">
                    <li>Guided prompts, exercises, and reflection practices</li>
                    <li>Access to all course materials</li>
                    <li>Small cohort for meaningful connection</li>
                    <li>Space for both personal reflection and meaningful conversation</li>
                  </ul>
                </div>

                <div className="il-included-group">
                  <h3 className="il-included-heading">Your deliverable</h3>
                  <ul className="il-included-list">
                    <li>Your personal Identity Map</li>
                    <li>A beautifully designed PDF shaped from your reflections</li>
                    <li>
                      A clear synthesis of your values, strengths, purpose, and
                      emerging direction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 8 — WHO IT'S FOR ─── */}
        <section
          className="section"
          style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner">
            <p className="eyebrow">Who it&rsquo;s for</p>
            <h2>Is the Identity Lab right for you?</h2>
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
                  you are looking for a quick fix or someone to tell you exactly what
                  to do
                </li>
                <li>you are in acute crisis and need immediate therapeutic support</li>
                <li>
                  you are not willing to engage in reflection, writing, and
                  introspection
                </li>
                <li>
                  you want a fully private self-study experience with no group or live
                  elements
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── SECTION 9 — FROM OUR OWN EXPERIENCE (founder reflection) ─── */}
        <section
          className="section il-reflection"
          style={{ background: "#E7E8EF", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner">
            <p className="eyebrow">From our own experience</p>
            <h2>What this kind of work can open up</h2>
            <p className="il-reflection-intro">
              Before we created the Identity Lab, we each went through this kind of
              reflective work ourselves. Different questions came into focus for each
              of us, but the result was similar: greater clarity, stronger
              self-recognition, and a more grounded sense of what truly matters.
            </p>

            <div className="il-quotes">
              {REFLECTIONS.map((r) => (
                <figure className="il-quote" key={r.name}>
                  <blockquote className="il-quote-text">{r.quote}</blockquote>
                  <figcaption className="il-quote-name">{r.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 10 — CENTRAL CONVERSION BLOCK (A or B, never both) ─── */}
        <section
          id={IDENTITY_LAB_ACTION_ANCHOR}
          className="section il-action-section"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner mid">
            {identityLabStatus === "waitlist" ? (
              <IdentityLabWaitlist />
            ) : (
              <IdentityLabEnrollmentOpen />
            )}
          </div>
        </section>

        {/* ─── SECTION 11 — FAQ (unchanged) ─── */}
        <section
          className="section"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner mid">
            <p className="eyebrow">Good to know</p>
            <h2>Frequently Asked Questions</h2>
            <IdentityLabFaq items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ─── SECTION 12 — FINAL CLOSING (Ready to begin?) ─── */}
        <section
          className="section il-cta-band"
          style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="il-ready-grid section-inner">
            <div>
              <p className="eyebrow">When it feels right</p>
              <h2>Ready to begin?</h2>
              <p className="il-cta-band-copy">
                If this feels like the right next step, the Identity Lab is here. A
                guided journey to help you understand who you are now, what matters
                most, and how to move forward with greater clarity and intention.
              </p>
              <a className="button button-primary" href={IDENTITY_LAB_ACTION_HREF}>
                {IDENTITY_LAB_CTA_LABEL}
              </a>
              <p className="il-cta-support">
                Questions?{" "}
                <a href="mailto:hello@spark-life-lab.com">
                  Email us at hello@spark-life-lab.com
                </a>
              </p>
            </div>
            <div className="il-ready-image-wrap">
              <Image
                src="/images/identity-lab-ready-client.jpeg"
                alt={readyImageAlt}
                width={1714}
                height={918}
                className="il-ready-img"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
