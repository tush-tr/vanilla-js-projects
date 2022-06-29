const testwrapper = document.querySelector(".test-wrapper");
const testarea = document.querySelector("#test-area");
let origintext = document.querySelector("#origin-text p").innerHTML;
const resetbutton = document.querySelector("#reset");
const thetimer = document.querySelector(".timer");

let changetextorigin = document.querySelector("#origin-text p");

const texts = {
  1: "Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.",
  2: "December 17, 1903, is the birth date of all airplanes. Orville and Wilbur Wright started building gliders in 1900. In 1903, they built a motor and propeller for their glider. Orville made the first flight, which lasted 12 seconds, and flew 120 feet. Wilbur's flight was 852 feet in 59 seconds.",
  3: "These first flights in 1903 were just the start of the evolution of planes. By the year 1909, Bleriot had crossed the English Channel. By the year 1912, a two-piece plywood fuselage was built for greater strength.",
  4: "By the 1930s, the all-metal fuselage was tried, and it soon appeared in DC3s. From the Wrights' 1903 motor and prop came the engines for the 1950 turbojet that generated at least 19,600 pounds of thrust. The big Boeing 747 has four engines with 50,000 pounds of thrust each. The future holds an advanced super-sonic jet with a saving of almost 40 percent in fuel usage.",
};

let timer = [0, 0, 0, 0];
let interval;
let timerRunning = false;

// add leading zero to numbers 9 or beloq (purely for aethetics):
var leadingzero = (time) => {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
};

// run a standard minute/second/hundreths timer:
var runtimernow = () => {
  let currenttime = `${leadingzero(timer[0])}:${leadingzero(
    timer[1]
  )}:${leadingzero(timer[2])}`;
  thetimer.innerHTML = currenttime;
  timer[3]++;
  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
};

// Match the text entered with the provided text on the page:
var spellingcheck = () => {
  let enteredtext = testarea.value;
  let origintextmatch = origintext.substring(0, enteredtext.length);

  if (enteredtext == origintext) {
    clearInterval(interval);
    testwrapper.style.borderColor = "green";
  } else {
    if (enteredtext == origintextmatch) {
      testwrapper.style.borderColor = "blue";
    } else {
      testwrapper.style.borderColor = "orange";
    }
  }
};

// Start the timer:
var start = () => {
  let textenteredlength = testarea.value.length;
  if (textenteredlength === 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runtimernow, 10);
  }
  console.log(textenteredlength);
};

// Reset everything:
var reset = () => {
  clearInterval(interval);
  interval = null;
  timer = [0, 0, 0, 0];
  timerRunning = false;

  testarea.value = "";
  thetimer.innerHTML = "00:00:00";
  testwrapper.style.borderColor = "grey";

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  changetextorigin.innerHTML = texts[randomNumber]
  origintext = texts[randomNumber];
};

// event listeners for keyboard input and the reset button :
testarea.addEventListener("keypress", start, false);
testarea.addEventListener("keyup", spellingcheck, false);
resetbutton.addEventListener("click", reset, false);
