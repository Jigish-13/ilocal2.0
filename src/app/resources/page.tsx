import Link from 'next/link';
import { resources } from '@/content/resources';
import { PageIntro } from '@/components/ui/PageIntro';
import { pageMetadata } from '@/lib/seo/metadata';
export const metadata = pageMetadata(
  'Resources',
  'Understand connected fulfillment, configurable patient experiences and planning an iLocal implementation.',
  '/resources',
);
export default function ResourcesPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro
        label="Resources"
        title={
          <>
            A clearer view
            <br />
            <em>of connected pharmacy.</em>
          </>
        }
        description="Start with the experiences, workflows and questions that shape a pharmacy-to-patient platform."
        cta={false}
      />
      <div className="wrap resource-layout">
        <nav aria-label="Resource topics">
          {resources.map((r) => (
            <Link key={r.id} href={`#${r.id}`}>
              {r.title} ↗
            </Link>
          ))}
        </nav>
        <div>
          {resources.map((r) => (
            <article id={r.id} key={r.id} className="resource-article">
              <h2>{r.title}</h2>
              <p>{r.intro}</p>
              <ul>
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link className="text-link" href={r.link}>
                {r.linkLabel} ↗
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
