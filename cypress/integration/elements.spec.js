/// <reference types="cypress"/>

describe('work with basic elements', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => cy.reload())

    it('Text', () => {
        cy.get('.facilAchar')
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {

        cy.get('[href="#"]').click();
        
        cy.get('#resultado')
            .should('have.text', 'Voltou!')
        
        cy.reload();
        
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome')
            .type('Cypress Test')
            .should('have.value', 'Cypress Test')
        
        cy.get('#elementosForm\\:sugestoes')
            .type('Textarea')
            .should('have.value', 'Textarea')
        
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')
            .should('have.value', '???')
        
        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')
        
        cy.get('#elementosForm\\:sugestoes', {delay: 100})
            .clear()
            .type('Erro{selectall}acerto')
            .should('have.value', 'acerto')
    })

    it('RadioButton', () => {
        
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        
        cy.get('#formSexoMasc')
            .should('not.be.checked')
        
        cy.get('[name="formSexo"]')
            .should('have.length', 2)
    })

    it('Checkbox', () => {
        
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
        
        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true })
    })

    it('Combo', () => {
        
        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp')
    })
    
    it.only('Combo multiple', () => {
        
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida'])
    })
    
})