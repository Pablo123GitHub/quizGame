"use strict";


function Quiz (data, clock) {
    this._questions = data;
    this._index = 0;
    this._clock = clock;
}

Quiz.prototype.getTimeIntervalIfPresent = function(index){
 if (this._questions[index].t !== undefined ){
   return this._questions[index].t*1000 ;
 } else {
   return this.showClockInterval();
 }
}

Quiz.prototype.showClockInterval = function(){
  return this._clock.getIntervalMilSec();
}

Quiz.prototype.setClockInterval = function(timeSec){
  this._clock.setIntervalCountDown(timeSec);
};

Quiz.prototype.askQuestion = function(index) {
        this._index = index;
      return this._questions[index].q;
};

Quiz.prototype.showAnswer = function() {
   return this._questions[this._index].a;
};

Quiz.prototype.isCorrectAnswer = function(answerProvided){
    return this.showAnswer() == answerProvided;
}

Quiz.prototype.showIndex = function(){
    return  parseInt(this._index);
}

Quiz.prototype.setIndex = function(index){
  return this._index = index;
}

Quiz.prototype.questionsLength = function(){
  return parseInt(this._questions.length);
}

Quiz.prototype.isLastQuestionAsked = function(){
  return parseInt(this.questionsLength()) == parseInt(this.showIndex() + 1);
}

module.exports = Quiz;
