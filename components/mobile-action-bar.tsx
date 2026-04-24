import Link from "next/link";
import { restaurant } from "@/data/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 lg:hidden">
      <div className="grid grid-cols-3 gap-2 rounded-[1.35rem] border border-[color:var(--color-line)] bg-[rgba(255,249,241,0.95)] p-2 shadow-[0_18px_45px_rgba(36,22,18,0.18)] backdrop-blur-xl">
        <Link href="/bestellen" className="button-secondary w-full px-0">Menü</Link>
        <a href={`tel:${restaurant.phones[0].href}`} className="button-secondary w-full px-0">Anrufen</a>
        <a href={restaurant.sourceSystemUrl} className="button-primary w-full px-0" target="_blank" rel="noreferrer">Bestellen</a>
      </div>
    </div>
  );
}
