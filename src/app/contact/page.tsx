import { FinalCTA } from '@/components/home/FinalCTA';
import { pageMetadata } from '@/lib/seo/metadata';
export const metadata = pageMetadata(
  'Book a Demo',
  'Explore how iLocal can connect your pharmacy and patients across six fulfillment experiences.',
  '/contact',
);
export default function ContactPage() {
  return (
    <main id="main" tabIndex={-1} className="contact-page">
      <h1 className="sr-only">Book an iLocal Demo</h1>
      <FinalCTA />
    </main>
  );
}
