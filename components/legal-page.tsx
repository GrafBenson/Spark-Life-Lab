import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/data/site";

type LegalPageProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <main>
      <section className="legal-hero">
        <p className="eyebrow">Review required before launch</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <section className="legal-content">
        <div className="legal-notice">
          <strong>Legal placeholder:</strong> This page is a structured placeholder for client
          review. Replace it with lawyer-reviewed or Termly/iubenda-generated text before the
          public launch.
        </div>
        {children}
        <p className="legal-contact">
          Privacy or legal questions can be sent to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. You can return to the{" "}
          <Link href="/">homepage</Link>.
        </p>
      </section>
    </main>
  );
}
