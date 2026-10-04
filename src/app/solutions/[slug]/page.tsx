import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { solutions } from '@/content/solutions';
import { HandoffIllustration } from '@/components/ui/HandoffIllustration';
import { FinalCTA } from '@/components/home/FinalCTA';
import { pageMetadata } from '@/lib/seo/metadata';
export const dynamicParams = false;
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.id }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.id === slug);
  if (!solution) return {};
  return pageMetadata(solution.name, solution.description, `/solutions/${solution.id}`);
}
export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.id === slug);
  if (!solution) notFound();
  return (
    <main id="main" tabIndex={-1}>
      <section
        className={`solution-hero chapter-${solution.id} ${['kiosk', 'curbside', 'mail-order'].includes(solution.id) ? 'on-dark' : ''}`}
      >
        <div className="wrap">
          <Link href="/solutions" className="breadcrumb">
            ← All fulfillment experiences
          </Link>
          <div className="solution-hero-grid">
            <div>
              <p className="eyebrow">{solution.name}</p>
              <h1>{solution.headline}</h1>
              <p>{solution.description}</p>
              <Link href="/contact" className="button">
                Explore with iLocal ↗
              </Link>
            </div>
            <div>
              {solution.id === 'kiosk' ? (
                <Image
                  src="/hardware/kiosk.png"
                  alt="Authentic iLocal pharmacy pickup kiosk"
                  width={1200}
                  height={1393}
                  sizes="(max-width:700px) 80vw, 440px"
                  preload
                />
              ) : (
                <HandoffIllustration type={solution.id} />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="solution-details section-space wrap">
        <p className="eyebrow">Connected by design</p>
        <h2>
          Built into
          <br />
          <em>the handoff.</em>
        </h2>
        <ul>
          {solution.features.map((f, i) => (
            <li key={f}>
              <span>0{i + 1}</span>
              <h3>{f}</h3>
            </li>
          ))}
        </ul>
        <p className="solution-note">{solution.note}</p>
        <Link href="/platform#patient-journey" className="text-link">
          Explore the configurable patient journey ↗
        </Link>
      </section>
      <FinalCTA />
    </main>
  );
}
