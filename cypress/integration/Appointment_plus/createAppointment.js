describe('create student', () => {
    it('creates student', () => {
        cy.visit('https://www.appointmentplus.com/')
        cy.viewport(2000, 1000)
        cy.get('a.rootLink.btn-nav.login-link').click()
        //username field
        cy.get('#login').click().type("cypresstest")
        //password field
        cy.get('#password').click().type("Appointmentplus8")
        //click the sign in button
        cy.get('.btn-form').click()
        cy.url().should('contain', 'ap_admin_v2')
        cy.get('https://account5.appointment-plus.com/ap/ap_admin_v2/appointments_index_v2.php?p=appts&first=yes')
        })
    })
