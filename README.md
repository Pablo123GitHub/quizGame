# Quiz Game

Tech test for HegartyMaths : Build a Quiz Game.


# User stories

```
As a player,
I want only one question to be displayed at a time
so I can focus my attention.

As a player,
I want to see a timer displayed with each question
so I can enjoy a heightened sense of tension.

As a player,
when I submit an answer I want to know immediately if I was right or wrong
so I have instant gratification.

As a player,
if I submit an incorrect answer, I want to see the correct answer
so I can kick myself later.

As a player,
I want to trigger the next question manually
so I have time to recover from my grief or elation at the previous question.


As a quiz master,
I want to provide a list of questions and answers in some sort of file format
so I can prepare these offline.

As a quiz master,
I want the ability to assign a different time limit to each question
so the player is kept on their toes.

As a quiz master,
I want to prevent the player from moving to the next question until they have submitted an answer or the time has run out
to encourage the player not to give up.

As a quiz master,
I want to prevent the player from submitting an empty answer
to encourage guessing.

As a quiz master,
I want to ensure the player can't find the answer by inspecting the page
so that tech-savvy players can't cheat.
```
# Bonus section

How would you support different types of question? For example, some questions might:

have more than one possible answer e.g. Name a US state capital
require multiple answers - e.g. Name two of the six members of Monty Python.

## Getting Started


From Terminal (in the root folder), we can install the dependencies with :

```
npm install

```

In order to run the app, the [nodemon](https://github.com/remy/nodemon) package needs to be installed globally :

```
npm install -g nodemon
```

Then you can run the app with :

```
npm start
```

The app runs on http://localhost:3000/

### Technology used

- [Node JS](https://nodejs.org/en/) with [Express](https://expressjs.com/)
- Vanilla JavaScript and EJS (Express) templates on the frontend
- I first tried [jasmine-node](https://github.com/mhevery/jasmine-node) but then realised that they did not have all the syntax available for jasmine in Node. So I switched to the [jasmine](https://jasmine.github.io/setup/nodejs.html) package.
- [Cypress](https://www.cypress.io/) : end-to-end testing with automated user interactions.

### Testing

Before running the tests, the application needs to be running.
two Terminal instances are necessary : one to run the app, and the other one to run the tests.

First :

```
npm start
```

Then run the tests:

```
npm test
```

The above command will run the unit tests located under spec/UnitTest: Clock-spec.js
and Quiz-spec.js. Note that those tests are related to the JavaScript objects located under
lib/ : Clock.js and Quiz.js

In order to test the customer experience, cypress is being used:

```
npm run cypress:open
```

### More details about the tests :

Three types of tests:

- the tests located under spec/UnitTest are testing the logic:
It should display green messages: if it is green, it means that the tests are passing.

- the tests located under the cypress/integration folder run automated tests. Once you run the following command ```npm run cypress:open``` a new window opens. This window will be running a testing browser that will simulate all the actions of the user as described in the tests.  


## Author

[Pablo](https://github.com/Pablo123GitHub)


## Resources used

[Lynda.com](https://www.lynda.com/JavaScript-tutorials/Vanilla-JavaScript-Binding-Propagation/636139-2.html)

[DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping)

[Udemy](https://www.udemy.com/the-web-developer-bootcamp/)

[Cypress examples](https://example.cypress.io/)
