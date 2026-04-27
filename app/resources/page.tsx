import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { resourceThemes } from "@/data/site";

export const metadata: Metadata = {
  title: "Midlife Clarity Resources — SparkLifeLab",
  description:
    "Essays and reflection resources on midlife clarity, purpose, values, and identity change. Published by SparkLifeLab.",
  openGraph: {
    title: "Midlife Clarity Resources — SparkLifeLab",
    description:
      "A slowly-built library of essays and resources on midlife clarity, purpose, and identity. By the SparkLifeLab team.",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbJsonLd page="Resources" href="/resources/" />
      <main>
        <PageHero
          variant="library"
          eyebrow="The Library"
          title="The questions midlife asks quietly."
          intro="A slowly-built collection of essays for people walking the threshold. We are gathering the source material now — what arrives here will be unhurried, considered, and honest."
        />

        <p className="brand-context">
          SparkLifeLab · Midlife clarity coaching — Essays &amp; resources
        </p>

        <Reveal as="section" className="section">
          <div className="section-inner">
            <p className="eyebrow">Themes we are tending</p>
            <h2>The essays we are quietly preparing.</h2>
            <div className="theme-grid">
              {resourceThemes.map((theme) => (
                <article className="essay-theme" key={theme}>
                  <h3>{theme}</h3>
                  <p>
                    Essays on this theme will arrive when they are ready — written
                    in our own voice, drawn from our own crossing.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
