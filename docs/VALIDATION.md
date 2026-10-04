# Validation report

Verified 5 October 2026 (Asia/Kolkata). Scope: completed local website in `ilocal2.0`, using the supplied design specification and assets. No public deployment or live lead destination was configured.

## Completed checks

| Check                                    | Result                                                                |
| ---------------------------------------- | --------------------------------------------------------------------- |
| ESLint                                   | Pass, no warnings                                                     |
| Strict TypeScript                        | Pass                                                                  |
| Prettier                                 | Pass                                                                  |
| Unit/component/API tests                 | 13 passed across 4 files                                              |
| Production build                         | Pass; 26 generated static outputs, with dynamic demo API              |
| Playwright production smoke/regression   | 35 passed across 5 configurations                                     |
| Automated homepage/contact accessibility | No axe WCAG A/AA violations in tested states                          |
| Responsive visual review                 | Desktop 1440×1000, tablet 820×1180, mobile 390×844 inspected          |
| Console / horizontal overflow            | No errors or horizontal overflow in the three visual-review viewports |
| Legacy 301 and route checks              | Pass                                                                  |

Playwright configurations: desktop Chromium, Firefox and WebKit; mobile iPhone 13 viewport and tablet iPad viewport in Chromium. WebKit tests use macOS Option-Tab for link navigation. These are browser-engine and emulated-viewport checks, **not physical iPhone/iPad or branded Safari certification**.

The suite covers the home structure, solution navigation, full-screen mobile navigation, focus recovery, skip-link focus, Cloud keyboard tabs, highlighted fulfillment paths, patient selection, scroll-driven phone and narrative changes, hardware additions/removals, audience expansion, reduced motion, invalid/valid mock forms, canonical/OG/schema presence, public routes and custom 404.

Server tests also cover cross-origin rejection, bounded request size, shared input validation and fail-closed production adapter selection. No contact or patient data is persisted or transmitted to an external service.

## Lighthouse

Measured against the optimized local production server on port 3003, using Lighthouse 12.6.1 and Playwright Chromium. Reports are saved as [desktop HTML](validation/lighthouse-desktop.html), [mobile HTML](validation/lighthouse-mobile.html), and adjacent JSON files.

| Category / metric        | Desktop | Simulated mobile |
| ------------------------ | ------- | ---------------- |
| Performance              | 100     | 94               |
| Accessibility            | 100     | 100              |
| Best Practices           | 100     | 100              |
| SEO                      | 69      | 69               |
| Largest Contentful Paint | 0.6 s   | 3.1 s            |
| Cumulative Layout Shift  | 0       | 0                |
| Total Blocking Time      | 0 ms    | 10 ms            |
| First Contentful Paint   | 0.2 s   | 0.9 s            |

Performance, accessibility and best-practices category targets are met in these local runs. **SEO ≥95 is not claimed:** the sole scored SEO failure is deliberate local `noindex`/robots blocking. The user explicitly deferred a public domain. All other scored SEO audits passed. Enable the approved public origin and remeasure on deployment rather than making a development preview indexable to improve a score.

The simulated mobile LCP of 3.1 s remains above the aspirational 2.5 s target, despite a 94 performance score. Recheck and tune on the eventual hosting/CDN/device/network combination. These are lab results, not real-user Core Web Vitals, and INP has not been established from field traffic. Automated accessibility checks do not constitute a full human WCAG audit.

## Visual evidence

[`screenshots/`](screenshots) contains desktop, tablet and mobile captures of the hero, platform, kiosk/counter chapters, patient experience, Cloud, hardware, audience interaction and final form, plus full-page captures. Original hardware and brand images are preserved. The default in-app preview is left at the homepage.

## Dependency state

The production-only npm audit reported **0 vulnerabilities**. The installed development dependency tree reports **13 high-severity entries**, including transitive rollups: Next's lint plugin reaches an unpatched `braces` advisory, and Lighthouse's browser tooling reaches `basic-ftp` and `extract-zip` advisories. These tools are not shipped in the production client/runtime. npm's proposed automatic remedies downgrade major tools, including Next's lint configuration; those incompatible changes were not applied. Review updated upstream fixes before running tooling against untrusted repositories or downloads and re-audit before launch.

Vitest was updated to 4.1.11 to resolve its mocker advisory. ESLint remains at 9.39.5 because the currently supplied Next React lint plugin failed under ESLint 10; its upstream maintenance/deprecation status is documented here rather than hidden.

## Remaining launch work

See [launch notes](LAUNCH_NOTES.md): approved domain, real customer-login destination, approved Privacy/Terms, selected CRM adapter, complete legacy URL inventory, final product availability review, and deployed performance/security validation. These are explicit future launch inputs; local development and its safe mock form are complete.
