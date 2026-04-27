import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "SparkLifeLab Impressum placeholder for German/EU legal review before launch.",
};

export default function ImpressumPage() {
  return (
    <LegalPage
      title="Impressum"
      intro="This page is required before launch if SparkLifeLab is commercially available to visitors in Germany. Final legal details must be supplied and reviewed."
    >
      {/* TODO: Replace all placeholder fields with approved Impressum details. */}
      <div className="legal-grid">
        <article className="legal-card">
          <h2>Legal entity</h2>
          <p>TODO: Add full legal company name and legal form.</p>
        </article>
        <article className="legal-card">
          <h2>Registered address</h2>
          <p>TODO: Add the approved company address. Do not publish invented address data.</p>
        </article>
        <article className="legal-card">
          <h2>Contact</h2>
          <p>TODO: Add required email and phone details once approved for publication.</p>
        </article>
        <article className="legal-card">
          <h2>Responsible for content</h2>
          <p>TODO: Add the person responsible for content in Germany after legal review.</p>
        </article>
      </div>
    </LegalPage>
  );
}
