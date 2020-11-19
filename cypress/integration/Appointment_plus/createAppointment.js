describe('create appointment', () => {
    it('creates appointments', () => {
        cy.visit('https://www.appointmentplus.com/')
        cy.viewport(2000, 1000)
        cy.get('a.rootLink.btn-nav.login-link').click()
        //username field
        cy.get('#login').click().type("cypresstest")
        //password field
        cy.get('#password').click().type("Appointmentplus8")
        //click the sign in button
        cy.get('.btn-form').click()
        cy.wait(2000)
    
        })
    })