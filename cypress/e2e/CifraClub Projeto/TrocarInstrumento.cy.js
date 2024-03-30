/// <reference types="Cypress"/>

describe('Teste tela de trocar de instrumento.', () => {
    it('Ao clicar, deve abrir o painel para trocar para outro instrumento.', () => {
        cy.visit("https://www.cifraclub.com.br/the-outfield/your-love/") // Abrir o Site

        cy.get('#js-c-versions').click() // Clicar no ícone do Tom.
        cy.get('#c-ver').should('be.visible') // Verifica se a tabela está vísivel.



    });
});
