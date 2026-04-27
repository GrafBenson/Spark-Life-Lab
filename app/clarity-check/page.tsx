import type { Metadata } from "next";
import { EmailCapture } from "@/components/email-capture";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { clarityDiscoveries } from "@/data/site";

export const metadata: Metadata = {
  title: "Free Midlife Clarity Check — SparkLifeLab",
  description:
    "Free 20–30 minute self-reflection PDF for people in midlife who sense something has shifted. Understand where you are and what may be ready to change.",
  openGraph: {
    title: "Free Midlife Clarity Check — SparkLifeLab",
    description:
      "A free self-reflection guide to help you understand where you are and what may be ready to change. 20–30 minutes. No cost, no pressure.",
  },
};

export default function ClarityCheckPage() {
  return (
    <>
      <BreadcrumbJsonLd page="Midlife Clarity Check" href="/clarity-check/" />
      <main>
        <PageHero
          variant="clarity"
          eyebrow="The Midlife Clarity Check"
          title="A free reflection to help you name what is shifting."
          intro="A 20–30 minute PDF guide that gives the Midlife Fog language and shape — at your own pace, no pressure."
        />

        <p className="brand-context">
          SparkLifeLab · Midlife clarity coaching — Clarity Check
        </p>

        <Reveal as="section" className="section">
          <div className="section-inner split">
            <div>
              <p className="eyebrow">What you receive</p>
              <h2>A structured pause, not another task.</h2>
              <p>Set aside 20–30 minutes. Answer honestly. Let it reveal what may be ready to shift.</p>
              <ul className="quiet-list">
                {clarityDiscoveries.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="download-panel">
              <p className="eyebrow">Free PDF download</p>
              <h2>The Midlife Clarity Check</h2>
              <p>For people who feel the quiet mismatch between the life they have built and the life now calling.</p>
              <p className="meta-line">PDF · First name and email · Consent required</p>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="section section-cream" delay={80}>
          <div className="section-inner split" id="download">
            <div>
              <p className="eyebrow">Get the PDF</p>
              <h2>Enter your details below.</h2>
              <p className="meta-line">Free · No spam · Unsubscribe at any time.</p>
            </div>
            <div className="download-panel">
              <EmailCapture />
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
