'use client';
import { useState } from 'react';
import Link from 'next/link';
import { audiences } from '@/content/audiences';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AudienceScene } from '@/components/ui/AudienceScene';
export function AudienceAccordion() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section
      id="who-we-serve"
      className="audience section-space editorial-section"
      aria-labelledby="audience-title"
    >
      <div className="wrap">
        <SectionLabel number="08">Who we serve</SectionLabel>
        <h2 id="audience-title">
          Different communities.
          <br />
          <em>A shared connection.</em>
        </h2>
        <div className="audience-rows">
          {audiences.map((a, i) => (
            <div className="audience-row" key={a.id}>
              <h3>
                <button
                  aria-expanded={active === i}
                  aria-controls={`audience-panel-${a.id}`}
                  id={`audience-button-${a.id}`}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <span className="audience-number">0{i + 1}</span>
                  <span className="audience-row-title">
                    {a.id === 'health-systems' ? (
                      <>
                        Health <em>Systems</em>
                      </>
                    ) : a.id === 'retail' ? (
                      <>
                        Retail <em>Pharmacy</em>
                      </>
                    ) : a.id === 'community' ? (
                      <>
                        Independent <em>&amp; Community Pharmacy</em>
                      </>
                    ) : (
                      <>
                        Employers <em>&amp; Organizations</em>
                      </>
                    )}
                  </span>
                  <span className="audience-toggle" aria-hidden="true">
                    {active === i ? '−' : '+'}
                  </span>
                </button>
              </h3>
              <div
                id={`audience-panel-${a.id}`}
                role="region"
                aria-labelledby={`audience-button-${a.id}`}
                hidden={active !== i}
                className="audience-panel"
              >
                <AudienceScene audience={a.id} />
                <div className="audience-narrative">
                  <p>{a.description}</p>
                  <ul className="audience-values">
                    {a.paths.map((v) => (
                      <li key={v}>
                        <span aria-hidden="true">↗</span>
                        {v}
                      </li>
                    ))}
                  </ul>
                  <div className="audience-paths">
                    <span className="eyebrow">Common paths</span>
                    <div>
                      {a.commonPaths.map((p) => (
                        <span key={p}>{p}</span>
                      ))}
                    </div>
                  </div>
                  <Link className="text-link" href={`/who-we-serve#${a.id}`}>
                    Explore {a.name}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
