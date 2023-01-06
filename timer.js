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

const timesUp = document.getElementById("timesUp");
timesUp.volume = 0.25;

// Counters for Timer
let ts = 0;
let tm = 0;
let th = 0;
let int2 = null;
let alarmOn = null;

// Start Timer
function startTimer() {
  let inputSeconds = timerSecondsInput.value;
  let inputMinutes = timerMinutesInput.value;
  let inputHours = timerHoursInput.value;

  // EA
  if (inputMinutes == "Zelda") {
    alert("It's a secret to everybody.");
    response = prompt("Link... Open your eyes...");
    if (response == "Well excuse me princess")
      alert("This kind of peace is what all great heroes strive for.");
    timerMinutesInput.value = null;
    return;
  }

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
    timerSecondsInput.value = null;
    timerMinutesInput.value = null;
    timerHoursInput.value = null;
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
    timesUp.play();

    alerter.style.display = "block";
    timerCancelButtonDiv.style.display = "none";
    timerEndButton.style.display = "justify";
    clearInterval(int2);
    timerEndButtonDiv.style.display = "block";

    alarmOn = setInterval(() => {
      timesUp.currentTime = 0;
    }, 7500);
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
  clearInterval(alarmOn);
  timesUp.pause();
  timesUp.currentTime = 0;
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

timerStartButton.addEventListener("click", startTimer);
timerCancelButton.addEventListener("click", cancelTimer);
timerEndButton.addEventListener("click", resetTimer);
