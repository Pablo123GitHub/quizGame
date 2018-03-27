"use strict";

var Quiz = require('../lib/Quiz.js');


describe("Quiz", function(){
    var quiz ;
    var data;

    beforeEach(function(){
        data = [
            {
                q:"first question",
                a: "answer to first q"
            },
            {
                q:"second question",
                a: "answer to second q"
            },
            {
                q:"third question",
                a: "answer to third q"
            }
        ];
        quiz = new Quiz(data);

    });

    it("produces the  question listed at index 0 : the first question", function(){
        expect(quiz.askQuestion(0)).toEqual("first question");
    });







})