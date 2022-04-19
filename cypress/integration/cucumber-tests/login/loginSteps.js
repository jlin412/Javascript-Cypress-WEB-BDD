import loginPage from '../../../page-object/pages/login'
import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given('User navigates to WP login page',() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.viewport(1440,1024)
    cy.visit(Cypress.env('url'))
})

When('User enters valid credentials combination',() =>{
    loginPage.loginSuccessfull()
})

And('User click on enters',() =>{
    
})

Then('System shows admin backoffice page',() =>{
    loginPage.checkSuccessfullLogin()
})

When('User enters an incorrect credentials combination',() =>{
    loginPage.loginError()
})


Then('System shows an error message',() =>{
    loginPage.checkErrorMessage()
})
