import Link from "next/link";

import { footerNavGroups, restaurant } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[rgba(255,244,234,0.08)] bg-[color:var(--color-night)] text-[rgba(255,244,234,0.88)]">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[rgba(255,244,234,0.62)]">Banthai Heim- & Partyservice</p>
          <p className="mt-3 text-sm leading-7 text-[rgba(255,244,234,0.78)]">{restaurant.cuisine}</p>
          <p className="mt-4 text-sm leading-7 text-[rgba(255,244,234,0.78)]">{restaurant.address.street}, {restaurant.address.postalCode} {restaurant.address.city}</p>
          <a className="mt-3 inline-block text-lg font-semibold" href={`tel:${restaurant.phones[0].href}`}>{restaurant.phones[0].label}</a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[rgba(255,244,234,0.62)]">Öffnungszeiten</p>
          <p className="mt-3 text-sm leading-7 text-[rgba(255,244,234,0.78)]">{restaurant.hours.restaurant}</p>
          <p className="mt-3 text-sm leading-7 text-[rgba(255,244,234,0.78)]">Mittagsmenüzeiten: {restaurant.hours.lunch}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {footerNavGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs uppercase tracking-[0.22em] text-[rgba(255,244,234,0.62)]">{group.title}</p>
              <nav className="mt-3 grid gap-2">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-[rgba(255,244,234,0.8)] hover:text-white">{link.label}</Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
