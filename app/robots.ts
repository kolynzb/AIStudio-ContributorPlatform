import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/privacy-policy", "/maintenance"],
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
