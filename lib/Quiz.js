"use strict";


function Quiz (data) {
    this._questions = data;
    this._index = 0;

}


Quiz.prototype.askQuestion = function(index) {
        this._index = index;
      return this._questions[index].q;
};

Quiz.prototype.showAnswer = function() {
   return this._questions[this._index].a;
};

Quiz.prototype.checkAnswer = function(answerProvided){
    return this.showAnswer() == answerProvided;
}



module.exports = Quiz;
