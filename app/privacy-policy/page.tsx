import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "SparkLifeLab Privacy Policy. How we collect, use, and protect your personal information under GDPR, CCPA, and applicable privacy laws.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  const htmlContent = fs.readFileSync(
    path.join(process.cwd(), "content/legal/sll-privacy-policy.html"),
    "utf-8"
  );

  return (
    <main>
      <section className="legal-shell">
        <div className="legal-shell-inner">
          <p className="brand-context">SparkLifeLab · Legal</p>
          {/* HTML contains its own <h1>PRIVACY POLICY</h1> — no duplicate heading added */}
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
