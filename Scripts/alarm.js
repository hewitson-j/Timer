hourInput = document.getElementById("alarm-hour-input");
minuteInput = document.getElementById("alarm-minute-input");
amPmInput = document.getElementById("alarm-am-pm-input");

alarmAlerter = document.getElementById("alarm-alerter");

startButton = document.getElementById("alarm-start-button");
cancelButton = document.getElementById("alarm-cancel-button");
stopButton = document.getElementById("alarm-stop-button");

// Not being manipulated properly
// startButtonDisplay = document.getElementById("alarm-start");
// cancelButtonDisplay = document.getElementById("alarm-cancel");
// stopButtonDisplay = document.getElementById("alarm-end");

startButtonDiv = document.getElementById("alarm-set");
cancelButtonDiv = document.getElementById("alarm-cancel");
stopButtonDiv = document.getElementById("alarm-stop");

alarmHourDisplay = document.getElementById("alarm-hour");
alarmMinuteDisplay = document.getElementById("alarm-minute");
alarmColonDisplay = document.getElementById("alarm-colon");
alarmAmPmDisplay = document.getElementById("am-pm");

// TODO
// Not getting alarm sound, why?
// timesUp = document.getElementById("timesUp");
// timesUp.volume = 0.25;

alarmAlerter.style.display = "none";

today = new Date();
hourInput.placeholder = today.getHours();
minuteInput.placeholder = today.getMinutes();

if (today.getHours() > 12) {
  hourInput.placeholder = today.getHours() - 12;
  amPmInput.value = "PM";
} else if (today.getHours() == 12) {
  amPmInput.value = "PM";
}

// Colon Animation
setInterval(() => {
  alarmColonDisplay.textContent = " ";
}, 750);
setInterval(() => {
  alarmColonDisplay.textContent = ":";
}, 1500);

hi = null;
mi = null;
ampmi = null;
alarmTicking = null;

function setAlarm() {
  hi = parseInt(hourInput.value);
  mi = parseInt(minuteInput.value);
  ampmi = amPmInput.value;

  if (isNaN(hi) || isNaN(mi)) {
    alert(
      "Time is empty or has invalid characters. Please put in a valid time. \n 1) Both boxes must be filled. \n 2) Only acceptable characters are numbers \n 3) No letters, spaces, or special characters allowed."
    );
    return;
  }
  if (hi > 12 || mi > 59) {
    alert(
      "Hours or minutes is too large. Hours must be no more than 12 and minutes no more than 59"
    );
  }

  if (hi < 10) {
    alarmHourDisplay.textContent = "0" + hi;
  } else {
    alarmHourDisplay.textContent = hi;
  }
  if (mi < 10) {
    alarmMinuteDisplay.textContent = "0" + mi;
  } else {
    alarmMinuteDisplay.textContent = mi;
  }

  alarmAmPmDisplay.textContent = ampmi;
  startButtonDiv.style.display = "none";
  cancelButtonDiv.style.display = "block";

  alarmTicking = setInterval(runClock, 1000);
}

function runClock() {
  date = new Date();
  alarmHours = date.getHours();
  alarmMinutes = date.getMinutes();

  displayHours = parseInt(alarmHourDisplay.textContent);
  displayMinutes = parseInt(alarmMinuteDisplay.textContent);
  displayMeridian = ampmi;

  if (displayMeridian == "PM") {
    displayHours += 12;
  }

  if (alarmHours == displayHours && displayMinutes == alarmMinutes) {
    // soundPlaying = setInterval(() => {
    //   timesUp.currentTime = 0;
    //   timesUp.play();
    // }, 7500);
    alarmAlerter.style.display = "block";
    cancelButtonDiv.style.display = "none";
    stopButtonDiv.style.display = "block";
  }
}

startButton.addEventListener("click", setAlarm);
