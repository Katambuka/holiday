const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);

// play/pause audio
playBtn.addEventListener("click", () => {
   // check if context is in suspended state (autoplay policy)
   if (audioCtx.state === "suspended") {
     audioCtx.resume();
   }
 
   // if track is stopped, play it
   if (playBtn.getAttribute("class") === "paused") {
     audioElement.play();
     playBtn.setAttribute("class", "playing");
     playBtn.textContent = "Pause";
     // if track is playing, stop it
   } else if (playBtn.getAttribute("class") === "playing") {
     audioElement.pause();
     playBtn.setAttribute("class", "paused");
     playBtn.textContent = "Play";
   }
 });
 
 // if track ends
 audioElement.addEventListener("ended", () => {
   playBtn.setAttribute("class", "paused");
   playBtn.textContent = "Play";
 });

 // volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});

audioSource.connect(gainNode).connect(audioCtx.destination);

const em = document.createElement("em"); // create a new em element
const para = document.querySelector("p"); // reference an existing p element
em.textContent = "Hello there!"; // give em some text content
para.appendChild(em); // embed em inside para

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// play/pause audio
playBtn.addEventListener("click", () => {
  // check if context is in suspended state (autoplay policy)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // if track is stopped, play it
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // if track is playing, stop it
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// if track ends
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});

 