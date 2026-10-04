import { PharmacyWorkflow } from '@/components/home/PharmacyWorkflow';
import { CloudExperience } from '@/components/home/CloudExperience';
import { HardwareConfigurator } from '@/components/home/HardwareConfigurator';
import { AudienceAccordion } from '@/components/home/AudienceAccordion';
import { UseCases } from '@/components/home/UseCases';
import { Trust } from '@/components/home/Trust';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Hero } from '@/components/home/Hero';
import { Opportunity } from '@/components/home/Opportunity';
import { PlatformJourney } from '@/components/home/PlatformJourney';
import { FulfillmentChapters } from '@/components/home/FulfillmentChapters';
import { PatientJourney } from '@/components/home/PatientJourney';
export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Opportunity />
      <PlatformJourney />
      <FulfillmentChapters />
      <PatientJourney />
      <PharmacyWorkflow />
      <CloudExperience />
      <HardwareConfigurator />
      <AudienceAccordion />
      <UseCases />
      <Trust />
      <FinalCTA />
    </main>
  );
}
