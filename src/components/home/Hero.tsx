import Image from 'next/image';
import Link from 'next/link';
import { homepage } from '@/content/homepage';
import { solutions } from '@/content/solutions';
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-kicker">
          <p className="eyebrow">
            <span className="brand-dot" />
            {homepage.eyebrow}
          </p>
        </div>
        <h1 id="hero-title">
          Every path from
          <br />
          <em>pharmacy</em> to <span className="hero-patient">patient.</span>
          <br />
          <span className="hero-last">One connected platform.</span>
        </h1>
        <div className="hero-bottom">
          <div className="hero-copy">
            <p>{homepage.description}</p>
            <div className="button-row">
              <Link href="/contact" className="button">
                Book a Demo <span aria-hidden="true">↗</span>
              </Link>
              <Link href="#platform" className="text-link">
                Explore the Platform <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit" aria-hidden="true" />
            <div className="hero-hardware">
              <Image
                src="/hardware/kiosk.png"
                alt="Authentic iLocal self-service pharmacy pickup kiosk"
                width={1200}
                height={1393}
                sizes="(max-width: 700px) 60vw, 340px"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="hero-phone" aria-hidden="true">
              <span className="phone-speaker" />
              <span className="mini-brand">iLocal</span>
              <div className="phone-check">✓</div>
              <strong>
                Your pharmacy.
                <br />
                Ready for you.
              </strong>
              <span className="phone-pill">View pickup steps ↗</span>
              <small>Illustrative experience</small>
            </div>
            <div className="hero-route">
              <span>Pharmacy</span>
              <i />
              <b>iLocal</b>
              <i />
              <span>Patient</span>
            </div>
          </div>
        </div>
        <div className="hero-paths">
          <span className="eyebrow">Five ways. One connection.</span>
          <div>
            {solutions.map((s) => (
              <Link key={s.id} href={`/solutions/${s.id}`}>
                <span className={`route-dot dot-${s.id}`} />
                {s.shortName}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
