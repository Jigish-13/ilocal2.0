# Asset and content provenance

All physical product imagery was copied from the user-supplied `../ilocal-website-2.0/legacy-assets` tree. No physical products or product configurations were synthesized.

| Website asset                      | Supplied source                              |
| ---------------------------------- | -------------------------------------------- |
| `public/brand/ilocal-logo.png`     | `logos/iLOCAL_LOGOPrimary Logo.png`          |
| `public/brand/ilocal-mark.png`     | `logos/iLOCAL_LOGOSecondary Logo.png`        |
| `public/hardware/kiosk.png`        | `legacy-assets/main-kiosk-right-angle.png`   |
| `public/hardware/main.png`         | `legacy-assets/localbox-main-unit.png`       |
| `public/hardware/expansion.png`    | `legacy-assets/tier2/a60-add-on.png`         |
| `public/hardware/high-density.png` | `legacy-assets/tier2/hd36-add-on.png`        |
| `public/hardware/refrigerated.png` | `legacy-assets/cool-refrigerated-add-on.png` |

App icons are resized versions of the official supplied mark. Legacy hardware branding is preserved; the configurator presents individual modules, explicitly not to scale or as an engineered assembly.

Instrument Sans (variable Latin, weights 400–700) and Instrument Serif (Latin italic) are self-hosted through `next/font/local`. Assets originated in Fontsource packages; the original SIL Open Font Licenses are retained in `public/fonts`. No third-party font requests occur at runtime.

The non-hardware SVG handoff diagrams are original, explicitly illustrative vector compositions. No people/customer photographs were supplied, so none were fabricated. Cloud and phone UI are illustrative and contain no real patient, prescription, clinician, order or payment data.

## Copy boundaries

- Hero, section themes, fulfillment headlines and final CTA follow `FINAL_DESIGN_SPEC.md`.
- Product limits were checked against the supplied `product-docs/product-system-docs/01-product-requirements.md`, `ONBOARDING.md`, QA regression plan, and the fulfillment-specific sections described there.
- Kiosk access is site-dependent; detail pages state the hours/configuration boundary. No universal autonomous 24/7 promise.
- Counter remains a staffed handoff; Curbside remains a staff-to-vehicle handoff; Bedside connects pharmacy, runner and hospital room.
- Patient steps are configurable. Consultation is conditional on site workflow and service availability.
- Courier copy remains high-level. No carrier, route optimization, guaranteed tracking integration, or clinical-outcome claim.
- No customers, testimonials, statistics, certifications or partner badges have been invented.
- Resources are explanatory product guides, not fabricated articles, dated news or case studies.
- Privacy, Terms and customer login are explicit local-preview notices pending business-approved content/destination. They are excluded from the sitemap and marked noindex.
