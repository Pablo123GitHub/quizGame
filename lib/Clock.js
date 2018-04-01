"use strict";

function Clock () {
  this._countDown ;
  this._TIMENOW = new Date().getTime();
}

Clock.prototype.getTimeNow = function(){
  return this._TIMENOW;
};

Clock.prototype.getTimeStampFuture = function(){
  return this.getTimeNow() + this._countDown*1000;
};

Clock.prototype.getIntervalMilSec = function(){
  return this._countDown*1000;
};

Clock.prototype.setIntervalCountDown = function(timeSec){
  this._countDown = timeSec;
};

module.exports = Clock;
