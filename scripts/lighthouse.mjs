import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
const url = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3003';
const outputDir = process.env.LIGHTHOUSE_OUTPUT_DIR || 'docs/validation';
await fs.mkdir(outputDir, { recursive: true });
const chrome = await launch({
  chromePath: chromium.executablePath(),
  chromeFlags: ['--headless', '--no-sandbox'],
});
try {
  for (const mode of ['desktop', 'mobile']) {
    const options = {
      port: chrome.port,
      output: ['html', 'json'],
      logLevel: 'error',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      ...(mode === 'desktop'
        ? {
            formFactor: 'desktop',
            screenEmulation: {
              mobile: false,
              width: 1440,
              height: 1000,
              deviceScaleFactor: 1,
              disabled: false,
            },
            throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 },
          }
        : {}),
    };
    const result = await lighthouse(url, options);
    await fs.writeFile(`${outputDir}/lighthouse-${mode}.html`, result.report[0]);
    await fs.writeFile(`${outputDir}/lighthouse-${mode}.json`, result.report[1]);
    console.log(
      mode,
      JSON.stringify({
        scores: Object.fromEntries(
          Object.entries(result.lhr.categories).map(([k, v]) => [k, Math.round(v.score * 100)]),
        ),
        metrics: Object.fromEntries(
          [
            'largest-contentful-paint',
            'cumulative-layout-shift',
            'total-blocking-time',
            'first-contentful-paint',
          ].map((k) => [k, result.lhr.audits[k].displayValue]),
        ),
        findings: Object.values(result.lhr.audits)
          .filter((a) => a.score !== null && a.score < 0.9 && a.details?.type !== 'opportunity')
          .map((a) => ({ id: a.id, title: a.title, displayValue: a.displayValue })),
      }),
    );
  }
} finally {
  await chrome.kill();
}
