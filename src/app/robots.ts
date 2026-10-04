import type { MetadataRoute } from 'next';
import { siteUrl, isPublicSite } from '@/lib/seo/metadata';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(isPublicSite
        ? { allow: '/', disallow: ['/api/', '/customer-login', '/privacy', '/terms'] }
        : { disallow: '/' }),
    },
    sitemap: new URL('/sitemap.xml', siteUrl).toString(),
  };
}
