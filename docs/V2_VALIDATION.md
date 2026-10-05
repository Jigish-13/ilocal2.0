> Historical pre-release baseline. Superseded by the five-path release candidate documented in docs/RELEASE_CANDIDATE_VALIDATION.md. These reference captures do not describe current supported solutions.

# V2 implementation and validation

Validated 5 October 2026 against the optimized local build at `http://127.0.0.1:3007`. The public Vercel deployment remains V1; V2 has not been pushed or deployed in this task.

## Implementation

- Direction was recorded in `../V2_VISUAL_DIFF.md` before code edits.
- Scoped editorial tokens/compositions restore GenSpark’s larger narrative copy, serif rhythm, asymmetric headings and breathing space while retaining the approved palette and hero concept.
- Workflow remains a server component: four ruled narrative steps beside a three-tier connecting stack. Connector motion is CSS-only and disabled for reduced motion.
- Cloud retains three accessible keyboard-operated tabs, now with separate descriptive text and a substantial illustrative product console. Sample fulfillment states, generic locations, custody context, compartment/device signals and workflow settings contain no real records, invented metrics or named integrations.
- Authentic hardware selection remains interactive. A unified stage, integrated controls, four editorial capability notes and installation-planning story place hardware within the platform.
- Audience rows retain the approved heading and IDs. Expanded states include editorial scenes, three grounded points, common-path chips and audience links.
- Existing SVG illustrations gain spatial planes; Courier’s delivery vehicle and Mail Order’s parcel/shipping treatment are distinct.
- `ProductInterfaceFrame` on Platform/Technology renders nothing until an approved sanitized staging asset is supplied through typed content. It never contacts a product system.
- Global runtime search of `src/` finds no “formerly”, “iLocalBox” or “iLocal Box” marketing references. Physical logos in authentic photography are preserved.

## Checks

| Check                                | Result                                                                                                                                                                  |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ESLint                               | Passed                                                                                                                                                                  |
| TypeScript strict checks             | Passed                                                                                                                                                                  |
| Unit/component/API tests             | 13 passed; existing tests retained                                                                                                                                      |
| Playwright                           | 45 passed: existing 35 checks across Chromium, Firefox, WebKit, mobile and tablet; 10 additional viewport checks                                                        |
| Duplicate viewport project instances | 40 intentionally skipped; the viewport matrix executes once in Chromium                                                                                                 |
| Axe                                  | Homepage/contact across existing projects; all three Cloud panels and four audience expanded states at 390/1440; no violations under the configured WCAG 2/2.1/2.2 tags |
| Responsive matrix                    | 320, 360, 390, 430, 768, 1024, 1366, 1440, 1920, 2560; no document overflow in tested interactive states                                                                |
| Reduced motion                       | Existing patient/route checks pass; CSS connecting-stack movement disabled                                                                                              |
| Production build                     | Passed with `npm run build -- --webpack`; 26 static outputs plus demo API                                                                                               |

Local Turbopack fails because its child process cannot bind the required build port in this environment, including the attempted escalated run. Next.js’s supported Webpack bundler built successfully. The repository’s normal `next build` command is unchanged. The prior Vercel build established that Turbopack works on that hosting environment; this V2 Turbopack build has not yet been validated there.

## Lighthouse

Final optimized build, Chromium, desktop/mobile presets:

| Metric                   | Desktop | Mobile |
| ------------------------ | ------- | ------ |
| Performance              | 100     | 96     |
| Accessibility            | 100     | 100    |
| Best Practices           | 100     | 100    |
| SEO                      | 69      | 69     |
| Largest Contentful Paint | 0.6 s   | 2.7 s  |
| Cumulative Layout Shift  | 0       | 0      |
| Total Blocking Time      | 0 ms    | 20 ms  |

Reports are in `v2-validation/`. V1 reports in `validation/` are retained unchanged. SEO is limited by the deliberately unchanged review configuration: noindex and localhost metadata. A public launch requires approved origin/legal/form settings described in `LAUNCH_NOTES.md`. Lighthouse and automated axe do not replace manual assistive-technology review. Mobile LCP remains above the 2.5-second good threshold despite the overall score; no new blocking optimization is required to meet the requested 90 performance target. DOM-size and upstream JavaScript opportunities remain visible in the reports.

## Visual comparison

Open `v2-comparison/index.html`. It presents GenSpark / deployed V1 / local V2 for typography, workflow, Cloud, hardware, installation and audiences at 360, 390, 768, 1440 and 1920. Additional V2 Cloud tabs, audience states, all-module hardware and full-page screenshots are included.

Reference capture normalization is confined to an isolated temporary copy: reveal hidden reference sections, stop animations, use the supplied Instrument fonts, and preserve explicit missing-image placeholders. Reference-only scripts were disabled for stable captures; the reference main-module render uses its supplied asset. Navigation/skip links are hidden only in the comparison browser so fixed layers cannot obscure section artwork. Production behavior is unchanged by those capture styles. No GenSpark HTML/CSS/JS was imported into the website. V1 has no installation section, so the gallery explicitly records its absence.

## Approval holds

1. Through-wall capability: historical documentation/code references do not verify current commercial availability. The site retains a planning area and explicit pending-confirmation note; legacy through-wall imagery and “Stock from behind the wall. Collect from the front.” availability copy are withheld. Obtain product approval before replacing this area.
2. Legacy marks: supplied main/expansion/high-density/refrigerated photographs may display historical physical branding. Replace with approved new photography when available; do not digitally erase markings.
3. Real product interface: supply a privacy-reviewed sanitized staging screenshot before enabling the optional frame. No real product environment or patient data was accessed.
