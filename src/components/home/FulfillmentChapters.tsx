import Image from 'next/image';
import Link from 'next/link';
import { solutions } from '@/content/solutions';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { HandoffIllustration } from '@/components/ui/HandoffIllustration';
export function FulfillmentChapters() {
  return (
    <section id="solutions" className="fulfillment" aria-labelledby="fulfillment-title">
      <div className="wrap fulfillment-intro section-space">
        <SectionLabel number="03">Six fulfillment experiences</SectionLabel>
        <h2 id="fulfillment-title">
          Different paths.
          <br />
          <em>The same connection.</em>
        </h2>
        <p>Built for the way patients live—and the way pharmacies work.</p>
      </div>
      {solutions.map((s, i) => (
        <article
          key={s.id}
          className={`chapter chapter-${s.id} ${['kiosk', 'curbside', 'mail-order'].includes(s.id) ? 'on-dark' : ''}`}
          id={`chapter-${s.id}`}
        >
          <div className="wrap chapter-grid">
            <div className="chapter-copy">
              <p className="eyebrow">
                <span>0{i + 1} / 06</span>
                <span className="label-rule" />
                {s.name}
              </p>
              <h3>{s.headline}</h3>
              <p className="chapter-description">{s.description}</p>
              <Link className="text-link" href={`/solutions/${s.id}`}>
                Explore {s.shortName}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="chapter-visual">
              {s.id === 'kiosk' ? (
                <>
                  <span className="kiosk-orbit" aria-hidden="true" />
                  <Image
                    src="/hardware/kiosk.png"
                    width={1200}
                    height={1393}
                    sizes="(max-width: 700px) 80vw, 420px"
                    alt="iLocal pickup kiosk with patient screen, payment terminal and secure compartments"
                  />
                  <span className="visual-caption">Authentic iLocal hardware</span>
                </>
              ) : (
                <HandoffIllustration type={s.id} />
              )}
            </div>
            <div className="chapter-foot">
              <span>{s.features[0]}</span>
              <span>{s.features[1]}</span>
              <span>{s.features[2]}</span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
