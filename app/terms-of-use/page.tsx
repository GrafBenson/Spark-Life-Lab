import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "SparkLifeLab Terms of Use placeholder for legal review before launch.",
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="This placeholder marks the structure for the final website terms. It does not invent governing law, liability language, or company details."
    >
      {/* TODO: Replace with final lawyer-reviewed Terms of Use. */}
      <div className="legal-grid">
        <article className="legal-card">
          <h2>Website use</h2>
          <p>
            The final terms should explain acceptable use of the SparkLifeLab website and
            any downloadable materials.
          </p>
        </article>
        <article className="legal-card">
          <h2>Intellectual property</h2>
          <p>
            Add reviewed language covering website copy, visual identity, reflection guides,
            and programme materials.
          </p>
        </article>
        <article className="legal-card">
          <h2>Disclaimers</h2>
          <p>
            Include reviewed disclaimers that avoid medical or therapeutic claims while
            explaining the reflective nature of SparkLifeLab materials.
          </p>
        </article>
        <article className="legal-card">
          <h2>Company details</h2>
          <p>
            Add the final legal entity, jurisdiction, registered address, and contact details
            supplied by the client or legal provider.
          </p>
        </article>
      </div>
    </LegalPage>
  );
}
