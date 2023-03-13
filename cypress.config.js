const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": 'https://canary.api.meld.cx/login',
    "defaultCommandTimeout":50000,
    "pageLoadTimeout": 50000,
    "chromeWebSecurity": false,
    "userAgent": 'Chrome/51.0.2704.103 Safari/537.36',
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
      "reportFilename": "[name]-[status]_[datetime]-report",
      "timestamp":"longDate",
      "overwrite": false,
      "html": true,
      "json": false,
      "inlineAssets": true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
