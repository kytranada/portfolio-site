let play = document.getElementById('audio');
let audio;

function initAudio() {
  audio = new Audio('./media/runnin.mp3');
  audio.preload = 'auto';
  audio.loop = true; 
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

let themeSwitch = document.querySelector('.theme-switch');
let currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
  document.body.classList.add('light-theme');
}

if (themeSwitch) {
  themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
  });
}
