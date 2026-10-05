import { test, expect } from '@playwright/test';

test('extension-injected body attributes do not trigger hydration errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(error.message));
  await page.addInitScript(() => {
    const observer = new MutationObserver(() => {
      if (!document.body) return;
      document.body.setAttribute('data-new-gr-c-s-check-loaded', '14.1334.0');
      document.body.setAttribute('data-gr-ext-installed', '');
      observer.disconnect();
    });
    observer.observe(document, { childList: true, subtree: true });
  });
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.locator('body')).toHaveAttribute('data-gr-ext-installed', '');
  await page.getByRole('tab', { name: 'Device monitoring', exact: true }).click();
  await expect(page.getByRole('tabpanel')).toContainText('Your hardware, connected');
  expect(errors.filter((message) => /hydrat|didn't match|server rendered/i.test(message))).toEqual(
    [],
  );
});
