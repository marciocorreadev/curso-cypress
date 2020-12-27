/// <reference types="cypress" />

describe('work with difference times', () => {

    beforeEach(() => cy.visit('https://wcaquino.me/cypress/componentes.html'))

    it('Going back to the past', () => {


        const date = new Date();
        cy.clock(date.getTime());


        cy.get('#buttonNow').click();
        console.log(date.getTime())
        cy.get('#resultado > span').should('contain', `${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()}`);
    })

    it.only('Goes to the future', () => {


        cy.get('#buttonTimePassed').click();
        cy.get('#resultado > span').should('contain', '16090')
        cy.get('#resultado > span').invoke('text').should('gt', 1609028546000)

        cy.clock();


        cy.tick(5000);

        cy.get('#buttonTimePassed').click();
        cy.get('#resultado > span').invoke('text').should('gte', 500)

    })
})