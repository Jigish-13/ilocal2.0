import type { Metadata } from 'next';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002';
export const isPublicSite = Boolean(
  process.env.NEXT_PUBLIC_SITE_URL &&
  !/localhost|127\.0\.0\.1/.test(process.env.NEXT_PUBLIC_SITE_URL),
);
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: 'iLocal',
      title: `${title} | iLocal`,
      description,
      url: path,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'iLocal — Every path from pharmacy to patient. One connected platform.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | iLocal`,
      description,
      images: ['/opengraph-image'],
    },
  };
}
