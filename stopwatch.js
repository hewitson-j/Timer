// Stopwatch Elements
const startDiv = document.getElementById("start-button");
const endDiv = document.getElementById("pause-stop-buttons");
const startStopwatch = document.getElementById("stopwatch-start");
const pauseStopwatch = document.getElementById("stopwatch-pause");
const stopStopwatch = document.getElementById("stopwatch-stop");

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const miliseconds = document.getElementById("miliseconds");

// Counters for Stopwatch
let s = 0;
let ms = 0;
let m = 0;
let h = 0;

let int = null;
let paused = false;

// Start Stopwatch Function
function startStopwatchFunction() {
  startDiv.style.display = "none";
  endDiv.style.display = "block";

  int = setInterval(stopwatch, 10);
}

// Pause Stopwatch Function
function pauseStopwatchFunction() {
  clearInterval(int);
  if (paused === false) {
    paused = true;
    pauseStopwatch.value = "Continue";
  } else {
    paused = false;
    pauseStopwatch.value = "Pause";
    int = setInterval(stopwatch, 10);
  }
}

// Stopwatch, called in startStopwatch() that changes interface and increments time values.
function stopwatch() {
  ms += 10;
  if (ms < 100) {
    miliseconds.innerText = "0" + ms;
  } else {
    miliseconds.innerText = ms;
  }

  if (ms >= 999) {
    miliseconds.textContent = "000";
    ms = 0;
    s++;
    if (s < 10) {
      seconds.textContent = "0" + s;
    } else {
      seconds.textContent = s;
    }
  }
  if (s >= 60) {
    seconds.textContent = "00";
    s = 0;
    m++;
    if (m < 10) {
      minutes.textContent = "0" + m;
    } else {
      minutes.textContent = m;
    }
  }
  if (m >= 60) {
    minutes.textContent = "00";
    m = 0;
    h++;
  }
}

// Stop/Reset Stopwatch Function
function stopStopwatchFunction() {
  s = 0;
  m = 0;
  ms = 0;
  h = 0;
  endDiv.style.display = "none";
  startDiv.style.display = "block";
  clearInterval(int);
  paused = false;
  pauseStopwatch.value = "Pause";

  hours.textContent = "0";
  minutes.textContent = "00";
  seconds.textContent = "00";
  miliseconds.textContent = "000";
}

startStopwatch.addEventListener("click", startStopwatchFunction);
stopStopwatch.addEventListener("click", stopStopwatchFunction);
pauseStopwatch.addEventListener("click", pauseStopwatchFunction);
