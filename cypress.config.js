const { defineConfig } = require("cypress");

const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: "**/*.feature",
      on("file:preprocessor", cucumber());

    },
  },
});
