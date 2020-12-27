/// <reference types="cypress" />


describe('Locators', () => {
    before(() => cy.visit('https://wcaquino.me/cypress/componentes.html'))
    beforeEach(() => cy.reload())

    it('WOrking with locators', () => {
        // expect(1).eql(1)
    })
})