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
