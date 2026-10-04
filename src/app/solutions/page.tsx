import { FulfillmentChapters } from '@/components/home/FulfillmentChapters';
import { PageIntro } from '@/components/ui/PageIntro';
import { FinalCTA } from '@/components/home/FinalCTA';
import { pageMetadata } from '@/lib/seo/metadata';
export const metadata = pageMetadata(
  'Six Fulfillment Experiences',
  'Explore Kiosk, Counter, Curbside, Bedside, Courier and Mail Order on the connected iLocal platform.',
  '/solutions',
);
export default function SolutionsPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro
        label="Six ways to fulfill"
        title={
          <>
            Meet patients
            <br />
            <em>on their terms.</em>
          </>
        }
        description="Self-service pickup, a personal handoff, or a connection from a distance. Explore the six fulfillment experiences connected by iLocal."
      />
      <FulfillmentChapters />
      <FinalCTA />
    </main>
  );
}
