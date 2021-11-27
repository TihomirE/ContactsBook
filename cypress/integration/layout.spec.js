/// <reference types="Cypress" />
/// http://on.cypress.io/intellisense

context('Layout test', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Check if all neccessary elements exist on the page/view', () => {

        // main app layout element test
        cy.get('#navbar')
        cy.get('#navbar-title').contains('Welcome to Contacts Book')

        // check the location
        cy.location('pathname').should('eq', '/contacts/')
    })
})