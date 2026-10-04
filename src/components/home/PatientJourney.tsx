'use client';
import { useEffect, useRef, useState } from 'react';
import { m } from 'motion/react';
import { useReducedMotionPreference } from '@/lib/motion/useReducedMotionPreference';
import { patientJourney } from '@/content/patient-journey';
import { SectionLabel } from '@/components/ui/SectionLabel';
export function PatientJourney() {
  const [active, setActive] = useState(0);
  const steps = useRef<(HTMLLIElement | null)[]>([]);
  const reduced = useReducedMotionPreference();
  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    function observeSteps() {
      observer?.disconnect();
      if (window.matchMedia('(max-width:700px)').matches) return;
      // IntersectionObserver percentages resolve against root width. Use viewport
      // pixels so wide desktop windows still have a real vertical activation band.
      const inset = Math.round(window.innerHeight * 0.45);
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
          }
        },
        { rootMargin: `-${inset}px 0px -${inset}px 0px`, threshold: 0 },
      );
      steps.current.forEach((el) => {
        if (el) observer?.observe(el);
      });
    }
    observeSteps();
    window.addEventListener('resize', observeSteps);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', observeSteps);
    };
  }, []);
  const step = patientJourney[active];
  return (
    <section
      className="patient-section section-space"
      id="patient-journey"
      aria-labelledby="patient-title"
    >
      <div className="wrap">
        <SectionLabel number="04">The patient experience</SectionLabel>
        <div className="section-heading">
          <h2 id="patient-title">
            One journey.
            <br />
            <em>Configured for every pharmacy.</em>
          </h2>
          <p>
            Thoughtful steps. Connected handoffs. Choose the building blocks that fit your patients,
            locations and fulfillment methods.
          </p>
        </div>
        <div className="mobile-journey-controls">
          <label htmlFor="patient-step-select">Explore the patient journey</label>
          <select
            id="patient-step-select"
            value={active}
            onChange={(e) => setActive(Number(e.target.value))}
          >
            {patientJourney.map((p, i) => (
              <option key={p.id} value={i}>
                0{i + 1} — {p.title}
              </option>
            ))}
          </select>
          <p>{step.description}</p>
        </div>
        <div className="patient-grid">
          <div className="patient-device-wrap">
            <div className="patient-device">
              <span className="device-island" />
              <div className="device-header">
                <span>iLocal</span>
                <small>YOUR PHARMACY</small>
              </div>
              <m.div
                className="device-screen"
                key={step.id}
                initial={false}
                animate={{ opacity: reduced ? 1 : [0.7, 1] }}
                transition={{ duration: reduced ? 0 : 0.3 }}
              >
                <span className="device-symbol">{step.symbol}</span>
                <small>
                  STEP {active + 1} OF {patientJourney.length}
                </small>
                <h3>{step.phoneTitle}</h3>
                <p>{step.phoneCopy}</p>
                {step.id === 'signature' && (
                  <div className="signature-line">
                    <em>Your signature</em>
                  </div>
                )}
                <div className="device-action">
                  {step.action}
                  <span>↗</span>
                </div>
              </m.div>
              <div className="device-progress" aria-hidden="true">
                {patientJourney.map((p, i) => (
                  <span key={p.id} data-active={i <= active} />
                ))}
              </div>
              <p className="device-disclaimer">Illustrative patient experience</p>
            </div>
            <p className="journey-note">
              Configured steps, not a fixed script.
              <br />
              Sequence and availability vary by pharmacy.
            </p>
          </div>
          <ol className="patient-steps">
            {patientJourney.map((s, i) => (
              <li
                key={s.id}
                ref={(el) => {
                  steps.current[i] = el;
                }}
                data-step={i}
                data-active={active === i}
              >
                <button
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  aria-describedby={`journey-description-${s.id}`}
                >
                  <span className="step-number" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span>
                    <strong>{s.title}</strong>
                  </span>
                  <span className="step-indicator" aria-hidden="true">
                    ↗
                  </span>
                </button>
                <p className="step-description" id={`journey-description-${s.id}`}>
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
