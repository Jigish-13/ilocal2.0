import { SectionLabel } from '@/components/ui/SectionLabel';
import { workflow } from '@/content/workflow';
import { solutions } from '@/content/solutions';
import { pharmacySystems, platformCapabilities } from '@/content/platform-visuals';
export function PharmacyWorkflow() {
  return (
    <section
      className="workflow section-space editorial-section"
      id="workflow"
      aria-labelledby="workflow-title"
    >
      <div className="wrap workflow-grid">
        <div className="workflow-story">
          <SectionLabel number="05">The pharmacy workflow</SectionLabel>
          <h2 id="workflow-title">
            Built around your pharmacy—
            <br />
            <em>not the other way around.</em>
          </h2>
          <p className="workflow-intro">
            iLocal works alongside the systems and routines your team already trusts, connecting
            daily operations to every patient fulfillment experience.
          </p>
          <ol className="workflow-steps">
            {workflow.map((s, i) => (
              <li key={s.title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div
          className="integration-stack"
          role="group"
          aria-label="Existing pharmacy systems connect through integration options or standalone workflows to iLocal and patient fulfillment"
        >
          <div className="integration-tier pharmacy-tier">
            <span className="eyebrow">Your pharmacy</span>
            <h3>Existing pharmacy systems</h3>
            <div className="integration-tags">
              {pharmacySystems.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="stack-connection">
            <span>Integration options</span>
            <i aria-hidden="true" />
            <span>or standalone</span>
          </div>
          <div className="integration-tier integration-core">
            <span className="eyebrow">iLocal Platform</span>
            <h3>The connecting layer</h3>
            <div className="integration-tags">
              {platformCapabilities.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="stack-connection">
            <span>Connected handoffs</span>
            <i aria-hidden="true" />
            <span>Status & custody</span>
          </div>
          <div className="integration-tier patient-tier">
            <span className="eyebrow">Patient fulfillment</span>
            <h3>Every path. One connection.</h3>
            <div className="integration-tags">
              {solutions.map((s) => (
                <span key={s.id}>{s.shortName}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
