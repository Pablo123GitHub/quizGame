(function(exports){
  exports.Timer = function(){
    var timerDivLocation = document.getElementById("form_answer");

buildTimer = function(display){

var timerDivElement = document.createElement("div");
timerDivElement.className = "timer_class";
timerDivElement.innerHTML = display;
timerDivLocation.appendChild(timerDivElement);
}

return {
  buildTimer: buildTimer
}
  }


})(this)
