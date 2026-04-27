import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "SparkLife Identity Lab — Midlife Coaching Programme",
  description:
    "Small-group online coaching programme for midlife realignment. Explore values, identity, and direction with SparkLifeLab's guided process.",
  openGraph: {
    title: "SparkLife Identity Lab — Midlife Coaching Programme",
    description:
      "A structured small-group online coaching programme for people in midlife ready to move from fog toward grounded clarity.",
  },
};

export default function IdentityLabPage() {
  return (
    <>
      <BreadcrumbJsonLd page="SparkLife Identity Lab" href="/identity-lab/" />
      <main>
        <PageHero
          variant="lab"
          eyebrow="SparkLife Identity Lab"
          title="A small-group coaching programme for midlife realignment."
          intro="6–8 people. Online. Several weeks. Guided from naming what no longer fits to clarity about what comes next."
          cta={{ href: "/clarity-check/", label: "Begin with the free Clarity Check" }}
        />

        <p className="brand-context">
          SparkLifeLab · Midlife clarity coaching — Identity Lab
        </p>

        <Reveal as="section" className="section">
          <div className="section-inner split">
            <div>
              <p className="eyebrow">What it is</p>
              <h2>Guided coaching, not a course.</h2>
              <p>
                Small-group structured reflection — values, identity, direction — with
                honest dialogue at a human pace. Not therapy, not a productivity system.
                A guided crossing from the Midlife Fog toward clarity you can act on.
              </p>
            </div>
            <div className="program-panel">
              <p className="eyebrow">For people who</p>
              <ul className="quiet-list">
                <li>Feel a restlessness they cannot ignore.</li>
                <li>Want language for who they are becoming.</li>
                <li>Value structure without being rushed.</li>
                <li>Prefer companionship over motivational hype.</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="section section-cream" delay={80}>
          <div className="section-inner">
            <p className="eyebrow">What the programme covers</p>
            <h2>From fog toward a more honest next chapter.</h2>
            <div className="feature-grid">
              <article className="feature">
                <h3>Structured reflection</h3>
                <p>A clear container for what feels misaligned and what may be ready to shift.</p>
              </article>
              <article className="feature">
                <h3>Identity and values</h3>
                <p>Who you are now — not only the roles you have carried.</p>
              </article>
              <article className="feature">
                <h3>Supported dialogue</h3>
                <p>Conversation with others who understand the threshold.</p>
              </article>
              <article className="feature">
                <h3>Grounded next steps</h3>
                <p>Small choices that make clarity lived, not only understood.</p>
              </article>
            </div>
            <div className="hero-actions">
              <ButtonLink href="/contact/" variant="secondary">
                Register interest
              </ButtonLink>
              <span className="meta-line" style={{ alignSelf: "center" }}>
                Cohort dates &amp; pricing announced when registration opens.
              </span>
            </div>
          </div>
        </Reveal>

        <CtaBand
          title="New here? Start with the free Clarity Check."
          text="20–30 minutes. No cost, no commitment."
          href="/clarity-check/"
          label="Get the free Clarity Check"
        />
      </main>
    </>
  );
}
