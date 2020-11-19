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
        //entering iframe for appointments page
        .then($iframe =>{
            const iframe = $iframe.contents()
            const myInput0 = iframe.find('input:eq(0)')
            const myInput1 = iframe.find('input:eq(1)')
            const myInput2 = iframe.find('input:eq(2)')
            const myButton = iframe.find('button')
        })
    })
})