import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/privacy-policy', '/maintenance'],
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
