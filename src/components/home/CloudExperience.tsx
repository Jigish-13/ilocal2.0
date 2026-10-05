'use client';
import Image from 'next/image';
import { useState, type KeyboardEvent } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import {
  cloudViews,
  cloudCustodySteps,
  configuredSteps,
  fulfillmentExamples,
} from '@/content/platform-visuals';
export function CloudExperience() {
  const [active, setActive] = useState(0);
  function keys(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const n =
      e.key === 'ArrowRight' || e.key === 'ArrowDown'
        ? (i + 1) % cloudViews.length
        : e.key === 'ArrowLeft' || e.key === 'ArrowUp'
          ? (i + cloudViews.length - 1) % cloudViews.length
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? cloudViews.length - 1
              : -1;
    if (n >= 0) {
      e.preventDefault();
      setActive(n);
      document.getElementById(`cloud-tab-${n}`)?.focus();
    }
  }
  return (
    <section
      className="cloud cloud-genspark section-space editorial-section"
      id="cloud"
      aria-labelledby="cloud-title"
    >
      <div className="wrap">
        <SectionLabel number="06">iLocal Cloud</SectionLabel>
        <div className="section-heading">
          <h2 id="cloud-title">
            Every site, device and <br />
            handoff. <em>One view.</em>
          </h2>
          <p>
            Browser-based management for the people who run pharmacy fulfillment—configure
            workflows, follow fulfillment, watch device health and report across locations. Nothing
            to install at the desk.
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
              <span className="console-dots" aria-hidden="true">
                ● ● ●
              </span>
              <span className="cloud-canvas-brand">cloud.ilocal / operations</span>
              <span className="illustrative-label">Illustrative interface</span>
            </div>
            <div className="console-body">
              <aside className="console-rail" aria-hidden="true">
                <strong>iL</strong>
                {cloudViews.map((view, i) => (
                  <span key={view.name} data-selected={active === i}>
                    {['↗', '✓', '▣', '≡', '≋'][i]}
                  </span>
                ))}
              </aside>
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
                    <div className="cloud-panel-heading">
                      <h3>
                        {
                          [
                            'Today across sites',
                            'From assignment to handoff',
                            'Your hardware, connected',
                            'Activity across locations',
                            'Your pharmacy’s workflow',
                          ][i]
                        }
                      </h3>
                      <span className="cloud-example-badge">Sample view</span>
                    </div>
                    {i === 0 ? (
                      <>
                        <div className="cloud-status-cards">
                          {['Ready', 'In progress', 'Exceptions'].map((status) => (
                            <div key={status}>
                              <span>{status}</span>
                              <strong>Example status</strong>
                            </div>
                          ))}
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
                      <ol className="cloud-custody">
                        {cloudCustodySteps.map(([title, description], index) => (
                          <li key={title}>
                            <span aria-hidden="true">0{index + 1}</span>
                            <div>
                              <strong>{title}</strong>
                              <p>{description}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    ) : i === 2 ? (
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
                    ) : i === 3 ? (
                      <div className="cloud-reporting">
                        <p className="eyebrow">Fulfillment activity / illustrative report</p>
                        {fulfillmentExamples.map((row) => (
                          <div key={row.path}>
                            <strong>{row.path}</strong>
                            <span>{row.location}</span>
                            <span>Activity · custody · reconciliation</span>
                          </div>
                        ))}
                        <p className="console-note">
                          Example report structure. No live records or numerical metrics are shown.
                        </p>
                      </div>
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
