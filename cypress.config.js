const { defineConfig } = require("cypress");

var bienTest


module.exports = defineConfig({
  demopageobject: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {},

  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },

  env: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    bienTest: "default",
    baseUrl: 'https://demo.guru99.com',
    dev: {
      baseUrl: "vc"
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.guru99.com',
    watchForFileChanges: false,
    screenshotsFolder: "take_screenshot",
    failOnStatusCode: false,
    fixturesFolder: "cypress/savejson",
    screenshotOnRunFailure: false,
    video: true,
    videoUploadOnPasses: true,
    videoCompression: 32,
    videosFolder: "cypress/videos"
  },
});
