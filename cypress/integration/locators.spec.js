/// <reference types="cypress" />

const { before } = require("mocha")

describe('Locators', () => {
    before(() => cy.visit('https://wcaquino.me/cypress/componentes.html'))
    beforeEach(() => cy.reload())

    it('WOrking with locators', () => {

    })
})