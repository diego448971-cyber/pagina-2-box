import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { getSiteUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl(siteConfig.seo.siteUrl);

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
