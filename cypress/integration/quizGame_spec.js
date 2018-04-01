describe('Starting the game, answering the first question, the second one is displayed', function() {
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

    it('shows congratulate div element if answer correct + does not show the correct answer and move on to the next question', function() {

        // https://on.cypress.io/submit
        cy.get('.inputClass')
          .find('[type="text"]').type('racecar')
        cy.get('.inputClass').submit()

          .get('#message_congratulation').should('contain', 'CONGRATULATIONS')
          .get('#correct_answer').should('not.contain', 'racecar')
          .get('#next_question')
            .should('contain', 'Next Question')
            .click()

        cy.url()
            .should('include', 'play/1')

    });

    it('shows the wrong answer message + show the correct first answer and move on to the next question', function() {

        // https://on.cypress.io/submit
        cy.get('.inputClass')
          .find('[type="text"]').type('WRONGANSWER')
        cy.get('.inputClass').submit()

          .get('#message_congratulation').should('not.contain', 'CONGRATULATIONS')
          .get('#message_wrong_answer').should('contain', 'is not the correct answer')
          .get('#correct_answer').should('contain', 'racecar')
          .get('#next_question')
            .should('contain', 'Next Question')
            .click()

        cy.url()
            .should('include', 'play/1')

    });



  });

  context("Ends the game after answering last question + give score", function(){
    beforeEach(function(){
      cy.visit('http://127.0.0.1:3000/')

      cy.get('form')
        .should('contain', 'Start Game')

      cy.get('input')
        .click()
        .url()
        .should('include', "play/0")

      cy.get('.inputClass')
        .find('[type="text"]').type('WRONGANSWER')
      cy.get('.inputClass').submit()


      cy.get('#next_question')
        .should('contain', 'Next Question')
        .click()

      cy.get('.inputClass')
        .find('[type="text"]').type('WRONGANSWER')
      cy.get('.inputClass').submit()

      cy.get('#next_question')
        .should('contain', 'Next Question')
        .click()

      cy.url()
        .should('include', 'play/2')

        cy.get('.inputClass')
          .find('[type="text"]').type('WRONGANSWER')
        cy.get('.inputClass').submit()

        cy.url()
          .should('include', "answer/2")



    });

    it("does not contain the Next Question button, and displays the Show Score button", function(){

      cy.get('#next_question')
        .should('not.contain', 'Next Question')

      cy.get('#show_score')
        .should('contain', 'Show Score')

    });

    it("takes you to the score page when you click on Show Score", function(){

      cy.get('#show_score')
        .should('contain', 'Show Score')
        .click()

      cy.url()
        .should('include', 'score')

    });










  })
})
