// Video
var video = document.getElementById("video");

// Buttons
var playButton = document.getElementById("play-pause");

var resetButton = document.getElementById("revert");
// function stop() {
//  var pauseButton = document.getElementsByTagName('audio')[0];
//   video.pause();
//   video.currentTime = 0;
// }

$(document).ready(function() {
  // Event listener for the play/pause button
  playButton.addEventListener("click", function() {
     video.play();
  });

  resetButton.addEventListener("click", function() {
    video.pause();
    video.currentTime = 0;  
  })
});