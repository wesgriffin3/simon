var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var playerPattern = [];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

// puts selected button into array
$(document).ready(function () {
  $(".btn").click(function () {
    playerPattern.push(this.id);
    console.log(playerPattern);
  });
});

// button sound on click
function playSound() {
  $("#" + currentColor).click(function () {
    var audio = new Audio("sounds/" + $(this.id) + ".mp3");
    audio.play();
  });
}

// flash when button is pressed
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
