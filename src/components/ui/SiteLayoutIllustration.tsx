/** Neutral site-planning study, not a proposed installation or hardware capability. */
export function SiteLayoutIllustration() {
  return (
    <svg
      className="site-layout-illustration"
      viewBox="0 0 600 400"
      role="img"
      aria-label="Illustrative site planning: pharmacy staff space and patient access connected by a circulation route; not an installation specification"
    >
      <path
        d="M65 110 L355 60 L535 155 L245 212Z"
        fill="var(--white)"
        stroke="var(--muted)"
        strokeWidth="1"
      />
      <path
        d="M65 110 V285 L245 365 V212Z"
        fill="var(--paper-deep)"
        stroke="var(--muted)"
        strokeWidth="1"
      />
      <path
        d="M245 212 V365 L535 307 V155Z"
        fill="var(--mint)"
        stroke="var(--muted)"
        strokeWidth="1"
      />
      <path
        d="M65 285 L355 230 L535 307 M355 60 V230"
        fill="none"
        stroke="var(--muted)"
        strokeWidth="1"
        opacity=".45"
      />
      <path
        d="M125 200 L220 180 L340 240 L435 220"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="2"
        strokeDasharray="5 7"
      />
      <circle cx="125" cy="200" r="7" fill="var(--gold)" />
      <circle cx="435" cy="220" r="7" fill="var(--gold)" />
      <path
        d="M102 289 L104 133 M478 291 L480 170 M87 140 H119 M464 177 H496"
        fill="none"
        stroke="var(--muted)"
        strokeWidth="1"
      />
      <path
        d="M100 304 L246 370 L480 323"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="1"
        opacity=".45"
      />
      <text x="101" y="83">
        STAFF SPACE
      </text>
      <text x="365" y="354">
        PATIENT ACCESS
      </text>
      <text x="272" y="124" className="layout-study-label">
        Site layout study
      </text>
      <text x="65" y="392" className="layout-caption">
        Conceptual planning · not an installation specification
      </text>
    </svg>
  );
}
