import { site } from "@/data/site";

type BreadcrumbJsonLdProps = {
  page: string;
  href: string;
};

export function BreadcrumbJsonLd({ page, href }: BreadcrumbJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "SparkLifeLab",
        item: `${site.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page,
        item: `${site.url}${href}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
