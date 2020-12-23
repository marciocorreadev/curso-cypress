/// <reference types="cypress"/>

describe("Sync", () => {
    before(() => cy.visit("https://wcaquino.me/cypress/componentes.html"));
    beforeEach(() => cy.reload());

    it("Deve aguardar elemento estar doisponível.", () => {
        cy.get("#novoCampo").should("not.exist");
        cy.get("#buttonDelay").click();
        cy.get("#novoCampo").should("not.exist");
        cy.get("#novoCampo").should("exist");
        cy.get("#novoCampo").type("Funciona");
    });

    it("Deve fazer retrys", () => {
        cy.get("#buttonDelay").click();
        cy.get("#novoCampo").should("not.exist");
        // .should('exist')
    });

    it("Uso do find", () => {
        cy.get("#buttonList").click();

        // cy.get('#lista li span')
        //     .find('span')
        //     .should('contain', 'Item 1')

        cy.get("#lista li span")
            .should("contain", "Item 1")
            .should("contain", "Item 2");
    });

    it.only("Uso do timeout", () => {
        // cy.get('#buttonDelay').click();

        // cy.get('#novoCampo')
        //     .should('exist')

        cy.get('#buttonList').click();
        cy.wait(5000);
        cy.get('#lista li span')
            .should('contain', 'Item 2')

        cy.get("#buttonListDOM").click();

        cy.get("#lista li span", { timeout: 6000 })
            .should("have.length", 1);


        cy.get("#lista li span", { timeout: 6000 }).should("have.length", 2);
    });

    it.only("Should vs Then", () => {
        cy.get("#buttonListDOM").then((e) => {
            expect(e).to.have.length(1);
            // pode retornar algo,
            // aceita get dentro
        });
        cy.get("#buttonListDOM").should((e) => {
            expect(e).to.have.length(1);
            // Should retorna retenta fazer oque foi solicitado quando algum erro acontece.
            //não retorna algo, então não pode ser usado como função
            //Não aceita get dentro, entra em loop
        });
    });
});
