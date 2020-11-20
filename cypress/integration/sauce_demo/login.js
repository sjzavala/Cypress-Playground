describe('sauce_demo Login', () => {
    it('sauce_demo Login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test=username]').click().type('standard_user')
        cy.get('[data-test=password]').click().type('secret_sauce')
        cy.get('#login-button').click()
    })
})