"use strict";


function Quiz (data) {
    this._questions = data;

}


Quiz.prototype.askQuestion = function(index) {
      return this._questions[index].q;
};



module.exports = Quiz;
