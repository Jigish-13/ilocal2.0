export function SectionLabel({ number, children }: { number?: string; children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      {number && <span className="section-number">{number}</span>}
      <span className="label-rule" aria-hidden="true" />
      {children}
    </p>
  );
}
