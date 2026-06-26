import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { getSiteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl(siteConfig.seo.siteUrl);
  const routes = ["", "/obrigado", "/politica-de-privacidade", "/termos-de-uso", "/politica-de-reembolso"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6
  }));
}
