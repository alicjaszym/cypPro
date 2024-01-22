const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  viewportHeight: 1080,
  viewportWidth:1920,
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: "**/*.{spec,test}.{ts,js}",
    setupNodeEvents(on:any, config:any) {
      // implement node event listeners here
    },
  },
});
