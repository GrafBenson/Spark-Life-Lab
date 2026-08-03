import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { resourceThemes } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

// The Library is still being assembled and is not linked from the site
// navigation ("Resources and Contact are deferred at launch" — data/site.ts).
// It stays noindex, and out of sitemap.xml, until real essays are published,
// so a placeholder page does not enter the index as thin content.

export const metadata: Metadata = pageMetadata({
  title: "Midlife Clarity Resources",
  description:
    "Essays and reflection resources on midlife clarity, purpose, values, and identity change. Published by SparkLifeLab.",
  path: "/resources/",
  ogTitle: "Midlife Clarity Resources — SparkLifeLab",
  ogDescription:
    "A slowly-built library of essays and resources on midlife clarity, purpose, and identity. By the SparkLifeLab team.",
  noindex: true,
});

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
