import { PageIntro } from '@/components/ui/PageIntro';
import { FinalCTA } from '@/components/home/FinalCTA';
import { pageMetadata } from '@/lib/seo/metadata';
export const metadata = pageMetadata(
  'About iLocal',
  'iLocal connects the technology, pharmacy workflows and patient experiences behind modern fulfillment.',
  '/company',
);
export default function CompanyPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro
        label="About iLocal"
        title={
          <>
            Every path begins
            <br />
            <em>with a connection.</em>
          </>
        }
        description="iLocal brings together the technology, workflows, hardware and patient experiences involved in getting medication from the pharmacy into a patient’s hands."
      />
      <section className="company-statement section-space surface-muted">
        <div className="wrap">
          <p className="eyebrow">The Pharmacy-to-Patient Platform</p>
          <h2>
            Beyond a single product.
            <br />
            <em>A connected experience.</em>
          </h2>
          <p>
            From the self-service kiosk to a personal handoff at the counter, at the curb or at the
            bedside, iLocal connects pharmacy fulfillment. Courier and Mail Order extend that
            relationship beyond a physical visit.
          </p>
          <p>
            One platform brings the digital preparation, pharmacy workflow and physical handoff into
            the same story.
          </p>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
