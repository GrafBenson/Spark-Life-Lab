import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "SparkLife Identity Lab — SparkLifeLab",
  description:
    "A guided transformation journey for people in midlife. Explore values, strengths, and direction in a small supported group. Ends with your personal IdentityMap.",
  openGraph: {
    title: "SparkLife Identity Lab — SparkLifeLab",
    description:
      "Not a course. Not coaching. A guided crossing — with others who understand what this passage feels like. Ends with your personal IdentityMap.",
  },
};

export default function IdentityLabPage() {
  return (
    <>
      <BreadcrumbJsonLd page="Identity Lab" href="/identity-lab/" />
      <main>
      {/* Page hero */}
      <section
        className="section"
        style={{
          background: "var(--authority)",
          paddingTop: "clamp(4.5rem,6vw,7rem)",
          paddingBottom: "clamp(3.5rem,5vw,5.5rem)",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        <div className="section-inner mid">
          <p className="brand-context" style={{ color: "rgba(255,255,255,0.55)" }}>
            SparkLifeLab · Identity Lab
          </p>
          <p className="eyebrow-white">When you&rsquo;re ready for the next step.</p>
          <h1 style={{ color: "var(--white)" }}>The SparkLife Identity Lab</h1>
          <p className="page-intro" style={{ color: "rgba(255,255,255,0.80)", maxWidth: "640px" }}>
            Your guided first step into clarity. A transformation journey for people in
            midlife who are ready to move from fog to grounded forward movement.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="section" style={{ background: "var(--page-bg)", paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="section-inner mid">
          <p className="eyebrow">What it is</p>
          <h2>Not a course. Not coaching. A guided crossing.</h2>
          <p className="lead" style={{ maxWidth: "680px" }}>
            Once you have a clearer sense of where you are, the SparkLife Identity Lab
            offers the next step — a guided transformation journey to help you understand
            who you are now, what truly matters, and how to move forward with intention.
          </p>
          <p>
            In a small, supported group, you will explore your values, your strengths, and
            the direction that feels most aligned with who you are becoming.
          </p>
          <p>
            A guided crossing — with others who understand what this passage feels like.
          </p>
        </div>
      </section>

      {/* IdentityMap */}
      <section className="section" style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="section-inner mid">
          <p className="eyebrow">What you leave with</p>
          <h2>Your personal IdentityMap</h2>
          <p>
            The journey ends with your personal <strong>IdentityMap</strong>: a
            beautifully designed document that brings together everything you discovered —
            your values, strengths, purpose, and emerging future.
          </p>
          <p>
            Not a worksheet. Not a summary. A compass you keep.
          </p>
          <blockquote className="pull-quote-dark">
            A clear, visual record of who you are now and the direction that feels most
            yours — to return to whenever the fog creeps back.
          </blockquote>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: "var(--page-bg)", paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="section-inner mid">
          <p className="eyebrow">How it works</p>
          <h2>Small group. Online. Human pace.</h2>
          <p>
            The SparkLife Identity Lab runs with a small group — typically 6–8 people —
            over several weeks. Sessions are online and designed to move at a human pace,
            not the pace of a training programme.
          </p>
          <p>
            You will be guided through structured reflection, honest dialogue with fellow
            travellers, and a gradual deepening of self-knowledge. There is no performance,
            no grading, no pressure to have answers. Only the invitation to look more
            closely.
          </p>

          {/* CTA */}
          <div style={{ marginTop: "2.5rem" }}>
            {/* TODO: Replace href with Kajabi/registration link when registration opens.
                Until then, link points back to the homepage Clarity Check section
                as the natural first step. */}
            <Link className="button button-primary" href="/clarity-check/">
              Start with the free Midlife Clarity Check →
            </Link>
            <p
              style={{
                color: "var(--ember-deep)",
                fontStyle: "italic",
                fontSize: "1.18rem",
                fontWeight: 600,
                lineHeight: 1.35,
                marginTop: "1rem",
              }}
            >
              First cohort launching May 2026. Places are limited.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
              {/* TODO: Update status text and CTA link when registration opens. */}
              Registration opening soon. Begin with the Clarity Check to be notified when
              places become available.
            </p>
          </div>
        </div>
      </section>

      {/* Soft return */}
      <section
        className="section"
        style={{ background: "var(--authority)", paddingLeft: "5vw", paddingRight: "5vw", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}
      >
        <div className="section-inner narrow" style={{ textAlign: "center" }}>
          <h2 style={{ color: "var(--white)" }}>Not sure if you&rsquo;re ready?</h2>
          <p style={{ color: "rgba(255,255,255,0.80)", maxWidth: "480px", margin: "0 auto 2rem" }}>
            Start with the free Midlife Clarity Check. It only takes 20–30 minutes and
            will help you understand exactly where you are.
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
