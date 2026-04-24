import { OrderLink } from "@/components/order-link";
import { menuCategoryGroups, restaurant } from "@/data/site";

export const metadata = {
  title: "Bestellen",
  description: "Verifizierte Speisekategorien und Bestellweg von Banthai Heim- & Partyservice.",
};

export default function BestellenPage() {
  return (
    <main className="flex-1 section-pad">
      <div className="container-shell">
        <div className="section-paper px-7 py-8">
          <p className="kicker">Bestellen / Speisekarte</p>
          <h1 className="display-section mt-3 text-[color:var(--color-ink)]">Klar strukturierte Angebotsübersicht</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--color-muted)]">Diese Seite zeigt nur verifizierte Kategorien aus dem Originalsystem. Einzelne Menüpunkte und Preise werden erst nach finaler Extraktion ergänzt.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <OrderLink variant="primary" label="Im Originalsystem bestellen" />
            <a href={`tel:${restaurant.phones[0].href}`} className="button-secondary">Anrufen</a>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {menuCategoryGroups.map((group) => (
            <section key={group.title} className="section-paper px-6 py-6">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--color-ink)]">{group.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
                {group.entries.map((entry) => (
                  <li key={entry}>- {entry}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-6 section-paper px-6 py-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--color-ink)]">TODO für finale Menüpflege</h2>
          <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">TODO: Vollständige Menüpunkte, Preise, Liefergebietszonen und Mindestbestellwerte direkt aus den öffentlich erreichbaren Quellseiten final einpflegen und vom Betreiber bestätigen lassen.</p>
        </div>
      </div>
    </main>
  );
}
