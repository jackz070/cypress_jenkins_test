const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: 'report-[name]-[datetime]',
    // mochaFile: 'reports/my-test-output-[hash].xml',
    // JSONfile: 'reports/my-test-output-[hash].json',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
