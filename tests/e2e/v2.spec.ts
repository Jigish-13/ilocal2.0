import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const width of [320, 360, 390, 430, 768, 1024, 1366, 1440, 1920, 2560]) {
  test(`V2 editorial sections recompose at ${width}px`, async ({ page, browserName }, info) => {
    test.skip(
      browserName !== 'chromium' || info.project.name !== 'chromium',
      'Viewport matrix uses desktop Chromium; shared browser tests cover other engines.',
    );
    await page.setViewportSize({ width, height: width < 700 ? 844 : 1000 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await expect(page.locator('body')).not.toContainText(/formerly ilocalbox/i);
    const overflow = () => page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    expect(await overflow()).toBe(false);
    for (const name of ['Fulfillment Visibility', 'Devices & Hardware', 'Workflow Configuration']) {
      await page.getByRole('tab', { name, exact: true }).click();
      await expect(page.getByRole('tabpanel')).toBeVisible();
      expect(await overflow(), `Cloud: ${name}`).toBe(false);
      if (width === 390 || width === 1440) {
        expect(
          (
            await new AxeBuilder({ page })
              .include('#cloud')
              .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
              .analyze()
          ).violations,
        ).toEqual([]);
      }
    }
    for (const hardwareModule of ['Expansion', 'High Density', 'Refrigerated']) {
      await page
        .locator('.hardware-controls')
        .getByRole('button', { name: new RegExp(hardwareModule) })
        .click();
    }
    await expect(page.locator('.hardware-stage figure')).toHaveCount(4);
    expect(await overflow(), 'Hardware configuration').toBe(false);
    await expect(page.locator('#installation')).toContainText('pending confirmation');
    for (const audience of [
      'Health Systems',
      'Retail Pharmacy',
      'Independent & Community Pharmacy',
      'Employers & Organizations',
    ]) {
      const button = page
        .locator('.audience-rows')
        .getByRole('button', { name: new RegExp(audience.replace('&', '&')) });
      if ((await button.getAttribute('aria-expanded')) !== 'true') await button.click();
      await expect(page.locator('.audience-panel:visible .audience-values li')).toHaveCount(3);
      await expect(page.locator('.audience-panel:visible')).toContainText('Common paths');
      expect(await overflow(), `Audience: ${audience}`).toBe(false);
      if (width === 390 || width === 1440) {
        expect(
          (
            await new AxeBuilder({ page })
              .include('#who-we-serve')
              .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
              .analyze()
          ).violations,
        ).toEqual([]);
      }
    }
    expect(
      await page
        .locator('.stack-connection i')
        .first()
        .first()
        .evaluate((el) => getComputedStyle(el, '::after').animationName),
    ).toBe('none');
  });
}
