import { restaurant } from "@/data/site";

export const metadata = {
  title: "Impressum",
  description: "Öffentlich verifizierbare Impressumsbasis aus dem Originalsystem.",
};

export default function ImpressumPage() {
  return (
    <main className="flex-1 section-pad">
      <div className="container-shell section-paper px-7 py-8">
        <p className="kicker">Impressum</p>
        <h1 className="display-section mt-3 text-[color:var(--color-ink)]">Öffentlich verifizierte Angaben</h1>

        <div className="mt-6 space-y-4 text-sm leading-7 text-[color:var(--color-muted)]">
          <p><strong className="text-[color:var(--color-ink)]">Name:</strong> {restaurant.name}</p>
          <p><strong className="text-[color:var(--color-ink)]">Adresse:</strong> {restaurant.address.street}, {restaurant.address.postalCode} {restaurant.address.city}</p>
          <p><strong className="text-[color:var(--color-ink)]">Telefon:</strong> {restaurant.phones[0].label}</p>
          <p><strong className="text-[color:var(--color-ink)]">Inhaberhinweis aus Quelle:</strong> {restaurant.ownerHint}</p>
          <p>TODO: Vollständige rechtliche Pflichtangaben aus der öffentlich zugänglichen Impressumsseite final verifizieren und ergänzen.</p>
          <a href={restaurant.legalNoticeSource} target="_blank" rel="noreferrer" className="button-secondary">Quellseite öffnen</a>
        </div>
      </div>
    </main>
  );
}
