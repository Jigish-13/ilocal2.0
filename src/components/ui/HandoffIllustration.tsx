import type { SolutionId } from '@/content/solutions';
export function HandoffIllustration({ type }: { type: Exclude<SolutionId, 'kiosk'> }) {
  return (
    <svg
      viewBox="0 0 560 420"
      className={`handoff-illustration illustration-${type}`}
      role="img"
      aria-label={
        type === 'counter'
          ? 'Illustration of a patient and pharmacy staff member meeting across a counter'
          : type === 'curbside'
            ? 'Illustration connecting patient arrival, a parked vehicle and pharmacy staff'
            : type === 'bedside'
              ? 'Illustration of medication moving from pharmacy to runner to hospital room'
              : 'Illustration of a pharmacy delivery handoff connected to a home'
      }
    >
      <path d="M55 320 H505 M80 355 H475" stroke="currentColor" opacity=".15" fill="none" />
      <g aria-hidden="true">
        <path d="M45 315 L295 380 L515 300 L265 245Z" fill="currentColor" opacity=".055" />
        <path d="M45 315 V325 L295 390 V380Z" fill="currentColor" opacity=".09" />
        <path d="M295 380 V390 L515 310 V300Z" fill="currentColor" opacity=".13" />
        <path
          d="M50 72 V287 M50 72 L295 38 L510 100 V292"
          stroke="currentColor"
          opacity=".12"
          fill="none"
        />
        <circle cx="510" cy="100" r="5" fill="var(--gold)" />
      </g>
      {type === 'counter' ? (
        <>
          <rect x="280" y="80" width="200" height="180" rx="8" fill="currentColor" opacity=".05" />
          <path d="M310 120 H450 M310 164 H450 M310 208 H450" stroke="currentColor" opacity=".2" />
          <circle cx="360" cy="160" r="28" fill="currentColor" opacity=".7" />
          <path d="M312 253 V225 Q360 174 408 225 V253" fill="currentColor" opacity=".15" />
          <path d="M350 210 V240 M335 225 H365" stroke="currentColor" strokeWidth="3" />
          <circle cx="150" cy="182" r="29" fill="currentColor" opacity=".5" />
          <path d="M100 320 V258 Q150 200 200 258 V320" fill="currentColor" opacity=".16" />
          <rect x="215" y="254" width="260" height="12" rx="3" fill="currentColor" opacity=".7" />
          <path d="M240 266 V320 M450 266 V320" stroke="currentColor" strokeWidth="3" />
          <rect x="275" y="220" width="30" height="34" rx="3" fill="var(--gold)" />
          <path
            d="M188 250 L275 235 M320 226 L300 235"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <text x="280" y="390" textAnchor="middle">
            PREPARE ONLINE. CONNECT IN PERSON.
          </text>
        </>
      ) : type === 'curbside' ? (
        <>
          <rect
            x="74"
            y="92"
            width="95"
            height="153"
            rx="17"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <text x="122" y="165" textAnchor="middle" className="illustration-big">
            I’m here.
          </text>
          <path d="M108 190 L120 202 L140 178" fill="none" stroke="var(--gold)" strokeWidth="4" />
          <path
            d="M180 170 H305 Q340 170 340 210"
            stroke="var(--gold)"
            strokeDasharray="5 7"
            fill="none"
          />
          <path
            d="M237 299 V270 L265 250 L289 205 H399 L435 250 L474 266 V300Z"
            fill="currentColor"
            opacity=".1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M280 250 L303 220 H386 L409 250Z" fill="currentColor" opacity=".25" />
          <circle
            cx="284"
            cy="300"
            r="21"
            fill="var(--teal)"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle
            cx="429"
            cy="300"
            r="21"
            fill="var(--teal)"
            stroke="currentColor"
            strokeWidth="3"
          />
          <text x="280" y="390" textAnchor="middle">
            ARRIVAL → LOCATION → STAFF HANDOFF
          </text>
        </>
      ) : type === 'bedside' ? (
        <>
          <path d="M70 175 H460" stroke="currentColor" strokeDasharray="5 7" opacity=".4" />
          <rect
            x="52"
            y="120"
            width="90"
            height="110"
            rx="4"
            fill="var(--paper)"
            stroke="currentColor"
          />
          <path d="M80 152 H114 M97 135 V169" stroke="currentColor" strokeWidth="4" />
          <text x="97" y="268" textAnchor="middle">
            PHARMACY
          </text>
          <circle cx="260" cy="158" r="24" fill="currentColor" opacity=".6" />
          <path d="M224 230 V207 Q260 167 296 207 V230" fill="currentColor" opacity=".2" />
          <rect x="278" y="211" width="20" height="24" fill="var(--gold)" />
          <text x="260" y="268" textAnchor="middle">
            RUNNER
          </text>
          <rect
            x="370"
            y="100"
            width="110"
            height="135"
            rx="5"
            stroke="currentColor"
            fill="var(--paper)"
          />
          <path
            d="M383 205 H470 M388 180 V220 M465 177 V220"
            stroke="currentColor"
            strokeWidth="3"
          />
          <rect x="398" y="179" width="65" height="22" rx="8" fill="currentColor" opacity=".2" />
          <circle cx="402" cy="172" r="10" fill="currentColor" opacity=".5" />
          <text x="425" y="268" textAnchor="middle">
            PATIENT
          </text>
          <text x="280" y="390" textAnchor="middle">
            CONNECTED TO THE HOSPITAL ROOM
          </text>
        </>
      ) : (
        <>
          <path
            d="M80 145 C180 90 210 100 270 150 S410 205 475 165"
            fill="none"
            stroke="currentColor"
            opacity=".35"
            strokeDasharray="5 8"
          />
          <rect x="65" y="138" width="80" height="117" rx="4" fill="currentColor" opacity=".12" />
          <path d="M84 177 H126 M105 156 V198" stroke="currentColor" strokeWidth="3" />
          <path
            d="M365 130 L420 89 L485 135 V252 H365Z"
            fill="currentColor"
            opacity=".07"
            stroke="currentColor"
          />
          <path d="M405 252 V205 H437 V252" fill="none" stroke="currentColor" />
          <path
            d="M165 270 V196 H298 L339 221 H363 V270Z"
            fill="var(--paper)"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M302 204 L329 226 H303Z" fill="currentColor" opacity=".25" />
          <rect x="187" y="218" width="87" height="37" rx="4" fill="var(--teal)" />
          <path
            d="M218 236 H244 M237 228 L246 236 L237 244"
            stroke="var(--white)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="203" cy="274" r="20" fill="currentColor" />
          <circle cx="329" cy="274" r="20" fill="currentColor" />
          <circle cx="203" cy="274" r="9" fill="var(--paper)" />
          <circle cx="329" cy="274" r="9" fill="var(--paper)" />
          <rect x="275" y="235" width="19" height="20" fill="var(--gold)" />
          <text x="280" y="390" textAnchor="middle">
            PHARMACY → COORDINATED DELIVERY → HOME
          </text>
        </>
      )}
    </svg>
  );
}
