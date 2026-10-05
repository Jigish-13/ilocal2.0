import { ProductInterfaceFrame } from '@/components/ui/ProductInterfaceFrame';
import { PageIntro } from '@/components/ui/PageIntro';
import { PlatformJourney } from '@/components/home/PlatformJourney';
import { PharmacyWorkflow } from '@/components/home/PharmacyWorkflow';
import { CloudExperience } from '@/components/home/CloudExperience';
import { PatientJourney } from '@/components/home/PatientJourney';
import { FinalCTA } from '@/components/home/FinalCTA';
import { homepage } from '@/content/homepage';
import { pageMetadata } from '@/lib/seo/metadata';
export const metadata = pageMetadata('The iLocal Platform', homepage.description, '/platform');
export default function PlatformPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro
        label="The iLocal Platform"
        title={
          <>
            The connection between
            <br />
            <em>pharmacy and patient.</em>
          </>
        }
        description={homepage.description}
      />
      <PlatformJourney />
      <PharmacyWorkflow />
      <CloudExperience />
      <PatientJourney />
      <ProductInterfaceFrame />
      <FinalCTA />
    </main>
  );
}
