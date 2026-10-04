# iLocal — The Pharmacy-to-Patient Platform

A new corporate website built from the supplied final specification, GenSpark editorial direction, and Stitch V4 product grounding. Current scope is **local development**.

## Run locally

Requires Node 20.19+ (validated with Node 20.20) and npm.

```sh
npm ci
npm run dev -- --port 3002
```

Open http://127.0.0.1:3002. The development demo form uses a safe mock: it validates requests, but never logs, saves, or sends contact details. Use fictitious test data.

To check the optimized production build locally:

```sh
npm run build
DEMO_FORM_MODE=mock npm run start -- --port 3003
```

Without the explicit mock flag, an unconfigured production form returns 503 rather than pretending to deliver a lead. No secrets are required for local development.

## Implementation

- Next.js 16.3.8, React 19.3, strict TypeScript, Tailwind 4, Motion for React.
- Server-rendered content and statically generated detail pages; client islands for interactive features.
- Official logo and original supplied hardware. Licensed, self-hosted Instrument fonts.
- Typed content in `src/content`; reusable presentation in `src/components`.
- Design tokens in `src/styles/tokens.css`; foundation, experience, operations and detail-page styles are separate modules.
- `src/lib/forms/schema.ts` shares validation. `adapter.ts` is the server-only integration boundary. `app/api/demo/route.ts` checks origin, content type, body size and payload before calling the adapter.
- Metadata, canonical support, social image, Organization JSON-LD, sitemap, robots, icons and custom 404 are included. Local builds intentionally discourage indexing.
- Initial legacy 301s map the supplied industries/products/about URLs. A full old-site inventory is still needed before public migration.

## Validate

```sh
npm run lint
npm run typecheck
npm test
npm run format:check
npx playwright install chromium firefox webkit
npm run test:e2e
```

Start the local app before Playwright. Set `PLAYWRIGHT_BASE_URL` to test another local port. Tests cover desktop Chromium, Firefox and WebKit plus mobile/tablet viewports; WebKit is the Safari engine, not a claim of a physical Safari/iOS device test. macOS WebKit uses Option-Tab to navigate links with the default keyboard setting.

```sh
node scripts/visual-review.mjs
node scripts/lighthouse.mjs
```

Visual review defaults to port 3002; Lighthouse defaults to the production build on port 3003. Both use the installed Playwright Chromium. Artifacts are written under `docs/screenshots` and `docs/validation`.

See [validation results](docs/VALIDATION.md), [asset and copy provenance](docs/ASSETS_AND_CONTENT.md), [implementation plan](docs/IMPLEMENTATION_PLAN.md), and [launch configuration](docs/LAUNCH_NOTES.md).
