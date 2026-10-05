import { test, expect } from '@playwright/test';

const paths = ['Kiosk', 'Counter', 'Curbside', 'Bedside', 'Courier'];
test('five supported paths and retired route compatibility', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.locator('.route-controls button')).toHaveText(paths);
  await expect(page.locator('.ledger-row')).toHaveCount(5);
  await expect(page.locator('body')).not.toContainText(/mail[ _-]?order/i);
  const response = await request.get('/solutions/mail-order', { maxRedirects: 0 });
  expect(response.status()).toBe(301);
  expect(response.headers().location).toBe('/solutions');
  expect(await (await request.get('/sitemap.xml')).text()).not.toMatch(/mail[ _-]?order/i);
  await page.goto('/contact');
  await expect(page.getByLabel('Area of Interest')).not.toContainText(/mail[ _-]?order/i);
});

for (const [width, height] of [
  [360, 800],
  [390, 844],
  [768, 1024],
  [1024, 768],
  [1440, 1000],
  [1920, 1080],
  [2560, 1440],
]) {
  test(`release anchors and readability at ${width}`, async ({ page }, info) => {
    test.skip(
      info.project.name !== 'chromium',
      'Other engines are covered by shared interaction tests.',
    );
    await page.setViewportSize({ width, height });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    for (const route of ['/', '/platform', '/technology', '/who-we-serve', '/solutions']) {
      await page.goto(route);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        route,
      ).toBe(true);
      const anchors = await page
        .locator('main section[id], main article[id], #installation')
        .evaluateAll((els) => els.map((el) => el.id));
      for (const id of anchors) {
        const target = page.locator(`[id="${id}"]`);
        await target.evaluate((el) => el.scrollIntoView({ block: 'start', behavior: 'instant' }));
        const top = (await target.boundingBox())!.y;
        const headerBottom = await page
          .locator('.site-header')
          .evaluate((el) => el.getBoundingClientRect().bottom);
        expect(top, `${route}#${id}`).toBeGreaterThanOrEqual(headerBottom);
      }
    }
    await page.goto('/');
    if (width >= 1200) {
      expect(
        await page
          .locator('.login-link')
          .evaluate((el) => parseFloat(getComputedStyle(el).fontSize)),
      ).toBeGreaterThanOrEqual(15);
    }
    const tab = page.getByRole('tab', { name: 'Devices & Hardware', exact: true });
    await tab.click();
    expect(await tab.evaluate((el) => el.matches(':focus-visible'))).toBe(false);
    await page.keyboard.press('ArrowRight');
    const focused = page.getByRole('tab', { name: 'Workflow Configuration', exact: true });
    await expect(focused).toBeFocused();
    expect(
      await focused.evaluate((el) => parseFloat(getComputedStyle(el).outlineWidth)),
    ).toBeGreaterThanOrEqual(3);
    await expect(page.locator('.site-layout-illustration')).toBeAttached();
  });
}

test('scrolled header stays opaque without relying on backdrop blur', async ({ page }) => {
  await page.goto('/');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.evaluate(() => window.scrollTo({ top: 550, behavior: 'instant' }));
  const header = page.locator('.site-header');
  await expect(header).toHaveAttribute('data-scrolled', 'true');
  await expect(header).toHaveCSS('background-color', 'rgb(246, 244, 239)');
  await expect(header).toHaveCSS('opacity', '1');
});
