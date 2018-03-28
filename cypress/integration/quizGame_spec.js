describe('Post Resource', function() {
  it('Creating a New Post', function() {
    cy.visit('http://127.0.0.1:3000/')     // 1.

    cy.get('form')               // 9.
      .should('contain', 'Start Game')

    cy.get('input')
      .click()
      .url()
      .should('include', "play/0")

  })
})
