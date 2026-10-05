# iLocal V2 release

Approved for commit and deployment on 5 October 2026.

This release brings the editorial V2 implementation, five supported fulfillment paths, revised illustrative Cloud interface, neutral installation planning, refined audience rows, redesigned navigation with rotating chevrons and paired action pills, translucent scroll header, standalone transparent favicon, isolated local development output, and extension-compatible body hydration.

Final checks: ESLint, TypeScript, 13 unit/component tests, optimized production build, and 62 Playwright tests passed. The 68 skipped cases avoid duplicate viewport matrices under other browser profiles. Browser coverage includes Chromium, Firefox, WebKit, mobile and tablet; axe checks cover the existing pages/states and all three open dropdowns. The new hydration regression simulates extension-injected body attributes across all five profiles.

The deployment retains existing preview configuration: safe mock form (no requests sent or saved), existing noindex behavior, and current legal/customer-login notices. No new external integrations or claims were added. Final through-wall availability remains unverified.

Historical root screenshot exports are kept locally and excluded from Git. Current validation and comparison evidence under docs is versioned. Documentation and capture artifacts are excluded from Vercel uploads via .vercelignore.
