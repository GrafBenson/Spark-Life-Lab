import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SparkLifeLab privacy policy placeholder for review before launch, including GDPR and CCPA considerations.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This placeholder outlines the privacy topics the final policy should cover for US, Canadian, and EU visitors."
    >
      {/* TODO: Replace with final Termly/iubenda/lawyer-reviewed Privacy Policy. */}
      <div className="legal-grid">
        <article className="legal-card">
          <h2>Data collected</h2>
          <p>
            The final policy should cover name, email address, consent records, website
            analytics if enabled, and any data collected by the selected email provider.
          </p>
        </article>
        <article className="legal-card">
          <h2>How data is used</h2>
          <p>
            Include lead magnet delivery, email communications, unsubscribe handling, and
            privacy request handling.
          </p>
        </article>
        <article className="legal-card">
          <h2>Third-party tools</h2>
          <p>
            Add the approved email provider, analytics provider if any, cookie tool, and
            hosting provider before launch.
          </p>
        </article>
        <article className="legal-card">
          <h2>User rights</h2>
          <p>
            The final policy should address GDPR and applicable US privacy rights, including
            access, correction, deletion, and consent withdrawal.
          </p>
        </article>
      </div>
    </LegalPage>
  );
}
