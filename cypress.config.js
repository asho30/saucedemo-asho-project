const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "video": true,
  "screenshotOnRunFailure": true,
  "chromeWebSecurity": false,
  "pageLoadTimeout": 60000,
  "requestTimeout": 60000,
  "responseTimeout": 60000,
  "defaultCommandTimeout": 20000,
  "retries": {
    "runMode": 0,
    "openMode": 0
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    homeUrl: 'https://www.saucedemo.com/inventory.html',
    cartUrl: 'https://www.saucedemo.com/cart.html',
    checkoutStep1Url: 'https://www.saucedemo.com/checkout-step-one.html',
    checkoutStep2Url: 'https://www.saucedemo.com/checkout-step-two.html',
  },
});