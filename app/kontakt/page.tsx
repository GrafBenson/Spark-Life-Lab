import { restaurant } from "@/data/site";

export const metadata = {
  title: "Kontakt",
  description: "Kontakt, Adresse und Öffnungszeiten von Banthai Heim- & Partyservice.",
};

export default function KontaktPage() {
  return (
    <main className="flex-1 section-pad">
      <div className="container-shell section-paper px-7 py-8">
        <p className="kicker">Kontakt</p>
        <h1 className="display-section mt-3 text-[color:var(--color-ink)]">Direkt erreichbar</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">Adresse</p>
            <p className="mt-2 text-base font-semibold text-[color:var(--color-ink)]">{restaurant.address.street}<br />{restaurant.address.postalCode} {restaurant.address.city}</p>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">Telefon</p>
            <a href={`tel:${restaurant.phones[0].href}`} className="mt-2 block text-2xl font-semibold text-[color:var(--color-ink)]">{restaurant.phones[0].label}</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">Öffnungszeiten</p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--color-ink)]">{restaurant.hours.restaurant}</p>
            <p className="mt-3 text-sm leading-7 text-[color:var(--color-ink)]">Mittagsmenüzeiten: {restaurant.hours.lunch}</p>
            <a href={restaurant.googleMapsHref} target="_blank" rel="noreferrer" className="button-secondary mt-6">Route öffnen</a>
          </div>
        </div>
      </div>
    </main>
  );
}
