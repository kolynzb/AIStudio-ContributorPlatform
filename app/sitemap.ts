import { siteConfig } from "@/core/config/site"
import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  return [
    { url: baseUrl, priority: 1, lastModified: new Date() },
    {
      url: `${baseUrl}about`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: new Date(),
    },
  ]
}
