import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — SparkLifeLab",
  description:
    "SparkLifeLab Terms & Conditions. The legal terms governing your use of the SparkLifeLab website and services.",
};

export default function TermsAndConditionsPage() {
  const htmlContent = fs.readFileSync(
    path.join(process.cwd(), "content/legal/sll-terms-and-conditions.html"),
    "utf-8"
  );

  return (
    <main>
      <section
        className="legal-policy-page"
        style={{
          background: "var(--page-bg)",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          paddingTop: "clamp(3rem, 5vw, 5rem)",
          paddingBottom: "clamp(4rem, 6vw, 6rem)",
        }}
      >
        <div className="legal-policy-inner">
          {/* HTML contains its own "TERMS AND CONDITIONS" heading — no duplicate added */}
          <div
            className="legal-html-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <p className="legal-policy-footer-nav">
            <Link href="/">← Return to homepage</Link>
            {" · "}
            <Link href="/contact/">Contact us</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
