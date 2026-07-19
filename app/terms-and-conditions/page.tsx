import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — SparkLifeLab",
  description:
    "SparkLifeLab Terms & Conditions. The legal terms governing your use of the SparkLifeLab website and services.",
  alternates: { canonical: "/terms-and-conditions/" },
};

export default function TermsAndConditionsPage() {
  const htmlContent = fs.readFileSync(
    path.join(process.cwd(), "content/legal/sll-terms-and-conditions.html"),
    "utf-8"
  );

  return (
    <main>
      <section className="legal-shell">
        <div className="legal-shell-inner">
          <p className="brand-context">SparkLifeLab · Legal</p>
          {/* HTML contains its own "TERMS AND CONDITIONS" heading — no duplicate added */}
          <div
            className="legal-html-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <p className="legal-footer-nav">
            <Link href="/">← Return to homepage</Link>
            {" · "}
            <Link href="/contact/">Contact us</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
