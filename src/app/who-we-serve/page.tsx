import Link from 'next/link';
import { audiences } from '@/content/audiences';
import { PageIntro } from '@/components/ui/PageIntro';
import { FinalCTA } from '@/components/home/FinalCTA';
import { pageMetadata } from '@/lib/seo/metadata';
export const metadata = pageMetadata(
  'Who We Serve',
  'Connected pharmacy fulfillment for health systems, retail, community pharmacies, employers and organizations.',
  '/who-we-serve',
);
export default function AudiencesPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro
        label="Who we serve"
        title={
          <>
            Care takes many forms.
            <br />
            <em>Connection belongs in all of them.</em>
          </>
        }
        description="Connect patients to pharmacy services across healthcare, community and workplace settings."
      />
      {audiences.map((a, i) => (
        <section
          className={`audience-detail section-space ${i % 2 === 0 ? 'surface-muted' : ''}`}
          id={a.id}
          key={a.id}
        >
          <div className="wrap audience-detail-grid">
            <div>
              <p className="eyebrow">
                0{i + 1} — {a.name}
              </p>
              <h2>{a.title}</h2>
            </div>
            <div>
              <p>{a.description}</p>
              <ul>
                {a.paths.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link className="text-link" href="/contact">
                Talk about your organization ↗
              </Link>
            </div>
          </div>
        </section>
      ))}
      <FinalCTA />
    </main>
  );
}
