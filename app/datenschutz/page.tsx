export const metadata = {
  title: "Datenschutz",
  description: "Hinweis auf die öffentlich verlinkte Datenschutzseite des Quellsystems.",
};

export default function DatenschutzPage() {
  return (
    <main className="flex-1 section-pad">
      <div className="container-shell section-paper px-7 py-8">
        <h1 className="display-section text-[color:var(--color-ink)]">Datenschutz</h1>
        <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">Im Quellsystem wird auf eine externe Datenschutzseite verwiesen. Diese Seite bleibt bewusst kurz, bis rechtlich freigegebene finale Inhalte vom Betreiber vorliegen.</p>
        <a href="https://www.bringbutler.de/datenschutz.php" target="_blank" rel="noreferrer" className="button-secondary mt-6">Externe Datenschutzquelle</a>
        <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">TODO: Betreibergeprüften finalen Datenschutztext einpflegen.</p>
      </div>
    </main>
  );
}
