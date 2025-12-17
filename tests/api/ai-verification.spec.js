const { test, expect } = require('@playwright/test');

test('AI module availability check', async ({ page }) => {
  await page.goto('https://community.cloud.automationanywhere.digital');

  await expect(page.locator('text=AI')).toBeVisible();
});
