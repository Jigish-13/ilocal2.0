import Link from 'next/link';
import { homepage } from '@/content/homepage';
import { SectionLabel } from '@/components/ui/SectionLabel';
export function UseCases() {
  return (
    <section className="use-cases section-space" aria-labelledby="scenarios-title">
      <div className="wrap">
        <SectionLabel number="09">In everyday life</SectionLabel>
        <h2 id="scenarios-title">
          The connection
          <br />
          <em>makes the difference.</em>
        </h2>
        <div className="scenario-list">
          {homepage.scenarios.map((s, i) => (
            <Link href={s.href} key={s.title} className={`scenario scenario-${i}`}>
              <span className="eyebrow">{s.label}</span>
              <span className="scenario-mark" aria-hidden="true">
                {i === 0 ? '↗' : i === 1 ? '◷' : '⇄'}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="scenario-link">
                Explore the experience <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
