/// <reference types="cypress"/>

describe('Work with Alerts', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => cy.reload())

    it('Alert with on', () => {

        cy.get('#alert').click();
        cy.on('window:alert', msg => expect(msg).to.be.equal('Alert Simples'))
    })

    it('Alert with mock', () => {

        const stub = cy.stub().as('alerta');
        cy.on('window:alert', stub)

        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        });
    })

    it('Confirm yes', () => {

        cy.get('#confirm').click();

        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado')
        })
    })

    it('Confirm no', () => {

        cy.get('#confirm').click();

        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false;
        })

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Negado')
        })
    })

    it('Prompt', () => {

        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })

        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')
        })

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })

        cy.get('#prompt').click();
    })

    it('Desafio', () => {
        const pessoa = {
            nome: 'Márcio',
            sobrenome: 'Corrêa',
            sexo: 'Masculino'
        }

        function sexo(tipo) {
            return {
                'Masculino': () => cy.get('#formSexoMasc').click(),
                'Feminino': () => cy.get('#formSexoFem').click(),
            }[tipo]();
        }

        cy.get('#formNome').type(pessoa.nome)
        cy.get('[data-cy=dataSobrenome]').type(pessoa.sobrenome)
        sexo(pessoa.sexo);

        cy.get('#formCadastrar').click();

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })

    it.only('Alert with comands', () => {
        cy.clickAlert('#alert', 'Alert Simples')
    })

})