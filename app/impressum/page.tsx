import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Legal disclosure for SparkLifeLab.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <section className="section-pad" style={{ background: "var(--paper)" }}>
      <div className="container-narrow">
        <p className="kicker">Legal</p>
        <span aria-hidden className="section-divider" />
        <h1 className="display-section">Impressum</h1>

        {/* TODO: Replace with final Impressum once client provides:
             - Legal entity name and type (e.g. GbR, GmbH, Ltd.)
             - Registered address
             - Country of jurisdiction
             - VAT / company registration number (if applicable)
             - Responsible person for editorial content (§ 55 Abs. 2 RStV)
             Do not invent any of the above details. */}

        <div className="mt-10 rounded-sm border px-6 py-5 text-[0.88rem] text-[color:var(--mid-navy)]"
          style={{ borderColor: "var(--color-line)", background: "var(--cream)" }}>
          <p className="font-medium text-[color:var(--deep-navy)]">
            ⚠ Placeholder — client details required
          </p>
          <p className="mt-1">
            The Impressum requires the client&apos;s legal entity details, registered
            address, and responsible person. These must be confirmed by the
            client before this site goes live.
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[0.95rem] leading-relaxed text-[color:var(--mid-navy)]">
          <div>
            <h2 className="display-sub mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="body-copy">
              SparkLifeLab
              <br />
              <span className="italic text-[color:var(--slate-mist)]">
                [Legal entity name and type — to be confirmed by client]
              </span>
              <br />
              <span className="italic text-[color:var(--slate-mist)]">
                [Registered address — to be confirmed by client]
              </span>
            </p>
          </div>

          <div>
            <h2 className="display-sub mb-2">Kontakt</h2>
            <p className="body-copy">
              E-Mail:{" "}
              <a
                href="mailto:hello@spark-life-lab.com"
                className="underline underline-offset-2"
              >
                hello@spark-life-lab.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="display-sub mb-2">Verantwortlich für den Inhalt</h2>
            <p className="body-copy">
              <span className="italic text-[color:var(--slate-mist)]">
                [Responsible person — to be confirmed by client]
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
