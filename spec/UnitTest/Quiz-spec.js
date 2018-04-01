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
        expect(quiz.showAnswer()).toEqual("answer to first q");
    });

    it("check answer is correct for the index ONE for which the question has just been asked", function(){
        quiz.askQuestion(1);
        expect(quiz.showAnswer()).toEqual("answer to second q");
    });

    it("returns false if the provided answer is not correct for very last question asked", function(){
        quiz.askQuestion(1);
        expect(quiz.isCorrectAnswer("this is the wrong answer")).toBe(false);
    });

    it("returns true if the provided answer is correct for very last question asked", function(){
        quiz.askQuestion(1);
        expect(quiz.isCorrectAnswer("answer to second q")).toBe(true);
    });

    it("shows index of the current question", function(){
        quiz.askQuestion(1);
        expect(quiz.showIndex()).toEqual(1);
    })

    it("sets the index of the quiz object", function(){
        quiz.setIndex(2);
        expect(quiz.showAnswer()).toEqual("answer to third q")
    });

    it("shows how many questions are included in the quiz", function(){
      expect(quiz.questionsLength()).toEqual(3);
    })

})
