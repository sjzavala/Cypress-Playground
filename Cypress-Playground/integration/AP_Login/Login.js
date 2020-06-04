describe('ap login test', () => {
    it('logs in!', () => {
        cy.visit('https://www.appointmentplus.com/')
        cy.viewport(2000, 1000)
        cy.get('.login-link').click()
        //username field
        cy.get('#login').click().type("test123")
        //password field
        cy.get('#password').click().type("Appointmentplus1")
        //click the sign in button
        cy.get('.btn-form').click()

    })
})


