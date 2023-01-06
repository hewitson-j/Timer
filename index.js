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

// Timer Elements
const timeInputDiv = document.getElementById("timer-input");
const timerStartButtonDiv = document.getElementById("timer-set");
const timerCancelButtonDiv = document.getElementById("timer-cancel");
const timerEndButtonDiv = document.getElementById("timer-end");

const timerStartButton = document.getElementById("timer-start-button");
const timerEndButton = document.getElementById("timer-stop-button");
const timerCancelButton = document.getElementById("timer-cancel-button");

const timerSecondsInput = document.getElementById("timer-seconds-input");
const timerMinutesInput = document.getElementById("timer-minutes-input");
const timerHoursInput = document.getElementById("timer-hours-input");

const timerSecondsDisplay = document.getElementById("timer-seconds");
const timerMinutesDisplay = document.getElementById("timer-minutes");
const timerHoursDisplay = document.getElementById("timer-hours");

const alerter = document.getElementById("alerter");

// Counters for Timer
let ts = 0;
let tm = 0;
let th = 0;
let int2 = null;

// Start Timer
function startTimer() {
  let inputSeconds = timerSecondsInput.value;
  let inputMinutes = timerMinutesInput.value;
  let inputHours = timerHoursInput.value;

  inputSeconds = parseInt(inputSeconds);
  inputMinutes = parseInt(inputMinutes);
  inputHours = parseInt(inputHours);

  if (isNaN(inputSeconds)) {
    inputSeconds = 0;
  }
  if (isNaN(inputMinutes)) {
    inputMinutes = 0;
  }
  if (isNaN(inputHours)) {
    inputHours = 0;
  }

  if (inputHours == 0 && inputMinutes == 0 && inputSeconds == 0) {
    alert(
      "Time is empty or has invalid characters. Please put in a valid time. \n 1) At least one box must be filled with one number. \n 2) Only acceptable characters are numbers \n 3) No letters, spaces, or special characters allowed."
    );
    return;
  }

  timeInputDiv.style.display = "none";

  ts = inputSeconds;
  tm = inputMinutes;
  th = inputHours;

  if (inputSeconds < 10) {
    timerSecondsDisplay.textContent = "0" + inputSeconds;
  } else {
    timerSecondsDisplay.textContent = inputSeconds;
  }
  if (inputMinutes < 10) {
    timerMinutesDisplay.textContent = "0" + inputMinutes;
  } else {
    timerMinutesDisplay.textContent = inputMinutes;
  }
  if (inputHours < 10) {
    timerHoursDisplay.textContent = "0" + inputHours;
  } else {
    timerHoursDisplay.textContent = inputHours;
  }

  timerStartButtonDiv.style.display = "none";
  timerCancelButtonDiv.style.display = "block";

  int2 = setInterval(countdown, 1000);
}

function countdown() {
  ts -= 1;
  if (ts < 10) {
    timerSecondsDisplay.textContent = "0" + ts;
  } else {
    timerSecondsDisplay.textContent = ts;
  }

  if (ts == 0 && tm == 0 && th == 0) {
    timerHoursDisplay.textContent = "0";
    timerMinutesDisplay.textContent = "00";
    timerSecondsDisplay.textContent = "00";
    alerter.style.display = "block";
    timerCancelButtonDiv.style.display = "none";
    timerEndButton.style.display = "justify";
    clearInterval(int2);
    timerEndButtonDiv.style.display = "block";
  } else if (ts < 0 && tm > 0) {
    ts = 59;
    tm -= 1;
    timerSecondsDisplay.textContent = ts;
    if (tm < 10) {
      timerMinutesDisplay.textContent = "0" + tm;
    } else {
      timerMinutesDisplay.textContent = tm;
    }
  } else if (tm < 0 && th > 0) {
    tm = 59;
    th -= 1;
    timerMinutesDisplay.textContent = tm;
    timerHoursDisplay.textContent = th;
  } else if (th > 0 && ts < 0) {
    th -= 1;
    tm = 59;
    ts = 59;
    timerSecondsDisplay.textContent = ts;
    timerMinutesDisplay.textContent = tm;
    timerHoursDisplay.textContent = th;
  }
}

function cancelTimer() {
  clearInterval(int2);
  ts = 0;
  tm = 0;
  th = 0;
  timerCancelButtonDiv.style.display = "none";
  timerStartButtonDiv.style.display = "block";
  timeInputDiv.style.display = "block";
  timerSecondsInput.value = null;
  timerMinutesInput.value = null;
  timerHoursInput.value = null;
  timerHoursDisplay.textContent = "0";
  timerMinutesDisplay.textContent = "00";
  timerSecondsDisplay.textContent = "00";
}

// Reset Timer Button/Stop Alerting that time's up
function resetTimer() {
  ts = 0;
  tm = 0;
  th = 0;
  timerCancelButtonDiv.style.display = "none";
  timerStartButtonDiv.style.display = "block";
  timerEndButtonDiv.style.display = "none";
  timeInputDiv.style.display = "block";
  timerSecondsInput.value = null;
  timerMinutesInput.value = null;
  timerHoursInput.value = null;
  timerHoursDisplay.textContent = "0";
  timerMinutesDisplay.textContent = "00";
  timerSecondsDisplay.textContent = "00";
  alerter.style.display = "none";
}

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

timerStartButton.addEventListener("click", startTimer);
timerCancelButton.addEventListener("click", cancelTimer);
timerEndButton.addEventListener("click", resetTimer);
