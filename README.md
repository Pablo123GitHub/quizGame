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

The app should then run on http://localhost:3000/

### Technology used

- [Node JS](https://nodejs.org/en/) with [Express](https://expressjs.com/)
- Vanilla JavaScript and EJS (Express) templates on the frontend
- I first tried [jasmine-node](https://github.com/mhevery/jasmine-node) but then realised that they did not have all the syntax available for jasmine. So I switched to the [jasmine](https://jasmine.github.io/setup/nodejs.html) package by the same people who maintain jasmine
- [Cypress](https://www.cypress.io/) : end-to-end testing with automated user interactions.

### Testing

In order to run the tests you need to install [jasmine-node](https://github.com/mhevery/jasmine-node) globally

```
npm install jasmine-node -g
```

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

The above will run the unit tests which run tests on the JavaScript objects
located under the lib folder.

In order to test the customer experience, cypress is being used:

```
npm run cypress:open
```


### More details about the tests :

Three types of tests:

- the tests located under spec/UnitTest are testing the logic
of our JavaScript models (using jasmine-node). I have used the nice verbose of jasmine-node to show information about the tests.
It should display green messages: if it is green, it means that the tests are passing.

- the tests located under spec/DomTesting are testing the DOM
in order to make sure that the page is displaying what we are
expecting it to display (using Cheerio and request). However this does
not allow us to test any interactions with the browser. So I just created
one test until I realised that there was no user experience testing

- the tests located under the cypress/integration folder run automated tests. Upon running the ```npm run cypress:open``` command, a tool will open which will show the files in which the tests were written. Cypress will then pilot the testing
as if a user was using the browser.



## Author

[Pablo](https://github.com/Pablo123GitHub)


## Resources used

[Lynda.com](https://www.lynda.com/JavaScript-tutorials/Vanilla-JavaScript-Binding-Propagation/636139-2.html)

[DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping)

[Udemy](https://www.udemy.com/the-web-developer-bootcamp/)
