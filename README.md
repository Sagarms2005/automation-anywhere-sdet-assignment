# Automation Anywhere – SDET Assignment

This repository contains UI and API automation tests implemented as part of the
Automation Anywhere SDET Intern assignment using Playwright and JavaScript.
The solution follows the Page Object Model (POM) design pattern.

---

## 🛠 Tech Stack
- Playwright
- JavaScript
- Node.js
- Automation Anywhere Community Edition

---

## 📌 Automated Use Cases

1. **Message Box Task (UI Automation)**
   - Creation of Task Bot
   - Adding and configuring Message Box action
   - UI flow validation

2. **Form with File Upload (UI Automation)**
   - Form creation
   - Textbox input interaction
   - File upload validation
   - Form save verification

3. **AI Module Verification**
   - Verified AI module availability
   - Observed Community Edition limitation where AI Skills / Learning Instance
     are not accessible

---

## 📁 Project Structure
```text
automation-sde/
├── pages/          # Page Object Model files
├── tests/
│   ├── ui/         # UI automation tests
│   └── api/        # API / AI verification tests
├── utils/
├── playwright.config.js
├── package.json
└── README.md
