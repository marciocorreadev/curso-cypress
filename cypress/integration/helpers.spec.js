/// <reference types="cypress"/>

describe('Helpers', () => {
    before(() => cy.visit("https://wcaquino.me/cypress/componentes.html"));
    // beforeEach(() => cy.reload());

    it('Wrap', () => {

        const obj = { name: 'Márcio', idade: 28 };

        expect(obj).to.have.property('name')

        obj.should('have.property', 'idade') // Não funciona

        cy.wrap(obj).should('have.property', 'idade')


        // cy.get('#formNome').then((value) => {
        //     cy.wrap(value).type('Márcio')
        // })

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => {
            console.log('Primeiro botão encontrado!')
        })
        cy.wrap(promise).then((num) => {
            console.log(num)
        })
        cy.get('#buttonList').then(() => {
            console.log('Primeiro botão encontrado!')
        })
    })

    it('Its', () => {
        const obj = { name: 'Márcio', idade: 28, endereco: { rua: 'Sem nome' } };

        cy.wrap(obj).should('have.property', 'name', 'Márcio');
        cy.wrap(obj).its('name').should('be.equal', 'Márcio');

        cy.wrap(obj).its('endereco').its('rua').should('be.equal', 'Sem nome');
        cy.wrap(obj).its('endereco.rua').should('be.equal', 'Sem nome');


    })

    it.only('Invoke...', () => {
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        cy.wrap({ fn: getValue }).invoke('fn').should('be.equal', 1)
        cy.wrap({ fn: soma }).invoke('fn', 2, 2).should('be.equal', 4)

        cy.get('#formNome', { timeout: 8000 })
            .invoke('val', 'Textto via invoke')
            .should('value', 'Textto via invoke')

        cy.window().invoke('confirm', 'Eai!')

        cy.get('#resultado')
            .invoke('html', '<input type="button", value="é um botão"/>')
    })
})