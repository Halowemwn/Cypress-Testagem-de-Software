const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false
  },
  defaultCommandTimeout: 60000 // Configuração do tempo limite de comando padrão
});