function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let day = now.getDay();

  if (date < 10) {
    date = "0" + date;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayString = "(" + weekdays[day] + ")";

  document.getElementById("month").textContent = month;
  document.getElementById("date").textContent = date;
  document.getElementById("day").textContent = dayString;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

window.onload = () => {
  updateClock();
  setInterval(updateClock, 1000);
};
