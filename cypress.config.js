const { defineConfig } = require("cypress");

module.exports = defineConfig({
  

  e2e: {
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      
    },
  
    baseUrl: 'https://demo.guru99.com',
    
  },

});
