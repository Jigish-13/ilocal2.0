import { homepage } from '@/content/homepage';
import { SectionLabel } from '@/components/ui/SectionLabel';
export function Opportunity() {
  return (
    <section className="opportunity section-space" aria-labelledby="opportunity-title">
      <div className="wrap">
        <SectionLabel number="01">The opportunity</SectionLabel>
        <h2 id="opportunity-title">
          Patients no longer come to the pharmacy one way.
          <br />
          <em>They arrive by every route there is.</em>
        </h2>
        <div className="opportunity-stories">
          {homepage.opportunities.map((item, i) => (
            <article key={item.title}>
              <span className="story-number">0{i + 1}</span>
              <p className="eyebrow">{item.time}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="story-path">{item.path}</span>
            </article>
          ))}
        </div>
        <div className="opportunity-close">
          <span className="asterisk" aria-hidden="true">
            ✳
          </span>
          <p>
            The challenge is no longer just dispensing. It’s <em>coordinating everything</em>{' '}
            between the pharmacy and the patient.
          </p>
        </div>
      </div>
    </section>
  );
}
