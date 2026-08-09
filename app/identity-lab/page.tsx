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
import { pageMetadata } from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = pageMetadata({
  title: "Identity Lab",
  description:
    "A guided journey for people in midlife who are ready to move from fog to grounded forward movement.",
  path: "/identity-lab/",
  ogDescription:
    "Not just a course. Not just coaching. A guided journey — with others who understand. Ends with your personal Identity Map.",
});

// ─── CTA destinations ────────────────────────────────────────────────────────
// Every primary CTA points at the same stable in-page anchor (#identity-lab-action),
// which resolves to whichever conversion block is active. The label follows the
// status flag in lib/identity-lab-config.ts — no per-CTA edits needed on switch.

// ─── FAQ data — approved V1.0 copy (unchanged) ───────────────────────────────

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Is this a course?",
    a: "No. The Identity Lab program is a guided transformation journey — more structured than coaching, more reflective than a course, and more supportive than self-study. You receive material twice weekly and participate in live sessions that deepen your understanding over time.",
  },
  {
    q: "Is this therapy or coaching?",
    a: "No. The Identity Lab program is not therapy or one-on-one coaching. It is a structured, group-based journey to help you understand who you are and what direction feels true. If you are in crisis or need therapeutic support, we recommend working with a licensed professional.",
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
    a: "We encourage you to attend all sessions live, since they are a key part of the shared group experience. If something comes up and you miss one, you can still complete the journey and receive your Identity Map.",
  },
  {
    q: "What if I do not know what I want yet?",
    a: "That is exactly why the Identity Lab program exists. You do not need answers. This journey helps you discover what matters and what direction wants to emerge — without pressure to define a fixed plan.",
  },
  {
    q: "Is this right for me if I am retired or not in crisis?",
    a: "Yes. The Identity Lab program is designed for people who are not in crisis but who sense that something has shifted. If your life looks fine from the outside but something inside no longer fits, this journey is for you.",
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
    a: "Start with the free Midlife Clarity Check. It takes 20–30 minutes and will help you assess whether the Identity Lab program feels like the right next step.",
  },
  {
    q: "Who do I contact if I have questions about the program?",
    a: "We're glad to talk it through with you directly. Email us at hello@spark-life-lab.com, or let us know you'd like a short conversation — we're happy to answer your questions live before you decide to join.",
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
      "The greatest gift was realizing who I truly am — making sense of my past, sparking ideas for the future, and helping me design my life more consciously and intentionally.",
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
                to clarity — and to a renewed, inspired sense of what comes next.
              </p>
              <p className="il-descriptor">
                More than a course. More than coaching. An uplifting, guided journey
                of self-discovery.
              </p>
              <p>
                Once you have a clearer sense of where you are in your midlife
                transition, the Identity Lab program offers the next step — a joyful
                deep dive that helps you understand who you are now, what truly
                matters, and how to move into a meaningful future.
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
              You may sense that something is no longer working. From the outside,
              life may still look solid. But something feels off. What once felt
              right no longer fits in the same way. The old roles and way of living
              still exist, yet they no longer give you the same sense of meaning,
              energy, or direction.
            </p>
            <p>
              That can be hard to name. It can feel like fog, restlessness,
              disorientation, or a quiet loss of aliveness. You know something is
              shifting — but you do not yet know what to hold on to, what to let go of,
              or what comes next.
            </p>
            <p>This is the moment the Identity Lab program is designed for.</p>
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
                The Identity Lab program is a guided journey for people in midlife who
                are navigating the space between what no longer fits and what wants to
                emerge next.
              </p>
              <p>
                In a small, supported group, you explore who you truly are — your
                values, strengths, and unique genius — and begin to sense the future
                that draws you forward. This is not about consuming information or
                following a self-help formula. It is about looking inward and
                reconnecting with what makes you come alive.
              </p>
              <p>
                Gently guided, you cover more ground in a few weeks than you might
                alone in many months — a real relief. There is no performance, no
                grading, and no pressure to have all the answers. Only the invitation
                to look more closely, with structure, reflection, and support.
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
              Through the Identity Lab program, you move from uncertainty toward a
              clearer sense of who you are, what matters now, and how to move
              forward.
            </p>

            <ol className="il-journey" aria-label="What you gain — a five-stage journey from uncertainty to clarity">
              <li className="il-journey-stage il-journey-stage--up">
                <span className="il-journey-marker" aria-hidden="true">01</span>
                <div className="il-journey-card">
                  <h3 className="il-benefit-title">Greater self-understanding</h3>
                  <p className="il-benefit-desc">
                    You see yourself more clearly — your values, personality,
                    strengths, motivations, and the patterns that have quietly shaped
                    your life.
                  </p>
                </div>
              </li>

              <li className="il-journey-stage il-journey-stage--down">
                <span className="il-journey-marker" aria-hidden="true">02</span>
                <div className="il-journey-card">
                  <h3 className="il-benefit-title">Clarity about what fits</h3>
                  <p className="il-benefit-desc">
                    You see what still belongs in your life, what drains you, and what
                    you might want to change. It brings relief, and often a first spark
                    of energy to move.
                  </p>
                </div>
              </li>

              <li className="il-journey-stage il-journey-stage--up">
                <span className="il-journey-marker" aria-hidden="true">03</span>
                <div className="il-journey-card">
                  <h3 className="il-benefit-title">
                    Reconnecting with what brings you fully alive
                  </h3>
                  <p className="il-benefit-desc">
                    You uncover your genius and see when you are most fully alive —
                    moving from self-doubt to knowing the value only you can bring.
                  </p>
                </div>
              </li>

              <li className="il-journey-stage il-journey-stage--down">
                <span className="il-journey-marker" aria-hidden="true">04</span>
                <div className="il-journey-card">
                  <h3 className="il-benefit-title">A stronger sense of direction</h3>
                  <p className="il-benefit-desc">
                    You turn to what lies ahead, gathering the aspirations that
                    inspire you. You catch a glimpse of the beautiful future that fits
                    who you truly are.
                  </p>
                </div>
              </li>

              <li className="il-journey-stage il-journey-stage--up il-journey-stage--final">
                <span className="il-journey-marker" aria-hidden="true">05</span>
                <div className="il-journey-card">
                  <h3 className="il-benefit-title">A deeply meaningful next chapter</h3>
                  <p className="il-benefit-desc">
                    You leave with a clear sense of who you truly are and what wants
                    to emerge next — ready for a deeply meaningful next chapter.
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
              <p>At the end of the program, you receive your personal Identity Map.</p>
              <p>
                It is more than a document — like light gathered through a lens, it
                brings everything you uncovered into focus. Your values, strengths,
                genius, life patterns, and emerging future become the story of who you
                are and who you&rsquo;re becoming.
              </p>
              <blockquote className="il-map-tagline">
                More than your notes. More than a summary. A compass you keep.
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
                  Every insight in it is yours. With careful, privacy-protected AI
                  support, we gather your reflections and shape them into one
                  coherent, beautifully designed story — made for you alone.
                </p>
              </div>
              <p>
                At its heart, it answers the two questions that matter most now — who
                you are, and what you truly want.
              </p>
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
              The Identity Lab program unfolds over three phases. Each one builds on
              the last and helps you move from self-understanding toward a clearer
              sense of direction.
            </p>

            <div className="il-phases">
              <article className="il-phase-card">
                <div className="il-phase-number" aria-hidden="true">01</div>
                <h3 className="il-phase-name">Understanding yourself</h3>
                <p className="il-phase-desc">
                  You get to know your values, personality, strengths, and drivers —
                  and see what shaped you and what still fits.
                </p>
              </article>

              <article className="il-phase-card">
                <div className="il-phase-number" aria-hidden="true">02</div>
                <h3 className="il-phase-name">Revealing your core identity</h3>
                <p className="il-phase-desc">
                  You uncover your genius — your core gift — recognize when you are
                  most alive, and see the value only you can bring.
                </p>
              </article>

              <article className="il-phase-card">
                <div className="il-phase-number" aria-hidden="true">03</div>
                <h3 className="il-phase-name">Emerging possibilities</h3>
                <p className="il-phase-desc">
                  You explore what draws you forward, reconnect with what inspires
                  you, and begin to sense a future that feels deeply meaningful and
                  fulfilling.
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
                    <li>13 in-depth, step-by-step practices</li>
                    <li>Content released twice weekly</li>
                    <li>Deliberately paced to allow time for reflection</li>
                  </ul>
                </div>

                <div className="il-included-group">
                  <h3 className="il-included-heading">Live sessions</h3>
                  <ul className="il-included-list">
                    <li>3 live group sessions with the SparkLifeLab founders</li>
                    <li>Kick-off at the start</li>
                    <li>Exchange &amp; Integration midway</li>
                    <li>Identity Map Ceremony at the end</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="il-included-group">
                  <h3 className="il-included-heading">Materials &amp; access</h3>
                  <ul className="il-included-list">
                    <li>Guided prompts and reflective practices</li>
                    <li>Access to all program materials</li>
                    <li>Small cohort for meaningful connection</li>
                    <li>Space for both personal reflection and meaningful conversation</li>
                  </ul>
                </div>

                <div className="il-included-group">
                  <h3 className="il-included-heading">Your deliverable</h3>
                  <ul className="il-included-list">
                    <li>Your personal Identity Map</li>
                    <li>
                      All you discovered, enhanced and brought into focus — the
                      essence of who you are and where you feel drawn next.
                    </li>
                    <li>A beautifully designed PDF shaped from your reflections</li>
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
                <li>
                  you are in acute crisis and need immediate licensed medical,
                  therapeutic, or counseling support
                </li>
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
              Before we created the Identity Lab program, we each went through this
              exact reflective work ourselves. Each of us had a different focus, but
              the result was quite similar: greater clarity, higher self-awareness,
              and a grounded sense of what truly matters to us in the future.
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
                If this feels like the right next step, the Identity Lab program is
                here. A guided journey to help you understand who you are now, what
                matters most, and how to move forward with greater clarity and
                intention.
              </p>
              <p className="il-cta-band-copy">
                And you leave with your personal Identity Map — a compass you keep.
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
