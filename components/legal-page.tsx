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
      <section className="legal-shell">
        <div className="legal-shell-inner">
          <p className="brand-context">SparkLifeLab · Legal</p>
          <h1>{title}</h1>
          {intro && <p className="legal-intro">{intro}</p>}

          <div className="legal-todo">
            <strong>TODO — Final legal copy required.</strong> This is a structured
            placeholder. Replace with lawyer-reviewed or{" "}
            <a href="https://termly.io" target="_blank" rel="noopener noreferrer">Termly</a>/
            <a href="https://iubenda.com" target="_blank" rel="noopener noreferrer">iubenda</a>-generated
            text before public launch. Do not invent company registration data, legal
            addresses, or responsible person details.
          </div>

          {children}

          <p className="legal-footer-nav">
            Questions?{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {" · "}
            <Link href="/">Return to homepage</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
