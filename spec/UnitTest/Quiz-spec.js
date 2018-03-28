"use strict";

var Quiz = require('../../lib/Quiz.js');


describe("Quiz", function(){
    console.log("UNIT TESTING WITH JASMINE JS");
    console.log("****************************");
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

    it("outputs the  question listed at index 0 in the data array", function(){
        expect(quiz.askQuestion(0)).toEqual("first question");
    });

    it("check answer is correct for the index ZERO for which the question has just been asked", function(){
        quiz.askQuestion(0);
        expect(quiz.showAnswer("wrong answer")).toEqual("answer to first q");
    });

    it("check answer is correct for the index ONE for which the question has just been asked", function(){
        quiz.askQuestion(1);
        expect(quiz.showAnswer("wrong answer")).toEqual("answer to second q");
    });








})