var express = require('express');
var app = express();
var session = require('express-session');

var data = require('./data/data.js');
var Quiz = require('./lib/Quiz.js');

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


app.get("/", function(req,res){
    res.render("index");
});

app.post("/play/:number", function(req, res){
   var sessData = req.session;
   var number = req.params.number;
   var indexUp = parseInt(number) +1;
   sessData.indexUp = indexUp;
   sessData.pathUp = "/play/" + String(indexUp)
    sessData.indexNumber = number;
    res.redirect(`/play/${number}`);
});

app.get("/play/:number", function(req, res){
    var sessData = req.session;
    sessData.quiz = new Quiz(data);
    var quiz = sessData.quiz;
    var indexQuestion = sessData.indexNumber;
    console.log(quiz.askQuestion(sessData.indexNumber));
   res.render("question", {indexUp: sessData.indexUp,
       questionAtIndex: quiz.askQuestion(indexQuestion)})
});

app.post("/answer/:numberanswer", function(req,res){
   var sessData = req.session;
   var numberAnswer = req.params.numberanswer;
   var indexNumber = String(sessData.indexNumber);
      console.log("REQUEST", req);
      console.log("RESPONSE", res);
   res.redirect(`/answer/${indexNumber}`);

});

app.get("/answer/:numberanswer", function(req,res){

    res.send("THIS IS THE NUMBERANSWER PAGE")

});

app.listen(3000, function(){
    console.log("Express app running on port 3000")
});
