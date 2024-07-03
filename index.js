let text = "my goals in tech for the next two years";
const daysOfWeek = ["sun", "mon", "tues", "wednes", "thurs", "fri", "satur"];
const date = new Date();
let i = 0;

const headText = document.querySelector("h1");
const day = document.querySelector("#day");
const time = document.querySelector("#time");

day.textContent = `${daysOfWeek[date.getDay()]}day`;
time.textContent = date.toUTCString();

setInterval(() => {
  if (i !== text.length) {
    headText.textContent += text[i];
    i++;
  } else {
    return;
  }
}, 50);
