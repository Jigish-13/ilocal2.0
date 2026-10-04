import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('homepage sections, navigation, route interaction and no overflow', async ({
  page,
  isMobile,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Every path frompharmacy to patient.One connected platform.',
  );
  await expect(page.locator('main>section')).toHaveCount(12);
  const route = page
    .locator('.route-controls')
    .getByRole('button', { name: 'Curbside', exact: true });
  await route.click();
  await expect(route).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.route-caption')).toContainText('“I’m here.” Two words. One handoff.');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
  if (isMobile || (await page.getByRole('button', { name: 'Open navigation' }).isVisible())) {
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await expect(page.getByRole('dialog', { name: 'Navigation' })).toBeVisible();
    await page
      .getByRole('navigation', { name: 'Mobile primary' })
      .getByRole('link', { name: 'Kiosk', exact: true })
      .click();
  } else {
    await page.getByRole('button', { name: 'Solutions', exact: true }).click();
    await page.locator('#menu-Solutions').getByRole('link', { name: /Kiosk/ }).click();
  }
  await expect(page).toHaveURL(/\/solutions\/kiosk/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Open when the pharmacy isn’t.');
  expect(errors).toEqual([]);
});
test('demo form validates, submits safe mock and does not claim delivery', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Book a Demo', exact: true }).click();
  await expect(page.getByLabel('Name', { exact: false })).toBeFocused();
  await page.getByLabel('Name', { exact: false }).fill('Demo User');
  await page.getByLabel('Work Email').fill('demo@example.com');
  await page.getByLabel('Organization', { exact: false }).fill('Example Pharmacy');
  await page.getByLabel('Area of Interest').selectOption('Kiosk');
  await page.getByRole('button', { name: 'Book a Demo', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('no request was sent or saved');
});
test('Cloud, patient, hardware and audiences work with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.getByRole('tab', { name: 'Workflow Configuration' }).click();
  await expect(page.getByRole('tabpanel')).toContainText('Patient preparation');
  if (await page.getByLabel('Explore the patient journey', { exact: true }).isVisible()) {
    await page.getByLabel('Explore the patient journey', { exact: true }).selectOption('2');
  } else {
    await page.getByRole('button', { name: 'Payment', exact: true }).click();
  }
  await expect(page.locator('.device-screen')).toContainText('One less thing on arrival.');
  await page.getByRole('button', { name: /Refrigerated Optional module/ }).click();
  await expect(
    page.getByRole('img', { name: 'Authentic iLocal refrigerated hardware', exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: /Retail Pharmacy/ }).click();
  await expect(page.getByRole('link', { name: /Explore Retail Pharmacy/ })).toBeVisible();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto',
  );
});
test('keyboard menus, skip link and focus recovery', async ({ page, browserName }) => {
  await page.goto('/');
  const tabKey = browserName === 'webkit' ? 'Alt+Tab' : 'Tab';
  await page.keyboard.press(tabKey);
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  await expect(page.locator('main')).toBeFocused();
  const toggle = page.getByRole('button', { name: 'Open navigation' });
  if (await toggle.isVisible()) {
    await toggle.click();
    await page.keyboard.press('Escape');
    await expect(toggle).toBeFocused();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  } else {
    const platform = page.getByRole('button', { name: 'Platform', exact: true });
    await platform.focus();
    await page.keyboard.press('Enter');
    await page.keyboard.press(tabKey);
    await expect(page.getByRole('link', { name: 'Explore Platform' })).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(platform).toBeFocused();
  }
  const cloud = page.getByRole('tab', { name: 'Fulfillment Visibility' });
  await cloud.focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('tab', { name: 'Devices & Hardware' })).toBeFocused();
});
test('homepage and contact accessibility', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
    .analyze();
  expect(results.violations).toEqual([]);
  await page.goto('/contact');
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze()
    ).violations,
  ).toEqual([]);
});
test('SEO, public routes and legacy redirect', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    /^http:\/\/localhost:3002\/?$/,
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /iLocal/);
  expect(await page.locator('script[type="application/ld+json"]').textContent()).toContain(
    'Organization',
  );
  expect((await request.get('/industries/hospital/', { maxRedirects: 0 })).status()).toBe(301);
  for (const path of [
    '/platform',
    '/solutions/counter',
    '/solutions/curbside',
    '/solutions/bedside',
    '/solutions/courier',
    '/solutions/mail-order',
    '/who-we-serve',
    '/technology',
    '/resources',
    '/company',
    '/privacy',
    '/terms',
    '/accessibility',
    '/customer-login',
    '/sitemap.xml',
    '/robots.txt',
    '/opengraph-image',
  ]) {
    expect((await request.get(path)).ok(), path).toBe(true);
  }
  await page.goto('/unavailable-page');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('connected again');
});

test('scrolling updates the patient phone and platform narrative', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const selector = page.getByLabel('Explore the patient journey', { exact: true });
  if (await selector.isVisible()) {
    await selector.selectOption('6');
    await expect(page.locator('.device-screen')).toContainText('All connected. All set.');
  } else {
    await page
      .locator('.patient-steps li[data-step="2"]')
      .evaluate((el) => el.scrollIntoView({ block: 'center' }));
    await expect(page.locator('.device-screen')).toContainText('One less thing on arrival.');
    await page
      .locator('.patient-steps li[data-step="5"]')
      .evaluate((el) => el.scrollIntoView({ block: 'center' }));
    await expect(page.locator('.device-screen')).toContainText('Ready for the handoff.');
  }
  await page
    .locator('#platform')
    .evaluate((el) =>
      window.scrollTo(
        0,
        el.getBoundingClientRect().bottom + window.scrollY - window.innerHeight / 2,
      ),
    );
  await expect(page.locator('.platform-stages li[data-active="true"]')).toContainText(
    'Every route ends with the patient.',
  );
});
