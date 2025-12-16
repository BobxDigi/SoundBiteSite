// ----------------------------------------
// File: sound_page.js
// Author: J. Johnson II
// Description: Very simple JavaScript to play
//              and pause a sound on button click.
// ----------------------------------------

// Comment: Get a reference to the audio element
var ufoSound = document.getElementById("ufoSound");

// Comment: Get a reference to the Play button
var playBtn = document.getElementById("playBtn");

// Comment: Get a reference to the Pause button
var pauseBtn = document.getElementById("pauseBtn");

// Comment: Get a reference to the status text div
var statusText = document.getElementById("statusText");

// Comment: Attach a function to the Play button click using onclick (not addEventListener)
playBtn.onclick = function() {
    // Comment: Call play on the audio element
    ufoSound.play();
    // Comment: Update the status text using innerHTML
    statusText.innerHTML = "Playing UFO takeoff sound...";
};

// Comment: Attach a function to the Pause button click using onclick (not addEventListener)
pauseBtn.onclick = function() {
    // Comment: Pause the audio element
    ufoSound.pause();
    // Comment: Update the status text using innerHTML
    statusText.innerHTML = "Sound is paused.";
};
