describe('From clicking on the home page to the answer submission for the first question', function() {
  context('get the game started and submit answer', function(){
    beforeEach(function(){
      cy.visit('http://127.0.0.1:3000/')

      cy.get('form')
        .should('contain', 'Start Game')

      cy.get('input')
        .click()
        .url()
        .should('include', "play/0")

    })

    it('takes the user from / to play/0 and then to answer/0', function() {

        cy.get('input.answer_submission')
          .type('something')

          cy.get('input.submit')
            .click()

          cy.url()
              .should('include', 'answer/0')
    });

    it('checks that the timer exists when you reach first question', function() {

        cy.get('.timer_class')
          .should('contain', 'timer placeholder')
    });

    it('shows congratulate div element if answer correct + does not show the correct answer', function() {

        // https://on.cypress.io/submit
        cy.get('.inputClass')
          .find('[type="text"]').type('racecar')
        cy.get('.inputClass').submit()
          .get('#message_congratulation').should('contain', 'CONGRATULATIONS')
          .get('#correct_answer').should('not.contain', 'racecar')

    });

    it('shows the wrong answer message + show the correct first answer', function() {

        // https://on.cypress.io/submit
        cy.get('.inputClass')
          .find('[type="text"]').type('WRONGANSWER')
        cy.get('.inputClass').submit()

          .get('#message_wrong_answer').should('not.contain', 'CONGRATULATIONS')
          .get('#message_wrong_answer').should('contain', 'This is not the correct answer')
          .get('#correct_answer').should('contain', 'racecar')

    });

  })
})
