/// <reference types="cypress" />


describe('WOrk with popup', () => {
    before(() => cy.visit('https://wcaquino.me/cypress/componentes.html'))
    beforeEach(() => cy.reload())

    it.only('Deve preencher campo de texto', () => {

        cy.window().then(window => {
            cy.stub(window, 'open').as('winOpen')
        })

        cy.get('#buttonPopUp').click();
        cy.get('@winOpen').should('be.called')
    })
})