import { ProductInterfaceFrame } from '@/components/ui/ProductInterfaceFrame';
import { PageIntro } from '@/components/ui/PageIntro';
import { HardwareConfigurator } from '@/components/home/HardwareConfigurator';
import { CloudExperience } from '@/components/home/CloudExperience';
import { Trust } from '@/components/home/Trust';
import { FinalCTA } from '@/components/home/FinalCTA';
import { pageMetadata } from '@/lib/seo/metadata';
export const metadata = pageMetadata(
  'Technology & Hardware',
  'Explore authentic modular iLocal hardware, Cloud visibility and the controls behind connected pharmacy fulfillment.',
  '/technology',
);
export default function TechnologyPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro
        label="Technology"
        title={
          <>
            The physical. The digital.
            <br />
            <em>Working together.</em>
          </>
        }
        description="Connect modular hardware, patient experiences and pharmacy workflows through one platform."
      />
      <HardwareConfigurator />
      <CloudExperience />
      <Trust />
      <ProductInterfaceFrame />
      <FinalCTA />
    </main>
  );
}
