
var express = require('express');
var router = express.Router();
var Quiz = require('../lib/Quiz');
var data = require('../data/data');
var Clock = require('../lib/Clock');

router.post("/play/:number", function(req, res){
    var number = req.params.number;
    res.redirect(`/play/${number}`);
});

router.get("/play/:number", function(req, res){
    var session = req.session;
    var indexQuestion = req.params.number;
    var quiz = new Quiz(data,new Clock() );
    quiz.setIndex(indexQuestion);
    quiz.setClockInterval(10);
    var intervalTime = quiz.showClockInterval();

    session.indexQuestion = indexQuestion;

    session.question = quiz.askQuestion(indexQuestion);
    session.answer = quiz.showAnswer();


    res.render("question", {
        questionAtIndex: session.question,
        intervalTime: intervalTime

    })
});

module.exports = router;