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

Clock.prototype.extractHourFromMilSec = function(timeMilSec){
  return Math.floor((timeMilSec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
};

Clock.prototype.extractMinFromMilSec = function(timeMilSec) {
  return Math.floor((timeMilSec % (1000 * 60 * 60)) / (1000 * 60));
}

Clock.prototype.extractSecFromMilSec = function(timeMilSec) {
  return Math.floor((timeMilSec % (1000 * 60)) / 1000);
}





module.exports = Clock;
