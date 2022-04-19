import loginPage from '../../../page-object/pages/login'

describe('WP Login',()=>{

    beforeEach(() => {
      cy.viewport(1440,1024)
      cy.fixture('login').then(data => {
        cy.visit(data.url)
      })
    })

    it('Login into account with correct credentials',()=>{
        loginPage.loginSuccessfull()
        loginPage.checkSuccessfullLogin()
    })

    it('Login into account with incorrect credentials',()=>{
        loginPage.loginError()
        loginPage.checkErrorMessage()
    })
})
