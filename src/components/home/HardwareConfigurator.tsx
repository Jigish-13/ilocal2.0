'use client';
import Image from 'next/image';
import { useState } from 'react';
import { hardware, type HardwareId } from '@/content/hardware';
import { hardwareCapabilities } from '@/content/platform-visuals';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SiteLayoutIllustration } from '@/components/ui/SiteLayoutIllustration';
export function HardwareConfigurator() {
  const [selected, setSelected] = useState<HardwareId[]>(['main']);
  const [focus, setFocus] = useState<HardwareId>('main');
  function toggle(id: HardwareId) {
    setFocus(id);
    if (id !== 'main')
      setSelected((s) => (s.includes(id) ? s.filter((v) => v !== id) : [...s, id]));
  }
  return (
    <section
      id="hardware"
      className="hardware section-space editorial-section"
      aria-labelledby="hardware-title"
    >
      <div className="wrap">
        <SectionLabel number="07">Hardware, as part of the platform</SectionLabel>
        <div className="section-heading">
          <h2 id="hardware-title">
            Modular by design.
            <br />
            <em>Configured to the site.</em>
          </h2>
          <p>
            One main unit. A configuration shaped around your pharmacy. Explore authentic hardware
            as one part of the connected iLocal platform.
          </p>
        </div>
        <div className="hardware-showroom">
          <div className="showroom-label">
            <span>iLocal / modular hardware</span>
            <span>Illustrative configuration</span>
          </div>
          <div className="hardware-stage" data-count={selected.length}>
            {hardware
              .filter((h) => selected.includes(h.id))
              .map((h) => (
                <figure key={h.id}>
                  <Image
                    src={h.image}
                    width={1200}
                    height={1200}
                    sizes="(max-width:700px) 45vw, 320px"
                    alt={`Authentic iLocal ${h.name.toLowerCase()} hardware`}
                  />
                  <figcaption>{h.name}</figcaption>
                </figure>
              ))}
          </div>
          <div className="hardware-controls" aria-label="Explore a hardware configuration">
            {hardware.map((h, i) => (
              <button
                key={h.id}
                aria-pressed={selected.includes(h.id)}
                onClick={() => toggle(h.id)}
              >
                <span>{i === 0 ? '01' : selected.includes(h.id) ? '−' : '+'}</span>
                {h.name}
                <small>{i === 0 ? 'Included' : 'Optional module'}</small>
              </button>
            ))}
          </div>
        </div>
        <div className="hardware-detail" aria-live="polite">
          <p>{hardware.find((h) => h.id === focus)?.description}</p>
          <span>
            {selected.length === 1
              ? 'Main Unit selected'
              : `Main Unit + ${selected.length - 1} optional ${selected.length === 2 ? 'module' : 'modules'}`}
          </span>
        </div>
        <p className="hardware-note">
          Illustrative configuration. Modules are shown individually, not to scale. Final layout,
          compatibility and availability are confirmed with iLocal.
        </p>
        <div className="hardware-capabilities">
          {hardwareCapabilities.map((item, i) => (
            <div key={item.title}>
              <span>0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="installation-story" id="installation">
          <div
            className="installation-planning"
            role="group"
            aria-label="Site planning considers staff access, hardware placement and patient access"
          >
            <span className="eyebrow">A place for every handoff</span>
            <SiteLayoutIllustration />
            <p>Placement · access · workflow</p>
          </div>
          <div>
            <p className="eyebrow">Installation flexibility</p>
            <h3>
              Plan for both sides
              <br />
              <em>of the handoff.</em>
            </h3>
            <p>
              Connect pharmacy operations to the patient pickup experience. Talk with iLocal about
              the layout, staff access and requirements of your site.
            </p>
            <p className="installation-review">
              Through-wall installation details are pending confirmation. Current availability and
              site compatibility must be reviewed with iLocal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
