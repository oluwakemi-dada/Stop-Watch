const hrsEl = document.querySelector('.hrs');
const minsEl = document.querySelector('.mins');
const secsEl = document.querySelector('.secs');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const ring = document.querySelector('.ring');

let seconds, minutes, hours;
let timer;
let active;

const init = () => {
  (seconds = 0), (minutes = 0), (hours = 0), (active = false);
  secsEl.textContent = `0${seconds}`;
  minsEl.textContent = `0${minutes}`;
  hrsEl.textContent = `0${hours}`;
};

const stopwatch = () => {
  seconds++;
  secsEl.textContent = seconds;

  // FORMAT SECONDS ON UI
  if (seconds < 10) {
    secsEl.textContent = `0${seconds}`;
  } else if (seconds > 9) {
    secsEl.textContent = seconds;
  }

  // AFTER 60SECS
  if (seconds === 60) {
    minutes++;
    seconds = 0;
    secsEl.textContent = `0${seconds}`;
    if (minutes < 10) {
      minsEl.textContent = `0${minutes}`;
    } else if (minutes > 9) {
      minsEl.textContent = minutes;
    }

    // AFTER 60 MINS
  } else if (minutes === 60) {
    hours++;
    minutes = 0;
    minsEl.textContent = `0${minutes}`;
    if (hours < 10) {
      hrsEl.textContent = `0${hours}`;
    } else if (hours > 9) {
      hrsEl.textContent = hours;
    }
  }
};

const startInterval = () => {
  timer = setInterval(stopwatch, 1000);
};

const stopInterval = () => {
  clearTimeout(timer);
};

// EVENT LISTENERS
startBtn.addEventListener('click', () => {
  if (active === false) {
    active = true;
    ring.classList.add('animated');
    startInterval();
  }
});

pauseBtn.addEventListener('click', () => {
  ring.classList.remove('animated');
  stopInterval();
  active = false;
});

resetBtn.addEventListener('click', () => {
  ring.classList.remove('animated');
  stopInterval();
  init();
});

init();
