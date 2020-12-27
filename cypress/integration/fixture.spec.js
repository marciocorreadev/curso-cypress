/// <reference types="cypress" />


describe('work with fixture file', () => {
    before(() => cy.visit('https://wcaquino.me/cypress/componentes.html'));

    it('Get data from fixture file', () => {

        cy.fixture('userData').then(data => {
            cy.get('#formNome').type(data.nome)
            cy.get('[data-cy=dataSobrenome]').type(data.sobrenome)
            cy.get(`[name="formSexo"][value="${data.sexo}"]`).click()
            cy.get(`[name="formComidaFavorita"][value="${data.comida.toLowerCase()}"]`).click()
            cy.get('[data-testid=dataEsportes]').select(data.esporte)
            cy.get('[data-test=dataEscolaridade]').select(data.escolaridade)
        })

        cy.get('#formCadastrar').click();
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })
})