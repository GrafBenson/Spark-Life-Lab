import Link from "next/link";

import { OrderLink } from "@/components/order-link";
import { homeTrustItems, offerWorlds, restaurant, reviewQuotes, visitDetails } from "@/data/site";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="pt-6">
        <div className="container-shell">
          <div className="hero-stage px-6 py-10 sm:px-10 sm:py-14">
            <p className="kicker">{restaurant.brandContext}</p>
            <h1 className="display-hero mt-4 text-[color:var(--color-ink)]">Banthai Sushi in Starnberg-Percha.</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--color-muted)]">{restaurant.welcomeLine}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <OrderLink label="Jetzt bestellen" variant="primary" />
              <Link href="/bestellen" className="button-secondary">Speisekarte ansehen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container-shell grid gap-3 md:grid-cols-3">
          {homeTrustItems.map((item) => (
            <article key={item.label} className="section-paper px-5 py-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-muted)]">{item.source}</p>
              <p className="mt-2 text-base font-semibold text-[color:var(--color-ink)]">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <h2 className="display-section text-[color:var(--color-ink)]">Angebotswelten</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {offerWorlds.map((world) => (
              <article key={world.title} className="section-paper px-6 py-6">
                <h3 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--color-ink)]">{world.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{world.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="container-shell rounded-[2rem] bg-[color:var(--color-night)] px-7 py-8 text-white">
          <p className="kicker text-[color:var(--color-saffron)]">Verifizierte Bewertungen aus der Quelle</p>
          <blockquote className="mt-4 text-2xl font-[family-name:var(--font-display)]">“{reviewQuotes[0].quote}”</blockquote>
          <p className="mt-3 text-sm text-white/70">{reviewQuotes[0].dateLabel} · {reviewQuotes[0].provider}</p>
          <Link href="/bewertungen" className="button-secondary mt-6">Weitere Bewertungsdaten</Link>
        </div>
      </section>

      <section className="pb-20 pt-6">
        <div className="container-shell section-paper px-7 py-8">
          <h2 className="display-section text-[color:var(--color-ink)]">Kontakt, Zeiten, Liefergebiet</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {visitDetails.map((detail) => (
              <article key={detail.label}>
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-muted)]">{detail.label}</p>
                <p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--color-ink)]">{detail.value}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kontakt" className="button-secondary">Kontakt</Link>
            <Link href="/liefergebiet" className="button-secondary">Liefergebiet</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
