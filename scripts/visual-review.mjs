import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const browser = await chromium.launch();
const base = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3002';
for (const [name, width, height] of [
  ['desktop', 1440, 1000],
  ['tablet', 820, 1180],
  ['mobile', 390, 844],
]) {
  const context = await browser.newContext({
    viewport: { width, height },
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  const errors = [];
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `docs/screenshots/${name}-hero.png` });
  for (const [label, selector] of [
    ['platform', '#platform'],
    ['kiosk', '#chapter-kiosk'],
    ['counter', '#chapter-counter'],
    ['patient', '#patient-journey'],
    ['cloud', '#cloud'],
    ['hardware', '#hardware'],
    ['audience', '#who-we-serve'],
    ['demo', '#demo'],
  ]) {
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.screenshot({ path: `docs/screenshots/${name}-${label}.png` });
  }
  const a = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    .analyze();
  console.log(
    name,
    JSON.stringify({
      overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
      errors,
      violations: a.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
      })),
    }),
  );
  await page.screenshot({ path: `docs/screenshots/${name}-full.png`, fullPage: true });
  await context.close();
}
await browser.close();
