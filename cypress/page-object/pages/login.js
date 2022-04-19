const USER = '#user_login'
const PASS = '#user_pass'
const SUBMIT = '#wp-submit'
const WRAP = '#wpwrap'
const ERRORMSG = '#login_error'

export default class loginPage {

  static loginSuccessfull(){
    cy.get(USER).type(Cypress.env('admin_username'))
    cy.get(PASS).type(Cypress.env('admin_password'))
    cy.get(SUBMIT).click()
  }

  static loginError(){
    cy.get(USER).type('ldksjfh')
    cy.get(PASS).type('sñldkfj')
    cy.get(SUBMIT).click()
  }

  static checkSuccessfullLogin(){
    cy.get(WRAP).should('be.visible')
  }

  static checkErrorMessage(){
    cy.get(ERRORMSG).should('be.visible')
  }
}
