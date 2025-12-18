const { test, expect } = require('@playwright/test');
const { AutomationPage } = require('../../pages/automation.page');
const { FormPage } = require('../../pages/form.page');

test('Form upload automation', async ({ page }) => {
  await page.goto('https://community.cloud.automationanywhere.digital');

  // Login step is intentionally not automated.
  // Automation Anywhere uses SSO-based authentication,
  // and for security reasons, credentials are not hardcoded in test scripts.
  // Login is assumed to be handled manually or via authenticated session reuse.

  const automationPage = new AutomationPage(page);
  await automationPage.openAutomation();
  await automationPage.clickCreateForm();

  const formPage = new FormPage(page);
  await formPage.fillText('Automation Test');
  await formPage.uploadFile('tests/data/sample.txt');
  await formPage.saveForm();

  await expect(page).toHaveURL(/automation/);
});
