import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { FounderCards } from "@/components/founder-cards";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "About SparkLifeLab — Our Story & Founders",
  description:
    "SparkLifeLab was founded by three people who navigated midlife fog themselves. Meet Bärbel, Gunther, and Scott and learn why they built a calm space for midlife clarity.",
  openGraph: {
    title: "About SparkLifeLab — Our Story & Founders",
    description:
      "Three co-founders, fellow travellers, who built SparkLifeLab because something like it didn't exist when they needed it.",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd page="Our Story" href="/about/" />
      <main>
        <PageHero
          variant="story"
          eyebrow="Our story"
          title="Fellow travellers, not experts standing apart."
          intro="SparkLifeLab exists because we wished something like it had existed when we first felt the restlessness ourselves."
          aside={
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
              alt="A quiet field of warm afternoon light."
              loading="lazy"
              decoding="async"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
        />

        <p className="brand-context">
          SparkLifeLab · Midlife clarity coaching — Our story
        </p>

        <Reveal as="section" className="section">
          <div className="section-inner narrow">
            <p className="eyebrow">Why we built this</p>
            <h2>Space, time, and companionship changed the question.</h2>
            <p>
              Bärbel, Gunther, and Scott met on an online course about life purpose.
              None of us was struggling — careers established, lives solid from the outside.
              Yet each of us felt the stories we were living no longer quite fit.
            </p>
            <p>
              What helped was not quick advice. It was slowing down together — conversations
              that did not rush us toward answers. Gradually, clarity emerged.
            </p>
            <p>
              We built SparkLifeLab so others would not have to find that space alone.
              We are still on the path ourselves, and glad to walk it with you.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" className="section section-cream" delay={80}>
          <div className="section-inner">
            <p className="eyebrow">The founders</p>
            <h2>Bärbel, Gunther, and Scott.</h2>
            <FounderCards />
            <div className="hero-actions">
              <ButtonLink href="/clarity-check/">Start with the free Clarity Check</ButtonLink>
              <ButtonLink href="/contact/" variant="secondary">Contact us</ButtonLink>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
