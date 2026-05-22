import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — SparkLifeLab",
  description:
    "SparkLifeLab Privacy Policy. How we collect, use, and protect your personal information under GDPR, CCPA, and applicable privacy laws.",
};

export default function PrivacyPolicyPage() {
  const htmlContent = fs.readFileSync(
    path.join(process.cwd(), "content/legal/sll-privacy-policy.html"),
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
          {/* HTML contains its own <h1>PRIVACY POLICY</h1> — no duplicate heading added */}
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
