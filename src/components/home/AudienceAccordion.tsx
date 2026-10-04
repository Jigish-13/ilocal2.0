'use client';
import { useState } from 'react';
import Link from 'next/link';
import { audiences } from '@/content/audiences';
import { SectionLabel } from '@/components/ui/SectionLabel';
export function AudienceAccordion() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="who-we-serve" className="audience section-space" aria-labelledby="audience-title">
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
                  <span>{a.name}</span>
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
                <div>
                  <p>{a.description}</p>
                  <Link className="text-link" href={`/who-we-serve#${a.id}`}>
                    Explore {a.name} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
                <div className="audience-context" aria-label={a.visual.join(' connects to ')}>
                  {a.visual.map((v, j) => (
                    <div key={v}>
                      <span className="context-node" aria-hidden="true">
                        {j === 1 ? '✳' : j === 0 ? '⌂' : '◎'}
                      </span>
                      <span>{v}</span>
                      {j < 2 && <i aria-hidden="true">→</i>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
