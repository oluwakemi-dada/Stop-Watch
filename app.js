const hrsEl = document.querySelector('.hrs');
const minsEl = document.querySelector('.mins');
const secsEl = document.querySelector('.secs');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

let seconds, minutes, hours;
let timer;
let inactive;

const init = () => {
  (seconds = 0), (minutes = 0), (hours = 0), (inactive = true);
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
  startPause();
};

const stopInterval = () => {
  clearTimeout(timer);
};

startBtn.addEventListener('click', () => {
  if (inactive) {
    inactive = false;
    startInterval();
  }
});

pauseBtn.addEventListener('click', () => {
  stopInterval(timer);
});

resetBtn.addEventListener('click', () => {
  clearTimeout(timer);
  init();
});

init();
