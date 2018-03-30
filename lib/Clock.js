"use strict";

function Clock (timeCountDown) {
  this._countDown = timeCountDown;
  this._TIMENOW = new Date().getTime();
}

Clock.prototype.getTimeNow = function(){
  return this._TIMENOW;
};



module.exports = Clock;
