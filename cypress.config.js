const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: 'report-[name]-[datetime]',
    // mochaFile: 'reports/my-test-output-[hash].xml',
    // JSONfile: 'reports/my-test-output-[hash].json',
  },
  e2e: {
    env: {
      "test": "ooga booga"
    },
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      on("task", {
        log(args) {
          console.log(...args);
          return null;
        }
      });
    },
  },
});
