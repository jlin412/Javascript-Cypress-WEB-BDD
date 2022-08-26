# Javascript-Cypress-WEB-BDD
Test automation solution template builded with Cypress, BDD

### IMPORTANT

Due new Cypress big update -> v10, cucumber plugin no longer work, unless yuo modify the ```node_modules\cypress-cucumber-preprocessor\lib\stepDefinitionPath.js``` file from  ```cypress${path.sep}integration`;```  to  ```cypress${path.sep}e2e`;``` in order to tests been able to run again.

### Technologies used:

***Cypress*** - Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different.

***Mochawesome*** - Mochawesome is a custom reporter for use with the Javascript testing framework, mocha. It runs on Node.js (>=10) and works in conjunction with mochawesome-report-generator to generate a standalone HTML/CSS report to help visualize your test runs.

***Reporting Cypress dashboard*** - Dashboard is configured in this project -> [Project Dashboard.](https://dashboard.cypress.io/)

### Design Pattern used: Page Object Model (POM) aiming DRY

**Page Object Model** is a design pattern which has become popular in test automation for enhancing test maintenance and reducing code duplication. A page object is an object-oriented class that serves as an interface to a page of your AUT.

The tests then use the methods of this page object class whenever they need to interact with the UI of that page, the benefit is that if the UI changes for the page, the tests themselves don’t need to be changed, only the code within the page object needs to change.

Subsequently all changes to support that new UI are located in one place. [More details.](https://medium.com/tech-tajawal/page-object-model-pom-design-pattern-f9588630800b)

What's DRY ? Check [this.](https://thevaluable.dev/dry-principle-explained/)

**Retry policy** is set in this project in order to have the feature do intermittent issues or avoid false positives can be identified. Is configured on Cypress.json:

```
{
...
 "retries": {
       "runMode": 2,
       "openMode": 2
 }
}
```

# Project Setup

* ```npm init```
* ```npm i cypress``` & you can open Cypress by entering node_modules\.bin\cypress open or by running ```npx cypress open``` on a terminal

# Run

* ```npm run cy:open``` to open Cypress IDE and then runs specs
* ```npm run cy:run``` to run specs headless style
* ```npm run cy:dash``` this will run specs in headless mode and then it will upload the run to configured Cypress Dashboard

## To run a single spec:

* ```npx cypress run --spec="cypress/integration/examples/scroll.spec.js```

### There's any way to walkaround all this ? I just wanna download it and play....  - Sure 

Just download this repo and run ```npm install``` that npm will read _package.json_ file and install all the definded libraries, BUT IMPORTANT THING HERE, _packeage.json_ FILE MIGHT HAVE OLDER OR EVEN OVBSOLETE LIBRARY VERSIONS SO BE CAREFULL THERE

# Mochawesome setup

```
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
  }
```