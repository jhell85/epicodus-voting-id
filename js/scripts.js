$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
  
  if (age < 18) {
    $("#voting-under").show();
  }
  else {
    $("#voting-over").show();
  }
})


