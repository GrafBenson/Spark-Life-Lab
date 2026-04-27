import type { ReactNode } from "react";
import { ButtonLink } from "@/components/button-link";
import { FogCanvas } from "@/components/motion/fog-canvas";

export type PageHeroVariant =
  | "clarity"
  | "lab"
  | "story"
  | "library"
  | "contact";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  cta?: {
    href: string;
    label: string;
  };
  secondary?: ReactNode;
  variant?: PageHeroVariant;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  cta,
  secondary,
  variant,
  aside,
}: PageHeroProps) {
  const variantAttr = variant ? { "data-variant": variant } : {};

  return (
    <section className="page-hero" {...variantAttr}>
      {variant === "clarity" ? <FogCanvas /> : null}
      <div className="page-hero-inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-intro">{intro}</p>
          {cta || secondary ? (
            <div className="hero-actions">
              {cta ? <ButtonLink href={cta.href}>{cta.label}</ButtonLink> : null}
              {secondary}
            </div>
          ) : null}
        </div>
        {variant === "story" ? (
          <div className="story-portrait" aria-hidden="true">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
