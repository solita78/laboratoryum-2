import { test, expect } from '@playwright/test';

test('verify logo and alignment', async ({ page }) => {
  await page.goto('http://localhost:4173/');

  // Wait for content to be visible
  await page.waitForSelector('.site-brand');

  // Take screenshot of the top area to verify logo and alignment
  await page.screenshot({ path: '/home/jules/verification/screenshots/logo_alignment_verify.png' });

  // Verify logo exists
  const logo = page.locator('.logo-glitch');
  await expect(logo).toBeVisible();
});
