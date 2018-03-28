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







})