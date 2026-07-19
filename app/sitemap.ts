import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

const indexablePages: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/identity-lab/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/resources/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy/", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePages.map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
