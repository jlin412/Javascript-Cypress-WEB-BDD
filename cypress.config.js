const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 10000,
  execTimeout: 6000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  watchForFilesChanges: false,
  chromeWebSecurity: false,
  waitForAnimation: true,
  animationDistanceTreshold: 20,
  projectId: 'empty',
  env: {
    url: 'http://localhost:81/wordpress/wp-login.php',
    admin_username: 'rodolfo',
    admin_password: 'secreta1234',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFileName: '[status]_[datetime]-[name]-report',
    timestamp: 'longDate',
    charts: 'true',
    code: 'true',
    quiet:'true',
    overwrite: true,
    html: true,
    json: true,
  },
  retries: {
    runMode: 2,
    openMode: 1,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: ['*,js', '*.md'],
    specPattern: 'cypress/e2e/**/*.feature',
  },
})
