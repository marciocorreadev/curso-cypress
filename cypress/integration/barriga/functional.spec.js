/// <reference types="cypress" />

import LOC from '../../support/locators'

describe('Showld test at a functional level', () => {
    before(() => {
        cy.visit('http://barrigareact.wcaquino.me')

        cy.fixture('userBarrigareact').then(user => {
            cy.login(user.email, user.senha)
        })
    })

    describe('Accounts', () => {
        beforeEach(() => {
            cy.get(LOC.MENU.HOME).click()
            cy.get(LOC.MENU.SETTINGS).click();
            cy.get(LOC.MENU.CONTAS).click();
        })

        const conta = `Conta ${Math.round(Math.random() * 99 + 1)}`

        it('Should creat an account', () => {
            cy.get(LOC.CONTAS.NOME).type(conta);
            cy.get(LOC.CONTAS.BTN_SALVAR).click();

            cy.get(LOC.MESSAGE, { timeout: 5000 })
                .should('contain', 'Conta inserida com sucesso!')
                .click()
                .should('not.exist')
        })

        it('Not should creat same an account', () => {
            cy.get(LOC.CONTAS.NOME).type(conta);
            cy.get(LOC.CONTAS.BTN_SALVAR).click();

            cy.get(LOC.MESSAGE, { timeout: 5000 })
                .should('contain', 'status code 400')
                .click()
                .should('not.exist')
        })

        it('Edit an account', () => {
            cy.get(LOC.CONTAS.EDIT(conta)).click()
            cy.get(LOC.CONTAS.NOME)
                .clear()
                .type(conta + 1);

            cy.get(LOC.CONTAS.BTN_SALVAR).click();

            cy.get(LOC.MESSAGE, { timeout: 5000 })
                .should('contain', 'Conta atualizada com sucesso!')
                .click()
                .should('not.exist')

            console.clear();
        })

        it('Remove account', () => {
            cy.get(LOC.CONTAS.REMOVE(conta + 1)).click()

            cy.get(LOC.MESSAGE, { timeout: 5000 })
                .should('contain', 'Conta excluída com sucesso!')
                .click()
                .should('not.exist')

            cy.resetApp();
            cy.get(LOC.MENU.HOME).click()
        })

    })

    describe('Transactions', () => {

        beforeEach(() => {
            cy.get(LOC.MENU.HOME).click()
        })

        let transactionLength = 0;

        it('Verify Length transaction', () => {
            cy.get(LOC.MENU.EXTRATO).click()
            cy.get(LOC.EXTRATO.LISTA).then(lista => {
                cy.wait(1000)
                transactionLength = lista.length
                expect(transactionLength).to.equal(lista.length)
            })
        })

        const transaction = `Transação ${Math.round(Math.random() * 999 + 1)}`

        it('Create transaction', () => {
            cy.get(LOC.MENU.MOVIMENTACAO).click()
            cy.get(LOC.MOVIMENTACAO.DESCRICAO).type(transaction)
            cy.get(LOC.MOVIMENTACAO.VALOR).type('150')
            cy.get(LOC.MOVIMENTACAO.ENVOLVIDO).type('JOSÉ')
            cy.get(LOC.MOVIMENTACAO.CONTA).select('Conta para saldo')
            cy.get(LOC.MOVIMENTACAO.STATUS).click();
            cy.get(LOC.MOVIMENTACAO.SALVAR).click();

            cy.get(LOC.MESSAGE, { timeout: 5000 }).should('contain', 'sucesso').click().should('not.exist')
            cy.get(LOC.EXTRATO.LISTA).then(lista => {
                expect(transactionLength + 1).to.be.equal(lista.length)
            })
            cy.get(LOC.EXTRATO.BUSCAR(transaction)).should('exist')

        })

        it('Edit Transaction', () => {
            cy.get(LOC.MENU.EXTRATO).click();
            cy.get(LOC.EXTRATO.EDIT(transaction)).click()

            cy.get(LOC.MOVIMENTACAO.VALOR).clear().type(150 + 1)
            cy.get(LOC.MOVIMENTACAO.ENVOLVIDO).clear().type('JOSÉ' + 1)
            cy.get(LOC.MOVIMENTACAO.CONTA).select('Conta para extrato')
            cy.get(LOC.MOVIMENTACAO.SALVAR).click();

            cy.get(LOC.MESSAGE, { timeout: 5000 }).should('contain', 'sucesso').click().should('not.exist')
            cy.get(LOC.EXTRATO.BUSCAR(transaction)).should('exist')
        })

        it('Remove Transaction', () => {
            cy.get(LOC.MENU.EXTRATO).click();
            cy.get(LOC.EXTRATO.REMOVE(transaction)).click()

            cy.get(LOC.MESSAGE, { timeout: 5000 }).should('contain', 'sucesso').click().should('not.exist')
            cy.get(LOC.EXTRATO.BUSCAR(transaction)).should('not.exist')
        })

    })
}) 