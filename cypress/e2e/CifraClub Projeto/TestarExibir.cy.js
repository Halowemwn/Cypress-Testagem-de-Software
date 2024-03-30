/// <reference types="Cypress"/>

describe('Teste Botão Exibir', () => {
    it('Botão exibir deve abrir uma aba especifica com sucesso', () => {
        cy.visit("https://www.cifraclub.com.br/the-outfield/your-love/") // Abrir o Site

        cy.get('#side-exibir').click() // Clicar no ícone exibir.
        cy.get('.modal.modal--left.js-mod-relative.modalDisplayOptions.modalDisplayOptions--left').should('be.visible') // Verifica se a tabela está vísivel.


    });
});