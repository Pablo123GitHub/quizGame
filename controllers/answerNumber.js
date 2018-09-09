// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();
var Quiz = require('../lib/Quiz');
var data = require('../data/data');


router.post("/answer/:numberanswer", function(req,res){
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

router.get("/answer/:numberanswer", function(req,res) {
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

module.exports = router;
