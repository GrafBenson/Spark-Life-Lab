import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice — SparkLifeLab",
  description: "Legal Notice for SparkLifeLab Inc., a Delaware corporation.",
  robots: { index: false, follow: false },
};

export default function LegalNotePage() {
  return (
    <main>
      <section className="legal-shell">
        <div className="legal-shell-inner">
          <p className="brand-context">SparkLifeLab · Legal</p>
          <h1>LEGAL NOTICE</h1>

          <div className="legal-notice-block">
            <h2>Website operator</h2>
            <p>
              SparkLifeLab Inc.<br />
              A Delaware corporation
            </p>
          </div>

          <div className="legal-notice-block">
            <h2>Registered office / registered agent address</h2>
            <p>
              CSC<br />
              251 Little Falls Drive<br />
              Wilmington, DE 19808<br />
              United States
            </p>
          </div>

          <div className="legal-notice-block">
            <h2>Business and mailing address</h2>
            <p>
              SparkLifeLab Inc.<br />
              1217 Golden Star Way<br />
              Wake Forest, NC 27587-3934<br />
              United States
            </p>
          </div>

          <div className="legal-notice-block">
            <h2>Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:hello@spark-life-lab.com">
                hello@spark-life-lab.com
              </a>
              <br />
              Website:{" "}
              <a
                href="https://www.spark-life-lab.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.spark-life-lab.com
              </a>
            </p>
          </div>

          <div className="legal-notice-block">
            <h2>Authorized representatives</h2>
            <p>
              Gunther Tress, Authorized Representative<br />
              Bärbel Tress, Authorized Representative<br />
              Scott Burton, Authorized Representative
            </p>
          </div>

          <div className="legal-notice-block">
            <h2>Registration information</h2>
            <p>
              Registered jurisdiction: Delaware, United States<br />
              Registration authority: Delaware Division of Corporations<br />
              Delaware file number: [insert when available]
            </p>
          </div>

          <div className="legal-notice-block">
            <h2>VAT identification number</h2>
            <p>Not currently applicable.</p>
          </div>

          <div className="legal-notice-block">
            <h2>Responsible for website content</h2>
            <p>
              SparkLifeLab Inc.<br />
              1217 Golden Star Way<br />
              Wake Forest, NC 27587-3934<br />
              United States<br />
              Email:{" "}
              <a href="mailto:hello@spark-life-lab.com">
                hello@spark-life-lab.com
              </a>
            </p>
          </div>

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
