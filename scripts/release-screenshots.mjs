import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';
const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3008';
const root = 'docs/release-candidate/screenshots';
const profiles = [
  ['desktop', 1440, 1000],
  ['desktop-wide', 1920, 1080],
  ['tablet', 768, 1024],
  ['mobile', 390, 844],
  ['mobile-small', 360, 800],
];
const browser = await chromium.launch();
const manifest = [];
try {
  for (const [name, width, height] of profiles) {
    const folder = path.join(root, name);
    await fs.mkdir(folder, { recursive: true });
    const page = await browser.newPage({
      viewport: { width, height },
      reducedMotion: 'reduce',
      deviceScaleFactor: 1,
    });
    await page.goto(baseURL, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (let y = 0; y < document.body.scrollHeight; y += 600) window.scrollTo(0, y);
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(500);
    async function capture(label, selector) {
      await page.mouse.move(0, 0);
      await page.evaluate(() => {
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      });
      const file = `${label}.png`;
      if (selector) {
        await page.locator(selector).scrollIntoViewIfNeeded();
        // Capture sections without a sticky header obscuring their content; navbar captured separately.
        if (selector !== '.site-header')
          await page.addStyleTag({
            content:
              '.site-header{visibility:hidden}.skip-link:not(:focus-visible){visibility:hidden}',
          });
        await page
          .locator(selector)
          .screenshot({ path: path.join(folder, file), animations: 'disabled' });
        await page.evaluate(() =>
          document.querySelectorAll('style').forEach((el) => {
            if (
              el.textContent ===
              '.site-header{visibility:hidden}.skip-link:not(:focus-visible){visibility:hidden}'
            )
              el.remove();
          }),
        );
      } else await page.screenshot({ path: path.join(folder, file), animations: 'disabled' });
      manifest.push({ profile: name, width, height, label, file: `${name}/${file}` });
    }
    await capture('homepage-first-screen');
    await capture('navbar', '.site-header');
    if (width >= 1200) await page.getByRole('button', { name: 'Solutions', exact: true }).click();
    else await page.getByRole('button', { name: 'Open navigation' }).click();
    await capture('navigation-open');
    await page.keyboard.press('Escape');
    await capture('five-path-platform', '#platform');
    const names = [
      'Fulfillment tracking',
      'Custody & verification',
      'Device monitoring',
      'Reporting',
      'Workflow configuration',
    ];
    for (let i = 0; i < names.length; i++) {
      await page.getByRole('tab', { name: names[i], exact: true }).click();
      await capture(`cloud-${i + 1}`, '#cloud');
    }
    await capture('hardware', '#hardware');
    await capture('installation-flexibility', '#installation');
    await capture('final-cta', '#demo');
    await capture('footer', '.footer');
    await page.close();
  }
  await fs.writeFile(path.join(root, 'manifest.json'), JSON.stringify(manifest, null, 2));
  await fs.writeFile(
    path.join(root, 'index.html'),
    `<!doctype html><html lang="en"><meta charset="utf-8"><title>iLocal release candidate screenshots</title><style>body{font:16px system-ui;background:#f6f4ef;color:#07163c;margin:32px}article{margin-bottom:48px}img{max-width:100%;border:1px solid #ccd0d7}h1{font-size:32px}</style><h1>iLocal release candidate</h1><p>Five supported paths. Illustrative Cloud views. Section captures temporarily hide the sticky header; navbar and first-screen captures preserve it. Pointer captures clear focus; production keyboard indicators remain intact.</p>${manifest.map((item) => `<article><h2>${item.profile} · ${item.label} (${item.width} × ${item.height})</h2><a href="${item.file}"><img loading="lazy" src="${item.file}" alt="${item.profile} ${item.label}"></a></article>`).join('')}</html>`,
  );
  console.log(`Saved ${manifest.length} screenshots to ${root}`);
} finally {
  await browser.close();
}
