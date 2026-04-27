import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { FounderCards } from "@/components/founder-cards";
import { Reveal } from "@/components/motion/reveal";
import { clarityDiscoveries, planSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "SparkLifeLab — Midlife Clarity Coaching & Reflection",
  description:
    "Midlife clarity coaching for professionals in their 40s and 50s. Get the free Midlife Clarity Check or join the SparkLife Identity Lab small-group programme.",
  openGraph: {
    title: "SparkLifeLab — Midlife Clarity Coaching & Reflection",
    description:
      "Midlife clarity coaching for professionals in their 40s and 50s. Free Clarity Check + small-group Identity Lab programme.",
  },
};

export default function Home() {
  return (
    <main>
      <section className="hero is-mounted">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">SparkLifeLab · Midlife clarity coaching</p>
            <h1>
              Something in your life no longer <em>fits</em> — even if everything looks fine.
            </h1>
            <p className="hero-copy hero-value-prop">
              <strong>SparkLifeLab</strong> helps professionals in their 40s and 50s name what
              has shifted and find a grounded way forward — through structured reflection and
              small-group coaching.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>
              Start with the free Midlife Clarity Check or join the Identity Lab coaching programme.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/clarity-check/">Get the free Clarity Check</ButtonLink>
              <ButtonLink href="/identity-lab/" variant="secondary">
                About the Identity Lab
              </ButtonLink>
            </div>
          </div>
          <div className="image-panel hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"
              alt="Soft morning light over a quiet mountain landscape."
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <Reveal as="section" className="section section-blue">
        <div className="section-inner narrow">
          <p className="eyebrow">The Midlife Fog</p>
          <h2>When old clarity softens before a new direction has formed.</h2>
          <p>
            Life is working by most measures. And yet something feels slightly off —
            not broken, just no longer quite yours. Familiar roles feel constraining,
            old motivations feel thinner.
          </p>
          <p className="reframe">
            This is not a crisis. It is a signal that your life is ready to realign.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delay={60}>
        <div className="section-inner">
          <p className="eyebrow">How SparkLifeLab works</p>
          <h2>Three steps from clarity to grounded forward.</h2>
          <div className="steps">
            {planSteps.map((step, index) => (
              <article className="step-card" key={step.label}>
                <div className="step-number">0{index + 1}</div>
                <h3>{step.label}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section section-cream" delay={60}>
        <div className="section-inner split">
          <div>
            <p className="eyebrow">Step one — free</p>
            <h2>The Midlife Clarity Check</h2>
            <p>
              A free PDF self-reflection guide. 20–30 minutes. No pressure — just a
              structured pause that helps you name what may be ready to shift.
            </p>
            <Link href="/clarity-check/" className="button-text" style={{ display: "inline-block" }}>
              Learn more →
            </Link>
          </div>
          <div>
            <p className="eyebrow">What it reveals</p>
            <ul className="quiet-list">
              {clarityDiscoveries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delay={60}>
        <div className="section-inner split">
          <div>
            <p className="eyebrow">Step two — guided programme</p>
            <h2>The SparkLife Identity Lab</h2>
            <p>
              A small-group online coaching programme (6–8 people) that takes you
              from naming what no longer fits to a grounded sense of what comes next.
            </p>
            <Link href="/identity-lab/" className="button-text" style={{ display: "inline-block" }}>
              Learn more →
            </Link>
          </div>
          <div className="program-panel">
            <p className="eyebrow">Small-group · Online · Human pace</p>
            <ul className="quiet-list">
              <li>Values and identity work</li>
              <li>Structured reflection</li>
              <li>Honest dialogue with fellow travellers</li>
              <li>Cohort-based — register interest to be notified</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section section-cream" delay={60}>
        <div className="section-inner">
          <p className="eyebrow">The team</p>
          <h2>Co-founders. Fellow travellers.</h2>
          <p className="lead">
            Three people who navigated the Midlife Fog themselves and built
            SparkLifeLab because something like it did not exist when they needed it.
          </p>
          <FounderCards />
          <p style={{ marginTop: "2rem" }}>
            <Link href="/about/" className="button-text" style={{ display: "inline-block" }}>
              Read our story →
            </Link>
          </p>
        </div>
      </Reveal>

      <CtaBand
        title="Start with a free, honest check-in."
        text="20–30 minutes. No commitment. Just clarity."
        href="/clarity-check/"
        label="Get the free Clarity Check"
      />
    </main>
  );
}
