import { restaurant } from "@/data/site";

export const metadata = {
  title: "Liefergebiet",
  description: "Liefergebiet, Mindestbestellwerte und Hinweise aus dem Quellsystem.",
};

export default function LiefergebietPage() {
  return (
    <main className="flex-1 section-pad">
      <div className="container-shell space-y-6">
        <section className="section-paper px-7 py-8">
          <p className="kicker">Lieferdienst</p>
          <h1 className="display-section mt-3 text-[color:var(--color-ink)]">Liefergebiet & Mindestbestellwerte</h1>
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">Im Originalsystem ist ein Liefergebiet mit Mindestbestellwerten und Kartenansicht ausgewiesen.</p>
          <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">TODO: Exakte Zonen und Mindestbestellwerte aus den öffentlichen Detailseiten final nachtragen und Betreiberfreigabe einholen.</p>
          <a href={restaurant.sourceSystemUrl} target="_blank" rel="noreferrer" className="button-secondary mt-6">Originalsystem öffnen</a>
        </section>
      </div>
    </main>
  );
}
