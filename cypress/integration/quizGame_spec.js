describe('From clicking on the home page to the answer submission', function() {
  it('takes the user from / to play/0 and then to answer/0', function() {
    cy.visit('http://127.0.0.1:3000/')

    cy.get('form')
      .should('contain', 'Start Game')

    cy.get('input')
      .click()
      .url()
      .should('include', "play/0")

      cy.get('input.answer_submission')
        .type('something')

        cy.get('input.submit')
          .click()

        cy.url()
            .should('include', 'answer/0')
  });

})
