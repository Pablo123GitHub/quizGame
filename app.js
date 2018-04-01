var express = require('express');
var app = express();
var session = require('express-session');

var data = require('./data/data.js');
var Quiz = require('./lib/Quiz.js');
var Clock = require('./lib/Clock.js');

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
   var number = req.params.number;
    res.redirect(`/play/${number}`);
});

app.get("/play/:number", function(req, res){
    var session = req.session;
    var indexQuestion = req.params.number;
    var quiz = new Quiz(data,new Clock() );
    quiz.setClockInterval(10);

    var intervalTime = quiz.showClockInterval();

    session.indexQuestion = indexQuestion;
    quiz.setIndex(indexQuestion);
    session.question = quiz.askQuestion(indexQuestion);
    session.answer = quiz.showAnswer();


   res.render("question", {
     questionAtIndex: session.question,
     intervalTime: intervalTime

   })
});

app.post("/answer/:numberanswer", function(req,res){
  var session = req.session;
  var numberAnswer = session.indexQuestion;
  var answerSubmitted = req.body.answerSubmission;

  var quiz = new Quiz(data);
  quiz.setIndex(numberAnswer);
  var isCorrectAnswer = quiz.isCorrectAnswer(answerSubmitted);
  var isLastQuestionAsked = quiz.isLastQuestionAsked();


  session.isCorrectAnswer = isCorrectAnswer;
  session.answerSubmitted = answerSubmitted;
  session.isLastQuestionAsked = isLastQuestionAsked;

   res.redirect(`/answer/${numberAnswer}`);
});

app.get("/answer/:numberanswer", function(req,res) {
  var session = req.session;
  var correctAnswer = session.answer;
  var answerSubmitted = session.answerSubmitted;
  var nextQuestionRoute = "/play/" + String(parseInt(session.indexQuestion) +1) ;

  var isCorrectAnswer = session.isCorrectAnswer;
  var isLastQuestionAsked = session.isLastQuestionAsked ;

    res.render("answer", {
      isCorrectAnswer: isCorrectAnswer,
      correctAnswer: correctAnswer,
      answerSubmitted: answerSubmitted,
      nextQuestionRoute: nextQuestionRoute,
      isLastQuestionAsked: isLastQuestionAsked
    })

});

app.post("/score", function(req, res){
  res.render("score");
});

app.listen(3000, function(){
    console.log("Express app running on port 3000")
});
