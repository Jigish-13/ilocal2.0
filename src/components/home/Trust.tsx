import { homepage } from '@/content/homepage';
import { SectionLabel } from '@/components/ui/SectionLabel';
export function Trust() {
  return (
    <section id="trust" className="trust section-space on-dark" aria-labelledby="trust-title">
      <div className="wrap">
        <SectionLabel number="10">Enterprise readiness</SectionLabel>
        <div className="section-heading">
          <h2 id="trust-title">
            Every connection
            <br />
            carries <em>responsibility.</em>
          </h2>
          <p>Built to support the people, processes and controls behind pharmacy fulfillment.</p>
        </div>
        <div className="trust-principles">
          {homepage.trust.map((t, i) => (
            <div key={t.title}>
              <span>0{i + 1}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
