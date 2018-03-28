describe('Starting the game', function() {
  it('clicking on Start Game takes the user to /play/0', function() {
    cy.visit('http://127.0.0.1:3000/')     // 1.

    cy.get('form')               // 9.
      .should('contain', 'Start Game')

    cy.get('input')
      .click()
      .url()
      .should('include', "play/0")
  });

  
})
