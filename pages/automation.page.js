class AutomationPage {
  constructor(page) {
    this.page = page;
    this.automationMenu = page.locator('text=Automation');
    this.createButton = page.locator('button:has-text("Create")');
    this.formOption = page.locator('text=Form');
  }

  async openAutomation() {
    await this.automationMenu.click();
  }

  async clickCreateForm() {
    await this.createButton.click();
    await this.formOption.click();
  }
}

module.exports = { AutomationPage };
