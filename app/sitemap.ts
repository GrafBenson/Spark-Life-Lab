import type { MetadataRoute } from "next";
import { legalItems, navItems, site } from "@/data/site";

export const dynamic = "force-static";

const pagePriority: Record<string, { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = {
  "/": { priority: 1.0, changeFrequency: "monthly" },
  "/clarity-check/": { priority: 0.9, changeFrequency: "monthly" },
  "/identity-lab/": { priority: 0.9, changeFrequency: "monthly" },
  "/about/": { priority: 0.7, changeFrequency: "yearly" },
  "/resources/": { priority: 0.7, changeFrequency: "monthly" },
  "/contact/": { priority: 0.6, changeFrequency: "yearly" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...navItems, ...legalItems].filter(
    (item, index, all) => all.findIndex((match) => match.href === item.href) === index
  );

  return pages.map((page) => {
    const config = pagePriority[page.href] ?? { priority: 0.3, changeFrequency: "yearly" as const };
    return {
      url: `${site.url}${page.href === "/" ? "/" : page.href}`,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    };
  });
}
