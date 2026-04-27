import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact SparkLifeLab — Midlife Coaching Questions",
  description:
    "Email SparkLifeLab with questions about the free Clarity Check, the Identity Lab programme, or potential collaboration.",
  openGraph: {
    title: "Contact SparkLifeLab — Midlife Coaching Questions",
    description:
      "Reach SparkLifeLab by email for practical questions and thoughtful next steps.",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd page="Contact" href="/contact/" />
      <main>
        <PageHero
          variant="contact"
          eyebrow="Contact"
          title="Questions are welcome. Pressure is not."
          intro="Write to us about the Clarity Check, the Identity Lab, or collaboration. We respond within two working days."
        />

        <Reveal as="section" className="section">
          <div className="section-inner contact-grid">
            <article className="contact-method">
              <p className="eyebrow">Email</p>
              <h2>Write to us</h2>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  style={{ color: "var(--blue)", borderBottom: "1px solid rgba(20,33,61,0.3)", textDecoration: "none" }}
                >
                  {site.email}
                </a>
              </p>
              <p className="meta-line">Two working days.</p>
            </article>
            <article className="contact-method">
              <p className="eyebrow">Not sure where to start?</p>
              <h2>Try the free Clarity Check</h2>
              <p>20–30 minutes. Free. No commitment.</p>
              <ButtonLink href="/clarity-check/">Get the free Clarity Check</ButtonLink>
            </article>
          </div>
        </Reveal>
      </main>
    </>
  );
}
