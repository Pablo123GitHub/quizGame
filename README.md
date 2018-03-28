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

## Getting Started

From Terminal (in the root folder): 

```
npm install 
npm start

```

The app should then run on http://localhost:3000/

### Technology used 

- [Node JS](https://nodejs.org/en/) with [Express](https://expressjs.com/)
- Vanilla JavaScript and EJS (Express) templates on the frontend 
- [Cheerio](https://github.com/cheeriojs/cheerio) and [request](https://github.com/request/request) to test the DOM 
- [jasmine-node](https://github.com/mhevery/jasmine-node) to test the logic of the JavaScript objects

### Testing

In order to run the tests you need to install [jasmine-node](https://github.com/mhevery/jasmine-node) globally 

```
npm install jasmine-node -g
```

Once the above is installed, you can run the tests with : 

```
npm test
```

Two parts for the tests : 

- the tests located under spec/DomTesting are testing the DOM 
in order to make sure that the page is displaying what we are 
expecting it to display (using Cheerio and request)

- the tests located under spec/UnitTest are testing the logic 
of our JavaScript models (using jasmine-node)

### More details about the tests : 

I have used the nice verbose of jasmine-node to show information about the tests. 
However, the DOM tests are not so nicely presented because I am simply leveraging 
cheerio and request to check that we have the relevant content on the DOM. 

When you run the "npm test" command on terminal, you will see the sleek nice green
information from jasmine-node, whereas at the bottom you will see my console.log 
messages related to the DOM tests : you should see only `true` for the tests to pass.
Any `false` listed in this section means that the test is failing.


## Author

[Pablo](https://github.com/Pablo123GitHub)


## Resources used

[Lynda.com](https://www.lynda.com/JavaScript-tutorials/Vanilla-JavaScript-Binding-Propagation/636139-2.html)

[DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping)

[Udemy](https://www.udemy.com/the-web-developer-bootcamp/)