/// <reference types="cypress" />


describe('WOrk with Iframes', () => {
    // before(() => cy.visit('https://wcaquino.me/cypress/componentes.html'))
    beforeEach(() => cy.reload())

    it('Deve preencher campo de texto', () => {
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body');

            cy.wrap(body).find('#tfield')
                .type('Funciona?')
                .should('have.value', 'Funciona?')

            // cy.wrap(body).find('#otherButton').click()

        })
    })

    it.only('Acessando iFrame', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html');

        cy.get('#otherButton').click();

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })

    })
})