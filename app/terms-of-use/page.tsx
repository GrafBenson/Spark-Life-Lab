import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the SparkLifeLab website.",
  robots: { index: false, follow: false },
};

export default function TermsOfUsePage() {
  return (
    <section className="section-pad" style={{ background: "var(--paper)" }}>
      <div className="container-narrow">
        <p className="kicker">Legal</p>
        <span aria-hidden className="section-divider" />
        <h1 className="display-section">Terms of Use</h1>

        {/* TODO: Replace with final Terms of Use copy reviewed by a qualified
             lawyer before going live. Do not invent company registration data,
             addresses, jurisdiction details, or liability language. */}

        <div className="mt-10 rounded-sm border px-6 py-5 text-[0.88rem] text-[color:var(--mid-navy)]"
          style={{ borderColor: "var(--color-line)", background: "var(--cream)" }}>
          <p className="font-medium text-[color:var(--deep-navy)]">
            ⚠ Placeholder — final legal copy required
          </p>
          <p className="mt-1">
            This page is a placeholder. Final Terms of Use must be reviewed by
            a qualified lawyer before this site goes live.
          </p>
        </div>

        <div className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-[color:var(--mid-navy)]">
          <div>
            <h2 className="display-sub mb-3">Use of this website</h2>
            <p className="body-copy">
              By accessing and using spark-life-lab.com, you agree to use the
              site for lawful purposes only and in a manner that does not
              infringe the rights of others.
            </p>
          </div>

          <div>
            <h2 className="display-sub mb-3">Content</h2>
            <p className="body-copy">
              All content on this website — including text, graphics, and
              design — is the property of SparkLifeLab and is protected by
              applicable intellectual property laws. You may not reproduce or
              redistribute any content without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="display-sub mb-3">No professional advice</h2>
            <p className="body-copy">
              The content on this website is for informational and
              self-reflection purposes only. It does not constitute
              psychological, therapeutic, medical, legal, or financial advice.
              If you are experiencing a mental health crisis, please seek
              qualified professional support.
            </p>
          </div>

          <div>
            <h2 className="display-sub mb-3">Changes</h2>
            <p className="body-copy">
              We may update these terms from time to time. Continued use of
              the website following any changes constitutes your acceptance of
              the revised terms.
            </p>
          </div>

          <div>
            <h2 className="display-sub mb-3">Contact</h2>
            <p className="body-copy">
              SparkLifeLab ·{" "}
              <a
                href="mailto:hello@spark-life-lab.com"
                className="underline underline-offset-2"
              >
                hello@spark-life-lab.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
