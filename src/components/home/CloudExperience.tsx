'use client';
import { useState, type KeyboardEvent } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
const views = ['Fulfillment Visibility', 'Devices & Hardware', 'Workflow Configuration'];
export function CloudExperience() {
  const [active, setActive] = useState(0);
  function keys(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const n =
      e.key === 'ArrowRight'
        ? (i + 1) % 3
        : e.key === 'ArrowLeft'
          ? (i + 2) % 3
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? 2
              : -1;
    if (n >= 0) {
      e.preventDefault();
      setActive(n);
      document.getElementById(`cloud-tab-${n}`)?.focus();
    }
  }
  return (
    <section className="cloud section-space" id="cloud" aria-labelledby="cloud-title">
      <div className="wrap">
        <SectionLabel number="06">iLocal Cloud</SectionLabel>
        <div className="section-heading">
          <h2 id="cloud-title">
            The whole picture.
            <br />
            <em>One place to see it.</em>
          </h2>
          <p>
            Connect fulfillment visibility, hardware oversight and workflow configuration in iLocal
            Cloud.
          </p>
        </div>
        <div className="cloud-shell">
          <div className="cloud-toolbar">
            <span className="cloud-wordmark">
              iLocal <b>Cloud</b>
            </span>
            <span className="illustrative-label">Illustrative interface</span>
          </div>
          <div className="cloud-tabs" role="tablist" aria-label="iLocal Cloud views">
            {views.map((name, i) => (
              <button
                key={name}
                role="tab"
                id={`cloud-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`cloud-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => keys(e, i)}
              >
                {name}
              </button>
            ))}
          </div>
          {views.map((name, i) => (
            <div
              key={name}
              role="tabpanel"
              id={`cloud-panel-${i}`}
              aria-labelledby={`cloud-tab-${i}`}
              hidden={active !== i}
              tabIndex={0}
              className="cloud-panel"
            >
              {i === 0 ? (
                <>
                  <div className="cloud-panel-heading">
                    <h3>Every handoff, in view.</h3>
                    <span>Example fulfillment states</span>
                  </div>
                  <div className="fulfillment-board">
                    {[
                      ['Assigned', 'Counter', 'Prepared for stocking'],
                      ['Ready', 'Kiosk', 'Patient notified'],
                      ['In progress', 'Bedside', 'Runner handoff'],
                      ['Complete', 'Curbside', 'Handoff recorded'],
                    ].map(([state, path, detail]) => (
                      <div key={state}>
                        <span className="board-state">{state}</span>
                        <div className="board-order">
                          <span>{path}</span>
                          <strong>{detail}</strong>
                          <div className="abstract-lines" aria-hidden="true">
                            <i />
                            <i />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : i === 1 ? (
                <>
                  <div className="cloud-panel-heading">
                    <h3>Your hardware, connected.</h3>
                    <span>Example device overview</span>
                  </div>
                  <div className="device-table">
                    <div>
                      <strong>Main pickup unit</strong>
                      <span>Connected</span>
                      <small>Device status</small>
                    </div>
                    <div>
                      <strong>Expansion storage</strong>
                      <span>Available</span>
                      <small>Compartment visibility</small>
                    </div>
                    <div>
                      <strong>Refrigerated storage</strong>
                      <span>Monitoring</span>
                      <small>Temperature where applicable</small>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="cloud-panel-heading">
                    <h3>Configured for your pharmacy.</h3>
                    <span>Example workflow configuration</span>
                  </div>
                  <div className="config-preview">
                    <div>
                      <strong>Patient preparation</strong>
                      <p>Choose steps by location and fulfillment method.</p>
                    </div>
                    <ul>
                      {['Identity check', 'Payment', 'Signature', 'Consultation'].map((s, j) => (
                        <li key={s}>
                          <span>{s}</span>
                          <span className="config-value">
                            {j === 3 ? 'When configured' : 'Enabled'} <b aria-hidden="true">✓</b>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <p className="cloud-footnote">
          Conceptual views show platform capabilities, not live data or a replica of the production
          application.
        </p>
      </div>
    </section>
  );
}
