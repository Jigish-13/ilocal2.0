import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="wrap not-found">
      <p className="eyebrow">404 — A different path</p>
      <h1>
        Let’s get you
        <br />
        <em>connected again.</em>
      </h1>
      <p>We couldn’t find that page. Explore the platform or head back to the homepage.</p>
      <div className="button-row">
        <Link href="/" className="button">
          Back to iLocal ↗
        </Link>
        <Link href="/platform" className="text-link">
          Explore the Platform ↗
        </Link>
      </div>
    </main>
  );
}
