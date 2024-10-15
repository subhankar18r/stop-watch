const display = document.querySelector(".display-time");
const playBtn = document.querySelector(".play");

let [hours, minute, second] = [0, 0, 0];
let timer = null;

function playWatch() {
  timer = setInterval(() => {
    startWatch();
  }, 1000);
}

function pauseWatch() {
  clearInterval(timer);
  playBtn.disabled = false;
}

function resetWatch() {
  clearInterval(timer);
  [hours, minute, second] = [0, 0, 0];
  display.innerHTML = "00:00:00";
  playBtn.disabled = false;
}

function startWatch() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hours++;
  }
  display.innerHTML =
    formatTime(hours) + ":" + formatTime(minute) + ":" + formatTime(second);
  playBtn.disabled = true;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
