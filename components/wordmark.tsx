import Link from "next/link";

import { brand } from "@/data/site";

type WordmarkProps = {
  size?: "sm" | "md" | "lg";
  href?: string | null;
  className?: string;
  tone?: "light" | "dark";
};

const sizeMap: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "text-[1.1rem]",
  md: "text-[1.35rem]",
  lg: "text-[1.6rem]",
};

/**
 * "SPARK LifeLab" wordmark — serif weight, with a small orange accent on
 * "SPARK". Used in the header, footer, and any print/email surface.
 */
export function Wordmark({
  size = "md",
  href = "/",
  className = "",
  tone = "light",
}: WordmarkProps) {
  // tone="dark": Paper text (warm off-white) with Ember SPARK — used in footer
  // tone="light": Deep navy text with Ember SPARK — used in header
  const inkClass =
    tone === "dark"
      ? "text-[color:var(--paper)]"
      : "text-[color:var(--deep-navy)]";

  const content = (
    <span
      className={`inline-flex items-baseline gap-[0.32em] font-[family-name:var(--font-display)] font-semibold tracking-[0.02em] ${sizeMap[size]} ${inkClass} ${className}`}
      aria-label={brand.name}
    >
      {/* Ember italic spark — fine accent per Addendum */}
      <span className="italic text-[color:var(--ember)]">SPARK</span>
      <span className="font-normal">LifeLab</span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="brand-link inline-flex">
      {content}
    </Link>
  );
}
