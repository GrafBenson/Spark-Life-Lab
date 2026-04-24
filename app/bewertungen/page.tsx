import { reviewQuotes, reviewSources } from "@/data/site";

export const metadata = {
  title: "Bewertungen",
  description: "Quelleninterne Bewertungsdaten aus dem Originalsystem.",
};

export default function BewertungenPage() {
  const source = reviewSources[0];
  return (
    <main className="flex-1 section-pad">
      <div className="container-shell space-y-6">
        <section className="section-paper px-7 py-8">
          <p className="kicker">Trust-Signal aus dem Originalsystem</p>
          <h1 className="display-section mt-3 text-[color:var(--color-ink)]">{source.rating} bei {source.reviewCountLabel}</h1>
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">Quelle: {source.provider}. {source.note}</p>
          <a href={source.href} target="_blank" rel="noreferrer" className="button-secondary mt-5">{source.actionLabel}</a>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {reviewQuotes.map((quote) => (
            <article key={quote.quote} className="section-paper px-5 py-5">
              <p className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--color-ink)]">“{quote.quote}”</p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[color:var(--color-muted)]">{quote.dateLabel} · {quote.provider}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
