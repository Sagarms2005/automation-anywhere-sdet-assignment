class FormPage {
  constructor(page) {
    this.page = page;
    this.textBox = page.locator('input[type="text"]');
    this.fileUpload = page.locator('input[type="file"]');
    this.saveButton = page.locator('button:has-text("Save")');
  }

  async fillText(value) {
    await this.textBox.fill(value);
  }

  async uploadFile(filePath) {
    await this.fileUpload.setInputFiles(filePath);
  }

  async saveForm() {
    await this.saveButton.click();
  }
}

module.exports = { FormPage };
