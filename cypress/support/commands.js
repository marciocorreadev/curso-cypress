// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import LOC from "./locators"

Cypress.Commands.add("clickAlert", (locator, message) => {
    cy.get(locator).click();
    cy.on('window:alert', msg => expect(msg).to.be.equal(message))
})

Cypress.Commands.add("login", (email, password) => {

    cy.get(LOC.LOGIN.USER).type(email)
    cy.get(LOC.LOGIN.PASSWORD).type(password)

    cy.get(LOC.LOGIN.BTN_LOGIN).click();

    cy.get(LOC.MESSAGE, { timeout: 5000 })
        .should('contain', 'Bem vindo')
        .click()
        .should('not.exist')
})

Cypress.Commands.add("resetApp", () => {
    cy.get(LOC.MENU.SETTINGS).click()
    cy.get(LOC.MENU.RESET).click()
})

