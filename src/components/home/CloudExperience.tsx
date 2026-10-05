'use client';
import Image from 'next/image';
import { useState, type KeyboardEvent } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { cloudViews, configuredSteps, fulfillmentExamples } from '@/content/platform-visuals';
export function CloudExperience() {
  const [active, setActive] = useState(0);
  function keys(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const n =
      e.key === 'ArrowRight' || e.key === 'ArrowDown'
        ? (i + 1) % 3
        : e.key === 'ArrowLeft' || e.key === 'ArrowUp'
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
    <section
      className="cloud section-space editorial-section"
      id="cloud"
      aria-labelledby="cloud-title"
    >
      <div className="wrap">
        <SectionLabel number="06">iLocal Cloud</SectionLabel>
        <div className="section-heading">
          <h2 id="cloud-title">
            The whole picture.
            <br />
            <em>One place to see it.</em>
          </h2>
          <p>
            A connected view for the people behind every handoff. Follow fulfillment, see supported
            hardware signals and configure the patient experience.
          </p>
        </div>
        <div className="cloud-layout">
          <div className="cloud-tabs" role="tablist" aria-label="iLocal Cloud views">
            {cloudViews.map((view, i) => (
              <div className="cloud-tab-item" role="presentation" key={view.name}>
                <button
                  role="tab"
                  id={`cloud-tab-${i}`}
                  aria-label={view.name}
                  aria-describedby={`cloud-description-${i}`}
                  aria-selected={active === i}
                  aria-controls={`cloud-panel-${i}`}
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => keys(e, i)}
                >
                  <span className="cloud-tab-number" data-number={`0${i + 1}`} aria-hidden="true" />
                  <span>
                    <strong>{view.name}</strong>
                  </span>
                  <span className="cloud-tab-arrow" aria-hidden="true" />
                </button>
                <p
                  id={`cloud-description-${i}`}
                  className="cloud-tab-description"
                  hidden={active !== i}
                >
                  {view.description}
                </p>
              </div>
            ))}
          </div>
          <div className="cloud-shell">
            <div className="cloud-toolbar">
              <span className="cloud-canvas-brand">
                iLocal <em>Cloud</em>
              </span>
              <span className="illustrative-label">Illustrative interface</span>
            </div>
            <div className="console-body">
              <div className="console-content">
                {cloudViews.map((view, i) => (
                  <div
                    key={view.name}
                    role="tabpanel"
                    id={`cloud-panel-${i}`}
                    aria-labelledby={`cloud-tab-${i}`}
                    hidden={active !== i}
                    className="cloud-panel"
                  >
                    <div className="console-context">
                      <span>
                        PLATFORM / {i === 0 ? 'FULFILLMENT' : i === 1 ? 'HARDWARE' : 'WORKFLOWS'}
                      </span>
                      <span>Example workspace</span>
                    </div>
                    <div className="cloud-panel-heading">
                      <h3>
                        {i === 0
                          ? 'Every handoff, in view.'
                          : i === 1
                            ? 'Your hardware, connected.'
                            : 'Configured for your pharmacy.'}
                      </h3>
                      <span>Sample configuration</span>
                    </div>
                    {i === 0 ? (
                      <>
                        <div className="console-summary">
                          <div>
                            <small>Readiness</small>
                            <strong>Assign → Verify</strong>
                          </div>
                          <div>
                            <small>Custody</small>
                            <strong>Stock → Hand off</strong>
                          </div>
                          <div>
                            <small>Reconciliation</small>
                            <strong>Complete → Review</strong>
                          </div>
                        </div>
                        <div className="fulfillment-ledger">
                          <div className="ledger-heading" aria-hidden="true">
                            <span>Path</span>
                            <span>Location</span>
                            <span>Status</span>
                          </div>
                          {fulfillmentExamples.map((row) => (
                            <div className="ledger-row" key={row.path}>
                              <strong>
                                {row.path}
                                <small>{row.detail}</small>
                              </strong>
                              <span>{row.location}</span>
                              <span
                                className={`state-pill state-${row.status.toLowerCase().replaceAll(' ', '-')}`}
                              >
                                {row.status}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="console-note">
                          <span className="signal-dot" />
                          Exceptions stay connected to the order’s workflow and custody history.
                        </div>
                      </>
                    ) : i === 1 ? (
                      <>
                        <div className="device-overview">
                          <figure className="cloud-hardware-visual">
                            <span className="eyebrow">Main pickup unit</span>
                            <div className="cloud-hardware-images">
                              <Image
                                src="/hardware/main.png"
                                alt="Authentic iLocal main pickup unit"
                                width={1200}
                                height={1200}
                                sizes="(max-width:700px) 45vw, 260px"
                              />
                              <Image
                                src="/hardware/expansion.png"
                                alt="Authentic iLocal expansion module"
                                width={1200}
                                height={1200}
                                sizes="(max-width:700px) 35vw, 190px"
                              />
                            </div>
                            <figcaption>Authentic hardware · illustrative arrangement</figcaption>
                          </figure>
                          <div className="device-signals">
                            <div>
                              <small>Device connection</small>
                              <strong>Connected</strong>
                            </div>
                            <div>
                              <small>Modules</small>
                              <strong>Main + expansion</strong>
                            </div>
                            <div>
                              <small>Hardware signals</small>
                              <strong>Doors · scanner · display</strong>
                            </div>
                          </div>
                        </div>
                        <div className="temperature-visual">
                          <div>
                            <strong>Refrigerated storage</strong>
                            <span>Temperature visibility where supported</span>
                          </div>
                          <svg
                            viewBox="0 0 600 80"
                            preserveAspectRatio="none"
                            role="img"
                            aria-label="Illustrative temperature trend with no actual readings"
                          >
                            <rect y="20" width="600" height="40" fill="var(--mint)" />
                            <path
                              d="M0 43 C60 32 80 54 140 41 S210 34 280 43 S370 33 440 41 S530 49 600 38"
                              fill="none"
                              stroke="var(--teal)"
                              strokeWidth="3"
                            />
                          </svg>
                          <small>Example trend · no live readings</small>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="config-preview">
                          <div>
                            <span className="eyebrow">Patient preparation</span>
                            <h4>
                              Your steps.
                              <br />
                              <em>Your workflow.</em>
                            </h4>
                            <p>
                              Choose steps by location and fulfillment method. Availability depends
                              on the pharmacy’s configuration.
                            </p>
                            <div className="workflow-path-preview">
                              <span>Notify</span>
                              <i>→</i>
                              <span>Prepare</span>
                              <i>→</i>
                              <span>Hand off</span>
                            </div>
                          </div>
                          <ul>
                            {configuredSteps.map((step, j) => (
                              <li key={step}>
                                <span>{step}</span>
                                <span className="config-value">
                                  {j === 4 ? 'When configured' : 'Configured'}
                                  <b aria-hidden="true">✓</b>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="console-note">
                          Illustrative settings · changes are managed in the product, not on this
                          website.
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="cloud-footnote">
          Conceptual views show platform capabilities, not live data or a replica of the production
          application. No patient or prescription information is shown.
        </p>
      </div>
    </section>
  );
}
