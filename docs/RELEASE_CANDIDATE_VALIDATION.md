# iLocal V2 release-candidate polish

Validated locally on 5 October 2026. This targeted pass preserves the approved V2 display typography, hero, pharmacy workflow, patient journey, hardware configurator, audience structure, and navigation architecture. No commit or deployment was made in this pass.

## Changes

- Exactly five active solutions: Kiosk, Counter, Curbside, Bedside / Meds-to-Beds, and Courier. Shared content drives navigation, demo interests, solution pages, metadata, and sitemap. The route diagram now balances five branches. The retired solution URL permanently redirects to `/solutions` with HTTP 301.
- Shared small-type tokens improve navigation, supporting copy, controls, form fields, captions, and footer readability without changing the display scale. Navigation and Customer Login use 15.6px / weight 500; meaningful supporting text generally uses 16px with 1.6 line height.
- Cloud uses a pale mist background and a refined floating application canvas. Fulfillment shows five synthetic path/location/status examples. Hardware shows supplied authentic main/expansion imagery with conservative operational labels. Workflow retains seven preparation steps. All three views remain explicitly illustrative, contain no patient information or metrics, and use a brief transition disabled for reduced motion.
- Installation Flexibility uses a neutral architectural planning illustration. Through-wall availability remains unverified; existing conservative copy and the pending-confirmation note remain. The illustration is explicitly not an installation specification.
- Consistent anchor offsets clear the sticky header. Keyboard focus rings remain brand gold; pointer interactions do not retain keyboard focus rings.

## Validation

- ESLint: passed.
- TypeScript: passed.
- Unit/component tests: 13 passed across four files.
- Playwright: 57 passed. The 68 skipped cases intentionally avoid repeating Chromium viewport matrices under four other profiles.
- Engines: Chromium, Firefox, and WebKit; shared mobile/tablet interaction profiles also passed. WebKit coverage is not a manual test on physical Safari devices.
- Release matrix: 360×800, 390×844, 768×1024, 1024×768, 1440×1000, 1920×1080, and 2560×1440. Existing V2 coverage also checks 320, 430, and 1366px widths.
- Anchor checks: homepage, Platform, Technology, Who We Serve, and Solutions. All tested section starts cleared the sticky navbar; no horizontal overflow.
- Axe: no violations in tested homepage/contact pages, all three Cloud states, and expanded audience states at mobile/desktop sizes. Automated results do not constitute a full WCAG certification.
- Production build: passed using `npm run build -- --webpack`. The known local Turbopack permission limitation is unchanged; this build validates the optimized Webpack output.
- Demo validation/mock submission, patient interaction, route highlighting, hardware selectors, menus, skip link, focus recovery, reduced motion, public routes, and SEO structure passed.

## Screenshots

[Final gallery](release-candidate/screenshots/index.html) contains 55 captures at the five requested viewport sizes: 1440×1000, 1920×1080, 768×1024, 390×844, and 360×800.

Each profile includes first screen, navbar, open navigation, five-path platform, all three Cloud views, Hardware, Installation Flexibility, final CTA, and footer. Section-only captures temporarily hide the sticky header and unfocused skip link to prevent screenshot compositor artifacts; this affects capture tooling only. Production keyboard indicators remain intact.

Regenerate with:

```sh
PLAYWRIGHT_BASE_URL=http://127.0.0.1:3009 node scripts/release-screenshots.mjs
```

## Content audit and retained historical material

A case-insensitive repository audit found no retired-solution reference in runtime marketing content, public assets, current navigation/configuration, metadata, sitemap content, or active screenshot-generation states. The only active-source occurrences are the required compatibility redirect and its regression test.

The root `screenshots/` gallery, its manifest/README, `screenshots.zip`, and older V2 comparison/validation documents are historical baselines. They are not shipped from `public/` and are not current screenshot-generation states. Historical records were preserved and marked superseded rather than rewriting baseline evidence. Current captures are exclusively in `docs/release-candidate/screenshots/`.

## Launch configuration retained

The local preview intentionally remains non-indexable. SEO scoring is affected by that setting. Canonical/public domain, customer login destination, approved legal content, and a real demo-submission adapter remain launch configuration matters from the original implementation; this polish pass adds no claims or external integrations.

Final Lighthouse scores: desktop Performance 100 / Accessibility 100 / Best Practices 100 / SEO 69; mobile Performance 92 / Accessibility 100 / Best Practices 100 / SEO 69. Both runs recorded CLS 0. SEO 69 reflects the existing noindex preview setting.

Lighthouse reports for the final build are stored in `release-candidate/validation/`.
