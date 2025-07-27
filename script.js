let audioButton = document.getElementById('audio');
let videoButton = document.getElementById('video-control');
let initialPlayButton = document.getElementById('initial-play-button');
let audio;
let video = document.querySelector('.background-video');

function initAudio() {
  audio = new Audio('./media/runnin.mp3');
  audio.preload = 'auto';
  audio.loop = true; 
}

function toggleAudio() {
  if (audio && audio.paused) {
    audio.play();
    audioButton.textContent = 'pause';
    audioButton.classList.remove('paused');
  } else if (audio) {
    audio.pause();
    audioButton.textContent = 'play';
    audioButton.classList.add('paused');
  }
}

function toggleVideo() {
  if (video.paused) {
    video.play();
    videoButton.textContent = 'video: on';
    videoButton.classList.add('playing');
    videoButton.classList.remove('paused');
  } else {
    video.pause();
    videoButton.textContent = 'video: off';
    videoButton.classList.remove('playing');
    videoButton.classList.add('paused');
  }
}

if (audioButton) {
  audioButton.addEventListener('click', () => {
    if (!audio) {
      initAudio();
    }
    toggleAudio();
  });
}

if (videoButton) {
  videoButton.addEventListener('click', toggleVideo);
}

if (initialPlayButton) {
  initialPlayButton.addEventListener('click', () => {
    video.play();
    initialPlayButton.classList.add('hidden');
    videoButton.style.display = 'inline-block'; 
  });
}

if (video) {
  video.addEventListener('play', () => {
    videoButton.textContent = 'video: on';
    videoButton.classList.add('playing');
    videoButton.classList.remove('paused');
  });
  
  video.addEventListener('pause', () => {
    videoButton.textContent = 'video: off';
    videoButton.classList.remove('playing');
    videoButton.classList.add('paused');
  });
}

let themeSwitch = document.querySelector('.theme-switch');
let currentTheme = localStorage.getItem('theme') || 'dark';
const themeToggle = document.querySelector('.theme-switch');
const MOON_SYMBOL = '☾';
const SUN_SYMBOL = '☀';

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.textContent = SUN_SYMBOL;
} else {
    themeToggle.textContent = MOON_SYMBOL;
}

// Single event listener for theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme') ? SUN_SYMBOL : MOON_SYMBOL;
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});
