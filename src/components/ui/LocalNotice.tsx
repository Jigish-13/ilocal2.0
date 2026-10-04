import Link from 'next/link';
export function LocalNotice({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main id="main" tabIndex={-1} className="wrap local-notice">
      <p className="eyebrow">Local development preview</p>
      <h1>{title}</h1>
      <div>{children}</div>
      <Link className="text-link" href="/">
        Return to iLocal ↗
      </Link>
    </main>
  );
}
