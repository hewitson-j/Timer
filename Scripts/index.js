timerButton = document.getElementById("timer-mode");
stopwatchButton = document.getElementById("stopwatch-mode");
alarmButton = document.getElementById("alarm-mode");

countdownTimerDiv = document.getElementById("countdown-div");
stopwatchDiv = document.getElementById("stopwatch-div");
alarmDiv = document.getElementById("alarm-div");

openingHeader = document.getElementById("opening-header");
modes = document.getElementById("mode");
openAppButton = document.getElementById("open-app");

timerActive = false;
stopwatchActive = false;
alarmActive = false;

modes.style.display = "none";
countdownTimerDiv.style.display = "none";
stopwatchDiv.style.display = "none";
alarmDiv.style.display = "none";

function begin() {
  openingHeader.style.display = "none";
  modes.style.display = "block";
}

function activateTimer() {
  timerActive = true;
  stopwatchActive = false;
  alarmActive = false;
  timerButton.style.backgroundColor = "#adb0b2";
  stopwatchButton.style.backgroundColor = "white";
  alarmButton.style.backgroundColor = "white";
  countdownTimerDiv.style.display = "block";

  stopwatchDiv.style.display = "none";
  alarmDiv.style.display = "none";
}

function activateStopwatch() {
  timerActive = false;
  alarmActive = false;
  stopwatchActive = true;
  stopwatchButton.style.backgroundColor = "#adb0b2";
  timerButton.style.backgroundColor = "white";
  alarmButton.style.backgroundColor = "white";
  stopwatchDiv.style.display = "block";

  countdownTimerDiv.style.display = "none";
  alarmDiv.style.display = "none";
}

function activateAlarm() {
  timerActive = false;
  stopwatchActive = false;
  alarmActive = true;
  alarmButton.style.backgroundColor = "#adb0b2";
  timerButton.style.backgroundColor = "white";
  stopwatchButton.style.backgroundColor = "white";
  alarmDiv.style.display = "block";

  stopwatchDiv.style.display = "none";
  countdownTimerDiv.style.display = "none";
}

timerButton.addEventListener("click", activateTimer);
stopwatchButton.addEventListener("click", activateStopwatch);
alarmButton.addEventListener("click", activateAlarm);
openAppButton.addEventListener("click", begin);
