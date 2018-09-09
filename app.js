var express = require('express');
var app = express();

var session = require('express-session');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));
app.use(session({
    secret: 'this-is-a-secret-token',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
}));
app.set('view engine', 'ejs');

var index = require('./controllers/index')
var questionNumber = require ('./controllers/questionNumber')
var answerNumber = require ('./controllers/answerNumber')
var score = require('./controllers/score')

app.use('/', index);
app.use('/', questionNumber);
app.use('/', answerNumber);
app.use('/', score);


app.listen(3000, function(){
    console.log("Express app running on port 3000")
});

