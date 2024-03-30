/// <reference types="Cypress"/>

describe('Teste de Reset', () => {
    it('Deve passar cada semitom e testar o reset ao tom original designado, testando o botão reset.', () => {
        cy.visit("https://www.cifraclub.com.br/the-outfield/your-love/")

        cy.get('#cifra_tom > .js-modal-trigger').click() // Clica no tom da música
        cy.get('[data-cy="modalTone"]').should('be.visible') // Verifica se o quadro está visível

        cy.get('[data-cy="modalTone-increase"]').click() //Aumenta um semitom.
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'F') // Verifica se foi aumentado para fá.
        cy.get('#js-k-m-reset').click() // Clica no botão de resetar
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E') // Verifica se foi corretamente resetado para mi.
        cy.get('[data-cy="modalTone-increase"]').dblclick() // Clique duplo para aumentar o semitom.
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'F#') // Verifica...
        cy.get('#js-k-m-reset').click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E')
        cy.get('[data-cy="modalTone-increase"]').dblclick().click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'G')
        cy.get('#js-k-m-reset').dblclick().click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E')
        cy.get('[data-cy="modalTone-increase"]').dblclick().dblclick()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'Ab')
        cy.get('#js-k-m-reset').click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E')
        cy.get('[data-cy="modalTone-increase"]').dblclick().dblclick().click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'A')
        cy.get('#js-k-m-reset').click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E')
        cy.get('[data-cy="modalTone-increase"]').dblclick().dblclick().dblclick()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'Bb')
        cy.get('#js-k-m-reset').click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E')
        cy.get('[data-cy="modalTone-increase"]').dblclick().dblclick().dblclick().click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'B')
        cy.get('#js-k-m-reset').click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E')
        cy.get('[data-cy="modalTone-increase"]').dblclick().dblclick().dblclick().dblclick()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'C')
        cy.get('#js-k-m-reset').click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E')
        cy.get('[data-cy="modalTone-increase"]').dblclick().dblclick().dblclick().dblclick().click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'Db')
        cy.get('#js-k-m-reset').click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E')
        cy.get('[data-cy="modalTone-increase"]').dblclick().dblclick().dblclick().dblclick().dblclick()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'D')
        cy.get('#js-k-m-reset').click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E')
        cy.get('[data-cy="modalTone-increase"]').dblclick().dblclick().dblclick().dblclick().dblclick().click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'Eb')
        cy.get('#js-k-m-reset').click()
        cy.get('#cifra_tom > .js-modal-trigger').should('contain', 'E')
    });
});


