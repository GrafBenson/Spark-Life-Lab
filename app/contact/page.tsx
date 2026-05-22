import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact SparkLifeLab — Questions Welcome",
  description:
    "Email SparkLifeLab with questions about the Identity Lab programme or potential collaboration.",
  openGraph: {
    title: "Contact SparkLifeLab — Questions Welcome",
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
          intro="Write to us about the Identity Lab or collaboration. We respond within two working days."
        />

        <Reveal as="section" className="section">
          <div className="section-inner">
            <p style={{ marginBottom: "2rem", lineHeight: 1.7 }}>
              SparkLifeLab offers the SparkLife Identity Lab — a small-group guided transformation journey for people in midlife. If you have questions about the Identity Lab, or want to talk about collaboration, write to us.
            </p>
          </div>
        </Reveal>

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
              <p className="eyebrow">Ready to take the next step?</p>
              <h2>Explore the Identity Lab</h2>
              <p>A guided journey to clarity, values, and direction.</p>
              <ButtonLink href="/identity-lab/">Learn about the Identity Lab</ButtonLink>
            </article>
          </div>
        </Reveal>
      </main>
    </>
  );
}
