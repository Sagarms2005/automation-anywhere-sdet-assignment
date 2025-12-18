const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login.page');
const { AutomationPage } = require('../../pages/automation.page');
const { FormPage } = require('../../pages/form.page');

test('Form upload automation', async ({ page }) => {
  await page.goto('https://community.cloud.automationanywhere.digital');

  const loginPage = new LoginPage(page);
  await loginPage.login(
    '2005sagarms@gmail.com',
    'Sagarsagu$143'
  );

  const automationPage = new AutomationPage(page);
  await automationPage.openAutomation();
  await automationPage.clickCreateForm();

  const formPage = new FormPage(page);
  await formPage.fillText('Automation Test');
  await formPage.uploadFile('tests/data/sample.txt');
  await formPage.saveForm();

  await expect(page).toHaveURL(/automation/);
});
