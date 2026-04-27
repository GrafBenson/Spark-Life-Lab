import { ButtonLink } from "@/components/button-link";

type CtaBandProps = {
  title: string;
  text: string;
  href: string;
  label: string;
};

export function CtaBand({ title, text, href, label }: CtaBandProps) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">A gentle next step</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <ButtonLink href={href}>{label}</ButtonLink>
    </section>
  );
}
