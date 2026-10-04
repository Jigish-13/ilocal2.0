'use client';
import { useRef, useState } from 'react';
import { m, useScroll, useMotionValueEvent } from 'motion/react';
import { useReducedMotionPreference } from '@/lib/motion/useReducedMotionPreference';
import { solutions, type SolutionId } from '@/content/solutions';
import { SectionLabel } from '@/components/ui/SectionLabel';
const stages = [
  'It starts in your pharmacy.',
  'iLocal becomes the connecting layer.',
  'One platform. Six ways to fulfill.',
  'Every route ends with the patient.',
];
export function PlatformJourney() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<SolutionId>('kiosk');
  const [stage, setStage] = useState(0);
  const reduced = useReducedMotionPreference();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => setStage(Math.min(3, Math.floor(v * 4))));
  const selected = solutions.find((s) => s.id === active)!;
  return (
    <section
      className="platform-section on-dark"
      id="platform"
      ref={ref}
      aria-labelledby="platform-title"
    >
      <div className="wrap platform-inner">
        <SectionLabel number="02">The connecting layer</SectionLabel>
        <div className="platform-heading">
          <h2 id="platform-title">
            One platform.
            <br />
            <em>Every path to the patient.</em>
          </h2>
          <p>
            From the systems in your pharmacy to the moment medication changes hands. iLocal
            connects the journey.
          </p>
        </div>
        <ol className="platform-stages">
          {stages.map((text, i) => (
            <li key={text} data-active={stage === i}>
              <span>0{i + 1}</span>
              {text}
            </li>
          ))}
        </ol>
        <div className="route-diagram">
          <svg
            className="route-svg"
            viewBox="0 0 1120 440"
            role="img"
            aria-label={`Pharmacy connects through iLocal to six fulfillment methods and then to the patient. Highlighted: ${selected.name}.`}
          >
            <path className="route-trunk" d="M90 220 H310" />
            <circle cx="90" cy="220" r="7" fill="#f5c449" />
            <text x="90" y="258" textAnchor="middle">
              PHARMACY
            </text>
            <circle cx="345" cy="220" r="51" fill="#183471" stroke="#6582be" />
            <text className="route-brand" x="345" y="227" textAnchor="middle">
              iLocal
            </text>
            {solutions.map((s, i) => {
              const y = 45 + i * 70;
              const d = `M396 220 C485 220 490 ${y} 580 ${y} H710 C870 ${y} 875 220 1005 220`;
              return (
                <g
                  key={s.id}
                  onPointerEnter={() => setActive(s.id)}
                  onClick={() => setActive(s.id)}
                >
                  <path d={d} stroke="#536583" strokeWidth="1" opacity=".25" fill="none" />
                  <path d={d} stroke="transparent" strokeWidth="24" fill="none" />
                  <m.path
                    d={d}
                    fill="none"
                    stroke={s.id === active ? s.color : '#536583'}
                    strokeWidth={s.id === active ? 2.5 : 1}
                    initial={false}
                    animate={{
                      pathLength: stage >= 2 || reduced ? 1 : 0.65,
                      opacity: s.id === active ? 1 : 0.4,
                    }}
                    transition={{ duration: reduced ? 0 : 0.6 }}
                  />
                  <circle cx="650" cy={y} r="5" fill={s.id === active ? '#f5c449' : '#8997ad'} />
                  <rect x="587" y={y - 28} width="135" height="20" fill="#07163c" />
                  <text
                    x="650"
                    y={y - 14}
                    textAnchor="middle"
                    fill={s.id === active ? '#ffffff' : '#bcc8da'}
                  >
                    {s.shortName.toUpperCase()}
                  </text>
                </g>
              );
            })}
            <circle cx="1005" cy="220" r="7" fill="#f5c449" />
            <text x="1005" y="258" textAnchor="middle">
              PATIENT
            </text>
          </svg>
          <div className="mobile-route-endpoints" aria-hidden="true">
            <span>Pharmacy</span>
            <i>↓</i>
            <strong>iLocal</strong>
            <i>↓</i>
          </div>
          <div className="route-controls" aria-label="Highlight a fulfillment route">
            {solutions.map((s) => (
              <button
                key={s.id}
                aria-pressed={active === s.id}
                onFocus={() => setActive(s.id)}
                onClick={() => setActive(s.id)}
                onPointerEnter={() => setActive(s.id)}
              >
                <span style={{ background: s.color }} />
                {s.shortName}
              </button>
            ))}
          </div>
          <div className="mobile-route-endpoints route-patient" aria-hidden="true">
            <i>↓</i>
            <span>Patient</span>
          </div>
        </div>
        <div className="route-caption" aria-live="polite">
          <span className="eyebrow">{selected.name}</span>
          <p>{selected.headline}</p>
          <a className="text-link" href={`/solutions/${selected.id}`}>
            Explore this path <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
