(function(exports){
  exports.Timer = function(){

buildTimer = function(timeInterval){

// // Set the date we're counting down to
var countDownDate = new Date().getTime() + timeInterval;

// // Update the count down every 1 second
 var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer_div_bis"
  document.getElementById("timer_div_bis").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer_div_bis").innerHTML = "Time is up, please click on Submit";
      document.getElementById("input_answer_submission").disabled = true;
  }
}, 1000);
}

return {
  buildTimer: buildTimer
}
  }


})(this)
