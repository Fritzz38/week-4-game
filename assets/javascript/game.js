
$(document).ready(function() {
 
 var counter = 0;
 var win = 0;
 var loss = 0;
 
 $("#win").html(win);
 $("#loss").html(loss);

 var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

 $("#score").html(targetNumber);

 var redNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
 var blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
 var yellowNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
 var greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;



$("#red").on("click", function() {
    counter += redNumber;
    $("#tally").html(counter);
    logic();
})

$("#blue").on("click", function() {
    counter += blueNumber;
    $("#tally").html(counter);
    logic();
})

$("#yellow").on("click", function() {
    counter += yellowNumber;
    $("#tally").html(counter);
    logic();
})

$("#green").on("click", function() {
    counter += greenNumber;
    $("#tally").html(counter);
    logic();
})


function logic () {
      if (counter === targetNumber) {
       win++;
       console.log(win);
       $("#win").html(win);
       reset();
       
      }
      else if (counter >= targetNumber) {
       loss++;
       console.log(loss);
       $("#loss").html(loss);
       reset();
      }
}


function reset() {
	counter = 0;
    $("#tally").html(counter);
    var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#score").html(targetNumber);
    redNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    yellowNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

}) //---> THE END

