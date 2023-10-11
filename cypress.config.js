const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "14b25x",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
