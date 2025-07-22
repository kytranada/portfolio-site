let play = document.getElementById('audio');
let audio;

function initAudio() {
  audio = new Audio('./media/runnin.mp3');
  audio.preload = 'auto';
  audio.loop = true; // Add this if you want the audio to loop
}

function playAudio() {
  if (audio && audio.paused) {
    audio.play();
    play.textContent = 'pause';
    play.classList.remove('paused');
  } else if (audio) {
    audio.pause();
    play.textContent = 'play';
    play.classList.add('paused');
  }
}

if (play) {
  play.addEventListener('click', () => {
    if (!audio) {
      initAudio();
    }
    playAudio();
  });
}
