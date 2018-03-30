"use strict";

function Clock (timeCountDown) {
  this._countDown = timeCountDown;
  this._TIMENOW = new Date().getTime();
}

Clock.prototype.getTimeNow = function(){
  return this._TIMENOW;
};

Clock.prototype.getTimeStampFuture = function(){
  return this.getTimeNow() + this._countDown*1000;
};

Clock.prototype.formatTime = function(hours, minutes, seconds){
  return hours + "h " + minutes + "m " + seconds + "s";
};




module.exports = Clock;
