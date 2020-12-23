/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it('should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');

        cy.title().then(title => expect(title).to.be.equal('Campo de Treinamento'))

        cy.title().should('to.be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo de Treinamento')

        cy.title()
            .should('to.be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo de Treinamento')
        
        cy.title()
            .should('to.be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo de Treinamento')
    })

    it.only('should find and interacr with an elementct', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');

        // cy.pause();

        cy.get('#buttonSimple')
            .should('have.value', 'Clique Me!')
            .click()
            .and('have.value', 'Obrigado!')
            .debug()
    })


})


