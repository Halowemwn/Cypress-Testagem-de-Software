/// <reference types="Cypress"/>

describe('Teste AumentarTom', () => {
    it('Deve diminuir cada semitom pelo botão designado, verificando a ausência, falha de ordem e strings avulsas', () => {
        cy.visit("https://www.cifraclub.com.br/the-outfield/your-love/") // Abrir o Site

        cy.get('#cifra_tom > .js-modal-trigger').click() // Clicar no ícone do Tom.
        cy.get('[data-cy="modalTone"]').should('be.visible') // Verifica se a tabela está vísivel.

        // Lista de tons musicais, Array
        const tonsMusicais = ['Eb', 'D', 'Db', 'C', 'B', 'Bb', 'A', 'Ab', 'G', 'F#', 'F', 'E'];

        // Iterar sobre cada tom musical, Para cada tom, clique e verifique o tom.
        tonsMusicais.forEach(tom => {
            // Clicar para aumentar o tom
            cy.get('[data-cy="modalTone-decrease"]').click();
            
            // Verificar se o tom atual corresponde ao tom musical atual
            cy.get('#cifra_tom > .js-modal-trigger').should('contain', tom);
        });
    });
});


