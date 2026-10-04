import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo/metadata';
import { solutions } from '@/content/solutions';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/platform',
    '/solutions',
    ...solutions.map((s) => `/solutions/${s.id}`),
    '/who-we-serve',
    '/technology',
    '/resources',
    '/company',
    '/contact',
    '/accessibility',
  ].map((path) => ({
    url: new URL(path || '/', siteUrl).toString(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
