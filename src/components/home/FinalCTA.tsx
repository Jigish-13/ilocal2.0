import { homepage } from '@/content/homepage';
import { DemoForm } from '@/components/ui/DemoForm';
export function FinalCTA() {
  return (
    <section id="demo" className="final-cta section-space" aria-labelledby="cta-title">
      <div className="wrap cta-grid">
        <div className="cta-copy">
          <p className="eyebrow">Let’s connect</p>
          <h2 id="cta-title">
            Bring your pharmacy <em>closer</em> to every patient.
          </h2>
          <p>{homepage.cta.description}</p>
          <div className="cta-route" aria-hidden="true">
            <span>Pharmacy</span>
            <i />
            <b>iLocal</b>
            <i />
            <span>Patient</span>
          </div>
        </div>
        <DemoForm />
      </div>
    </section>
  );
}
