let audioButton = document.getElementById('audio');
let videoButton = document.getElementById('video-control');
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

// Initialize video state
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
