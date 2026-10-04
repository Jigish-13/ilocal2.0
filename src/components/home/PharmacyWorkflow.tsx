import { SectionLabel } from '@/components/ui/SectionLabel';
import { workflow } from '@/content/workflow';
export function PharmacyWorkflow() {
  return (
    <section className="workflow section-space" id="workflow" aria-labelledby="workflow-title">
      <div className="wrap">
        <SectionLabel number="05">The pharmacy workflow</SectionLabel>
        <div className="workflow-grid">
          <div>
            <h2 id="workflow-title">
              Built around
              <br />
              <em>your pharmacy—</em>
              <br />
              not the other way around.
            </h2>
            <p className="workflow-intro">
              iLocal works alongside existing pharmacy systems, connecting daily operations to every
              patient fulfillment experience.
            </p>
          </div>
          <div className="integration-stack">
            <div>
              <span className="eyebrow">Where work begins</span>
              <strong>Existing Pharmacy Systems</strong>
            </div>
            <span aria-hidden="true">↓</span>
            <div className="integration-core">
              <span>iLocal</span>
              <p>The connecting platform</p>
            </div>
            <span aria-hidden="true">↓</span>
            <div>
              <span className="eyebrow">Where it comes together</span>
              <strong>Patient Fulfillment Experiences</strong>
              <small>Kiosk · Counter · Curbside · Bedside · Courier · Mail Order</small>
            </div>
          </div>
        </div>
        <ol className="workflow-steps">
          {workflow.map((s, i) => (
            <li key={s.title}>
              <span>
                0{i + 1}
                <b aria-hidden="true">{i < 3 ? '↗' : '✓'}</b>
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
