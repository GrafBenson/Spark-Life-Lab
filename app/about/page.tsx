import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { safeFetch } from "@/lib/sanity/client";
import { ourStoryImagesQuery } from "@/lib/sanity/queries";
import { urlForSanityLoader } from "@/lib/sanity/image";
import { SanityImage } from "@/components/sanity-image";
import type { SanityOurStoryImages } from "@/lib/sanity/types";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Our Story — SparkLifeLab",
  description:
    "SparkLifeLab began with a quiet question many people reach in midlife. Meet the three co-founders — Bärbel, Gunther, and Scott — and why they built the kind of space they themselves needed.",
  openGraph: {
    title: "Our Story — SparkLifeLab",
    description:
      "Three fellow travellers who built SparkLifeLab because something like it didn't exist when they needed it.",
  },
};

// ─── Founder data — copy-controlled, approved V1.0 ───────────────────────────

const founders = [
  {
    id: "barbel",
    name: "Bärbel Tress, PhD",
    role: "Co-founder",
    photo: "/images/founder_barbel.png",
    photoAlt: "Bärbel Tress, Co-founder of SparkLifeLab",
    linkedinUrl: "https://www.linkedin.com/in/baerbeltress",
    linkedinLabel: "Bärbel Tress on LinkedIn (opens in new tab)",
    background:
      "Bärbel is a scientist, strategist, and transformation thinker. For many years, she has helped researchers and academic leaders move through important career and life transitions with more clarity, confidence, and direction. Together with Gunther, she has also built and led a long-established company that has supported thousands of academics across different stages of their professional lives.",
    quote:
      "\u201cWhat drew me more deeply into this work was my own experience of midlife as a time when outward success no longer answers the deeper question of what truly fits. I became more interested in purpose, inner alignment, and the kind of change that begins quietly but changes everything over time.\u201d",
    sllRole:
      "At SparkLifeLab, Bärbel is especially drawn to the deeper transformation underneath change: what becomes possible when people reconnect with what feels true now and begin to shape a life around it.",
  },
  {
    id: "gunther",
    name: "Gunther Tress, PhD",
    role: "Co-founder",
    photo: "/images/founder_gunther.png",
    photoAlt: "Gunther Tress, Co-founder of SparkLifeLab",
    linkedinUrl: "https://www.linkedin.com/in/gunthertress",
    linkedinLabel: "Gunther Tress on LinkedIn (opens in new tab)",
    background:
      "Gunther is a scientist, communicator, and writer. For many years, he has helped researchers, especially early- and mid-career academics, find direction, develop confidence, and move forward in meaningful ways. Together with Bärbel, he has supported thousands of academics through writing, publishing, career development, and professional transition.",
    quote:
      "\u201cMy own transition has been about moving from teaching people mainly how to do things well toward helping people ask what they actually want, what kind of life fits, and what story they want to live next. That shift opened a more creative, reflective, and human direction in my work.\u201d",
    sllRole:
      "At SparkLifeLab, Gunther is especially interested in language, story, and possibility: helping people find words for what they are sensing, imagine new paths, and begin to rewrite the story of what midlife can become.",
  },
  {
    id: "scott",
    name: "Scott E. Burton",
    role: "Co-founder",
    photo: "/images/founder_scott.png",
    photoAlt: "Scott E. Burton, Co-founder of SparkLifeLab",
    linkedinUrl: "https://www.linkedin.com/in/scotteburton",
    linkedinLabel: "Scott E. Burton on LinkedIn (opens in new tab)",
    background:
      "Scott is a strategist, guide, and experienced leader with decades of work in transformation, growth, and execution. He brings a strong sense of direction, steadiness, and human understanding to moments when people or organizations are in transition.",
    quote:
      "\u201cWhat changed for me in midlife was not simply what I was doing, but how I understood the deeper question underneath it. I began to see that growth at this stage is less about proving something and more about living in a way that feels true.\u201d",
    sllRole:
      "At SparkLifeLab, Scott is especially drawn to the inner and outer journey of change: helping people move forward with more honesty, courage, and grounded action.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function AboutPage() {
  const { isEnabled: isDraft } = await draftMode();

  const rawImages = await safeFetch<SanityOurStoryImages>(ourStoryImagesQuery, {}, isDraft);
  const images = rawImages ?? {};

  // Image URLs — urlForSanityLoader returns null when the field is missing/cleared.
  // Fallback to local client-provided images in all null/undefined cases.
  const heroImageUrl = urlForSanityLoader(images.heroImage ?? null);
  const heroImageAlt =
    images.heroImage?.alt?.trim() ||
    "Two people in warm, reflective conversation at an outdoor coastal setting — the feeling of being accompanied and understood.";

  const storyImageUrl = urlForSanityLoader(images.storyImage ?? null);
  const storyImageAlt =
    images.storyImage?.alt?.trim() ||
    "A small group in unhurried conversation outdoors — the warmth of shared understanding and companionship.";

  const closingImageUrl = urlForSanityLoader(images.closingImage ?? null);
  const closingImageAlt =
    images.closingImage?.alt?.trim() ||
    "People walking together along a coastal path at sunset — fellow travellers moving forward with intention.";

  return (
    <>
      <BreadcrumbJsonLd page="Our Story" href="/about/" />
      <main>

        {/* ─── SECTION 1 — HERO ─── */}
        <section className="hero">
          <div className="hero-grid section-inner">
            <div>
              <p className="eyebrow">Our Story</p>
              <h1>Why SparkLifeLab exists</h1>
              <p className="hero-copy">
                SparkLifeLab began with a quiet question many people reach in midlife: Is this
                really it — or is something else trying to emerge? We created SparkLifeLab
                because we know what it feels like when life still works on the outside, but
                something inside no longer fits. We wanted to build the kind of space we
                ourselves needed then: calm, thoughtful, and human.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/clarity-check/">
                  Take the Midlife Clarity Check →
                </Link>
                <Link className="button-text" href="/identity-lab/">
                  Explore the SparkLife Identity Lab
                </Link>
              </div>
            </div>

            <div className="hero-image-wrap">
              <SanityImage
                src={heroImageUrl ?? "/images/our-story-hero-sunrise-09.jpg"}
                alt={heroImageAlt}
                width={800}
                height={600}
                priority
                sizes="(max-width: 900px) 100vw, 480px"
                {...(heroImageUrl && images.heroImage?.lqip
                  ? { placeholder: "blur" as const, blurDataURL: images.heroImage.lqip }
                  : {})}
              />
            </div>
          </div>
        </section>

        {/* ─── SECTION 2 — HOW THIS BEGAN ─── */}
        <section
          className="section about-story-section"
          style={{ background: "var(--page-bg)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="about-story-grid section-inner">
            <div className="about-story-img-wrap">
              <SanityImage
                src={storyImageUrl ?? "/images/our-story-story-sunrise-12.jpg"}
                alt={storyImageAlt}
                width={700}
                height={520}
                sizes="(max-width: 900px) 100vw, 480px"
                {...(storyImageUrl && images.storyImage?.lqip
                  ? { placeholder: "blur" as const, blurDataURL: images.storyImage.lqip }
                  : {})}
              />
            </div>

            <div>
              <p className="eyebrow">How this began</p>
              <h2>How this began</h2>
              <p>
                The three of us — Bärbel, Gunther, and Scott — met during an online course on
                life purpose in 2023. None of us was in crisis. Our careers were established.
                From the outside, our lives looked solid and successful. Yet each of us felt a
                growing sense that the stories we were living no longer fit. Something had
                shifted — subtle, persistent, and hard to name.
              </p>
              <p>
                What helped us most was not quick advice or ready-made answers. It was the
                chance to slow down together. Space, time, and companionship. Conversations
                that did not rush us toward solutions, but helped us listen more closely to
                what mattered now. Gradually, clarity emerged. Not all at once, but step by
                step.
              </p>
              <p>
                Over time, we came to understand that what we were navigating was not a
                personal failure. It was a threshold. A meaningful crossing many people reach
                in midlife — often alone, and often without the kind of structure or support
                that would help. That realization changed how we saw this phase of life, and
                it became the seed of SparkLifeLab.
              </p>
              <p>
                We did not set out to fix midlife or reinvent anyone. We created SparkLifeLab
                to honor it: as a real passage, a time that asks for honesty, reflection, and
                gentle movement toward what is next.
              </p>
              <p>
                We are still on that path ourselves. And we are glad to walk it with others now.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="button-text" href="/clarity-check/">
                  Start with the Midlife Clarity Check →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3 — MEET THE FOUNDERS ─── */}
        <section
          className="section"
          style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner">
            <p className="eyebrow">The people behind SparkLifeLab</p>
            <h2>Meet the founders</h2>
            <p className="about-founders-intro">
              We each came to this work from a different direction. What we share is a deep
              respect for midlife as a meaningful turning point — and a belief that people
              deserve thoughtful support as they find their way through it.
            </p>

            <div className="about-founder-list">
              {founders.map((founder) => (
                <article className="about-founder-profile" key={founder.id}>
                  <div className="about-founder-portrait-col">
                    <Image
                      src={founder.photo}
                      alt={founder.photoAlt}
                      width={120}
                      height={120}
                      className="about-founder-portrait"
                    />
                    <h3 className="about-founder-name">{founder.name}</h3>
                    <p className="founder-role">{founder.role}</p>
                  </div>
                  <div className="about-founder-content">
                    <p>{founder.background}</p>
                    <blockquote className="about-founder-quote">
                      {founder.quote}
                    </blockquote>
                    <p>{founder.sllRole}</p>
                    <a
                      className="founder-linkedin"
                      href={founder.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={founder.linkedinLabel}
                    >
                      <LinkedInIcon />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="founders-closing">Three co-founders. Fellow travellers. Still becoming.</p>

            <p style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link className="button button-primary" href="/clarity-check/">
                Take the free Midlife Clarity Check →
              </Link>
            </p>
          </div>
        </section>

        {/* ─── SECTION 4 — WHAT WE BELIEVE ABOUT MIDLIFE ─── */}
        <section
          className="section about-beliefs"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="section-inner mid">
            <p className="eyebrow">Our perspective</p>
            <h2>What we believe about midlife</h2>

            <blockquote className="about-beliefs-highlight">
              Midlife is not a crisis. It is a threshold.
            </blockquote>

            <p>
              We do not see midlife as a crisis. We see it as a threshold — a crossing point
              where experience, longing, and possibility meet. Feeling stuck, restless, or
              unsure is not a flaw. It is often a signal that growth is asking for attention.
            </p>
            <p>
              We also believe that midlife has been framed too narrowly for too long. Too
              often, the cultural story is one of decline, urgency, or quiet settling. We do
              not accept that story. We believe renewal, relevance, and becoming do not end
              in midlife. In many ways, this is the phase when a more honest life begins to
              ask for shape.
            </p>
            <p>
              What makes SparkLifeLab different is the kind of support we offer. We are not
              here to push people into dramatic reinvention or to diagnose, fix, or override
              anyone&rsquo;s lived experience. We walk alongside people as guides — offering
              structure, reflection, and companionship as clarity unfolds in small, intentional
              steps.
            </p>
            <p>
              That is why the threshold framing matters to us. A threshold is not a breakdown.
              It is a crossing. And crossings ask for attention, courage, and the right kind of
              company.
            </p>

            <div className="about-cta-group">
              <Link className="button button-primary" href="/clarity-check/">
                Take the Midlife Clarity Check →
              </Link>
              <Link className="button button-secondary" href="/identity-lab/">
                Explore the SparkLife Identity Lab
              </Link>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5 — STILL BECOMING ─── */}
        <section
          className="section about-closing-section"
          style={{ background: "var(--page-bg)", paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="about-closing-grid section-inner">
            <div className="about-closing-img-wrap">
              <SanityImage
                src={closingImageUrl ?? "/images/our-story-closing-sunrise-14.jpg"}
                alt={closingImageAlt}
                width={700}
                height={520}
                sizes="(max-width: 900px) 100vw, 480px"
                {...(closingImageUrl && images.closingImage?.lqip
                  ? { placeholder: "blur" as const, blurDataURL: images.closingImage.lqip }
                  : {})}
              />
            </div>

            <div>
              <p className="eyebrow">Still on the path</p>
              <h2>Still becoming</h2>
              <p className="about-closing-lead">
                We built SparkLifeLab from lived experience, shared reflection, and a deep
                belief that midlife deserves better language and better support. We are not
                standing outside this terrain. We know it from the inside.
              </p>
              <p>
                We are still learning. Still crossing. Still becoming. And we are glad to
                walk this stretch with others.
              </p>

              <div className="about-cta-group" style={{ marginTop: "2rem" }}>
                <Link className="button button-primary" href="/clarity-check/">
                  Take the Midlife Clarity Check →
                </Link>
                <Link className="button button-secondary" href="/identity-lab/">
                  Explore the SparkLife Identity Lab
                </Link>
              </div>
              <p className="about-cta-support">Free. Thoughtful. A good place to begin.</p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

// ─── Inline LinkedIn SVG — no external dependency ────────────────────────────

function LinkedInIcon() {
  return (
    <svg
      className="founder-linkedin-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
