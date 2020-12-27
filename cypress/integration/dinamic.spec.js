/// <reference types="cypress" />

describe('Dinamics tests', () => {

    before(() => cy.visit('https://wcaquino.me/cypress/componentes.html'))

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']

    foods.forEach(food => {

        it(`Insert with  ${food}`, () => {

            cy.get('#formNome').type('Márcio')
            cy.get('[data-cy=dataSobrenome]').type('Corrêa')
            cy.get(`[name="formSexo"][value="${'M'}"]`).click()
            cy.get(`[name="formComidaFavorita"][value="${food.toLowerCase()}"]`).click()
            cy.get('[data-testid=dataEsportes]').select('Futebol')
            cy.get('[data-test=dataEscolaridade]').select('1graucomp')

            cy.get('#formCadastrar').click();
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')

        })
    })

    it.only(`Insert with`, () => {

        cy.get('#formNome').type('Márcio')
        cy.get('[data-cy=dataSobrenome]').type('Corrêa')
        cy.get(`[name="formSexo"][value="${'M'}"]`).click()
        cy.get(`[name="formComidaFavorita"]`).each(element => cy.wrap(element).click())
        cy.get('[data-testid=dataEsportes]').select('Futebol')
        cy.get('[data-test=dataEscolaridade]').select('1graucomp')
        cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')

    })
})