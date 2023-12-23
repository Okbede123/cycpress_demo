const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {},

    baseUrl: "https://demo.guru99.com",
    failOnStatusCode: false
  },

  demopageobject: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {},

    baseUrl: "https://demo.guru99.com",
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});


