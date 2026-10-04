import Link from 'next/link';
import { SectionLabel } from './SectionLabel';
export function PageIntro({
  label,
  title,
  description,
  cta = true,
}: {
  label: string;
  title: React.ReactNode;
  description: string;
  cta?: boolean;
}) {
  return (
    <section className="page-intro wrap">
      <SectionLabel>{label}</SectionLabel>
      <h1>{title}</h1>
      <p>{description}</p>
      {cta && (
        <Link href="/contact" className="button">
          Book a Demo <span aria-hidden="true">↗</span>
        </Link>
      )}
    </section>
  );
}
