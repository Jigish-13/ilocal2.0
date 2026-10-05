import type { Metadata } from 'next';
import { siteUrl, isPublicSite, pageMetadata } from '@/lib/seo/metadata';
import localFont from 'next/font/local';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import '@/styles/globals.css';
import { MotionProvider } from '@/lib/motion/MotionProvider';
const sans = localFont({
  src: '../../public/fonts/instrument-sans-latin.woff2',
  variable: '--font-sans',
  display: 'swap',
  weight: '400 700',
});
const serif = localFont({
  src: '../../public/fonts/instrument-serif-italic.woff2',
  variable: '--font-serif',
  display: 'swap',
  weight: '400',
  style: 'italic',
});
export const metadata: Metadata = {
  ...pageMetadata(
    'The Pharmacy-to-Patient Platform',
    'Connect pharmacies and patients across Kiosk, Counter, Curbside, Bedside and Courier. One connected platform.',
    '/',
  ),
  metadataBase: new URL(siteUrl),
  title: { default: 'iLocal — The Pharmacy-to-Patient Platform', template: '%s | iLocal' },
  robots: { index: isPublicSite, follow: isPublicSite },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable}`}>
      {/* Extensions such as Grammarly add body attributes before hydration.
          Only tolerate mismatches on this element; descendants remain checked. */}
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'iLocal',
                url: siteUrl,
                logo: new URL('/brand/ilocal-logo.png', siteUrl).toString(),
                description: 'The Pharmacy-to-Patient Platform',
              }).replace(/</g, '\\u003c'),
            }}
          />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
