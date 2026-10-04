'use client';
import Image from 'next/image';
import { useState } from 'react';
import { hardware, type HardwareId } from '@/content/hardware';
import { SectionLabel } from '@/components/ui/SectionLabel';
export function HardwareConfigurator() {
  const [selected, setSelected] = useState<HardwareId[]>(['main']);
  const [focus, setFocus] = useState<HardwareId>('main');
  function toggle(id: HardwareId) {
    setFocus(id);
    if (id !== 'main')
      setSelected((s) => (s.includes(id) ? s.filter((v) => v !== id) : [...s, id]));
  }
  return (
    <section id="hardware" className="hardware section-space" aria-labelledby="hardware-title">
      <div className="wrap">
        <SectionLabel number="07">Hardware, configured for you</SectionLabel>
        <div className="section-heading">
          <h2 id="hardware-title">
            Start with a connection.
            <br />
            <em>Build around your needs.</em>
          </h2>
          <p>
            Authentic iLocal hardware. A modular approach to the places, spaces and patients you
            serve.
          </p>
        </div>
        <div className="hardware-controls" aria-label="Explore a hardware configuration">
          {hardware.map((h, i) => (
            <button key={h.id} aria-pressed={selected.includes(h.id)} onClick={() => toggle(h.id)}>
              <span>{i === 0 ? '01' : selected.includes(h.id) ? '−' : '+'}</span>
              {h.name}
              <small>{i === 0 ? 'Included' : 'Optional module'}</small>
            </button>
          ))}
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
      </div>
    </section>
  );
}
