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
      <section
        className="legal-hero section"
        style={{ background: "var(--page-bg)", paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="section-inner mid">
          <p className="brand-context">SparkLifeLab · Legal</p>
          <h1>{title}</h1>
          <p className="page-intro">{intro}</p>
        </div>
      </section>

      <section
        className="legal-content"
        style={{ paddingLeft: "5vw", paddingRight: "5vw", paddingBottom: "clamp(4rem,6vw,6rem)" }}
      >
        <div className="legal-content-inner">
          <div className="legal-todo">
            <strong>TODO — Final legal copy required.</strong> This is a structured
            placeholder. Replace with lawyer-reviewed or{" "}
            <a href="https://termly.io" target="_blank" rel="noopener noreferrer">Termly</a>/
            <a href="https://iubenda.com" target="_blank" rel="noopener noreferrer">iubenda</a>-generated
            text before public launch. Do not invent company registration data, legal
            addresses, or responsible person details.
          </div>

          {children}

          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: "2rem" }}>
            Questions?{" "}
            <a
              href={`mailto:${site.email}`}
              style={{ color: "var(--authority)", borderBottom: "1px solid rgba(27,58,107,0.3)" }}
            >
              {site.email}
            </a>
            {" · "}
            <Link href="/" style={{ color: "var(--authority)", borderBottom: "1px solid rgba(27,58,107,0.3)" }}>
              Return to homepage
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
