import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Free Midlife Clarity Check — SparkLifeLab",
  description:
    "A free 6-question self-assessment with 3 scored result profiles to help you understand where you are in your midlife passage. 20–30 minutes. No cost.",
  openGraph: {
    title: "Free Midlife Clarity Check — SparkLifeLab",
    description:
      "Six honest questions. Three scored result profiles. Understand where you are and what may be ready to change. Free. 20–30 minutes.",
  },
};

export default function ClarityCheckPage() {
  return (
    <>
      <BreadcrumbJsonLd page="Clarity Check" href="/clarity-check/" />
      <main>
      {/* Page hero */}
      <section
        className="page-hero section"
        style={{ background: "var(--page-bg)", paddingTop: "clamp(4rem,6vw,6.5rem)", paddingBottom: "clamp(3rem,4vw,4.5rem)" }}
      >
        <div className="page-hero-inner section-inner">
          <p className="brand-context">SparkLifeLab · Midlife clarity coaching — Clarity Check</p>
          <p className="eyebrow">Free — your first honest step.</p>
          <h1>The Midlife Clarity Check</h1>
          <p className="page-intro">
            A free self-assessment to help you understand where you are — and what may be
            ready to change. Six honest questions. Three scored result profiles.
            20–30 minutes.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="section" style={{ background: "var(--sand)", paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="section-inner mid">
          <p className="eyebrow">What it is</p>
          <h2>Six questions. Your honest answers.</h2>
          <p className="lead" style={{ maxWidth: "680px", marginBottom: "1.5rem" }}>
            Many people in midlife sense that something has shifted — but struggle to find
            words for it. The Midlife Clarity Check gives you language and structure for
            that experience.
          </p>
          <p>
            The assessment covers six areas of midlife experience. Your answers are scored
            and matched to one of three result profiles — each designed to describe where
            you are in your midlife passage and what kind of support might help most.
          </p>
          <p>It takes around 20–30 minutes when done with honest reflection.</p>

          {/* 3 result profiles */}
          <div
            className="steps"
            style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))", marginTop: "2.5rem" }}
          >
            <article className="step-card step-card-default">
              <div className="step-number">01</div>
              <h3>The Restless Achiever</h3>
              <p>
                You have built something solid. Life looks successful. And yet something
                feels hollow. This profile points toward values reconnection and purpose
                reorientation.
              </p>
            </article>
            <article className="step-card step-card-featured">
              <div className="step-number">02</div>
              <h3>The Quiet Crossroads</h3>
              <p>
                You are at a pause — not in crisis, but sensing a shift. This profile
                points toward deeper reflection and structured clarity work.
              </p>
            </article>
            <article className="step-card step-card-default">
              <div className="step-number">03</div>
              <h3>The Threshold Seeker</h3>
              <p>
                You know something needs to change. The fog is thick. This profile points
                toward guided companionship and the next concrete step.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Form / Kit embed */}
      <section
        className="section"
        style={{ background: "var(--authority)", paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="section-inner narrow">
          <p className="eyebrow-white">Get your free Clarity Check</p>
          <h2 style={{ color: "var(--white)" }}>Enter your email to receive it.</h2>
          <p style={{ color: "rgba(255,255,255,0.80)", marginBottom: "2rem" }}>
            We&apos;ll send the Midlife Clarity Check directly to your inbox. No spam. You can
            unsubscribe at any time.
          </p>

          {/* TODO: Replace this placeholder with your live Kit/ConvertKit embed code.
              Steps:
              1. Go to your Kit account → Forms → select your Midlife Clarity Check form
              2. Copy the embed code
              3. Replace the <div> below with the Kit <script> or inline form embed
              4. Test the flow: submit → welcome email → PDF/assessment delivered
          */}
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px dashed rgba(255,255,255,0.3)",
              borderRadius: "4px",
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            <p style={{ color: "var(--gold)", fontWeight: 600, marginBottom: "0.5rem" }}>
              TODO: Kit/ConvertKit form embed
            </p>
            <p style={{ color: "rgba(255,255,255,0.60)", fontSize: "0.9rem" }}>
              Replace this placeholder with your live Kit form embed code. The form should
              collect first name and email, then deliver the Midlife Clarity Check PDF or
              assessment link automatically.
            </p>
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.85rem",
              marginTop: "1.25rem",
              fontStyle: "italic",
            }}
          >
            Your privacy matters. We will never share your email. Read our{" "}
            <Link href="/privacy-policy/" style={{ color: "var(--ember)", borderBottom: "1px solid rgba(239,124,98,0.35)" }}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section" style={{ background: "var(--page-bg)", paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="section-inner narrow">
          <p className="eyebrow">Why it matters</p>
          <h2>A first honest step is worth more than a perfect plan.</h2>
          <p>
            Most people who sense the Midlife Fog don&apos;t need more advice. They need a
            mirror — something that helps them see where they are with clarity and without
            judgment. The Midlife Clarity Check is that mirror.
          </p>
          <p>
            It doesn&apos;t tell you what to do. It helps you understand where you are. And
            sometimes, that understanding is exactly what a path forward needs.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link className="button button-secondary" href="/#clarity-check">
              ← Back to the homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
