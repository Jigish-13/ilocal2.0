import { FulfillmentChapters } from '@/components/home/FulfillmentChapters';
import { PageIntro } from '@/components/ui/PageIntro';
import { FinalCTA } from '@/components/home/FinalCTA';
import { pageMetadata } from '@/lib/seo/metadata';
export const metadata = pageMetadata(
  'Five Fulfillment Experiences',
  'Explore Kiosk, Counter, Curbside, Bedside, Courier on the connected iLocal platform.',
  '/solutions',
);
export default function SolutionsPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro
        label="Five ways to fulfill"
        title={
          <>
            Meet patients
            <br />
            <em>on their terms.</em>
          </>
        }
        description="Self-service pickup, a personal handoff, or a connection from a distance. Explore the five fulfillment experiences connected by iLocal."
      />
      <FulfillmentChapters />
      <FinalCTA />
    </main>
  );
}
