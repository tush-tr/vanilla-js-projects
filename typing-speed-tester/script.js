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
  5: `The process of quitting this body and getting another body in the material
  world is also organized. A man dies after it has been decided what form of body he will have in the next life. Higher authorities, not the living entity himself,
  make this decision. According to our activities in this life, we either rise or
  sink. This life is a preparation for the next life. If we can prepare, therefore, in this life to get promotion to the kingdom of God, then surely, after quitting
  this material body, we will attain a spiritual body just like the Lord's.`,
  6: "Whatever state of being one remembers when he quits his present body, in his next life he will attain to that state without fail.",
  7: `Anyone can understand what is spread all over the body: it is consciousness. Everyone is conscious of the pains and pleasures of the body in
  part or as a whole. This spreading of consciousness is limited within one's own
  body. The pains and pleasures of one body are unknown to another. Therefore, each and every body is the embodiment of an individual soul, and the symptom
  of the soul's presence is perceived as individual consciousness.`,
  8: `the individual particle of spirit soul is a spiritual atom smaller
  than the material atoms, and such atoms are innumerable. This very small spiritual spark is the basic principle of the material body, and the influence of
  such a spiritual spark is spread all over the body as the influence of the active
  principle of some medicine spreads throughout the body. This current of the spirit soul is felt all over the body as consciousness, and that is the proof of the
  presence of the soul. Any layman can understand that the material body minus
  consciousness is a dead body, and this consciousness cannot be revived in the body by any means of material administration. Therefore, consciousness is not
  due to any amount of material combination, but to the spirit soul.`,
  9: `The soul is atomic in size and can be perceived by perfect intelligence.
  This atomic soul is floating in the five kinds of air (präëa, apäna, vyäna,
  samäna and udäna), is situated within the heart, and spreads its influence all
  over the body of the embodied living entities. When the soul is purified from
  the contamination of the five kinds of material air, its spiritual influence is
  exhibited.`,
  10: `The material body is perishable by nature. It may perish immediately, or it
  may do so after a hundred years. It is a question of time only. There is no chance of maintaining it indefinitely. But the spirit soul is so minute that it
  cannot even be seen by an enemy, to say nothing of being killed. As
  mentioned in the previous verse, it is so small that no one can have any idea how to measure its dimension. So from both viewpoints there is no cause of
  lamentation, because the living entity as he is cannot be killed nor can the
  material body be saved for any length of time or permanently protected.`,
  11: `Neither he who thinks the living entity the slayer nor he who thinks it slain
  is in knowledge, for the self slays not nor is slain.`,
  12: `When an embodied living entity is hurt by fatal weapons, it is to be known
  that the living entity within the body is not killed. The spirit soul is so small that it is impossible to kill him by any material weapon, as will be evident from
  subsequent verses. Nor is the living entity killable, because of his spiritual
  constitution. What is killed, or is supposed to be killed, is the body only. This, however, does not at all encourage killing of the body. The Vedic injunction is
  mä hiàsyät sarvä bhütäni: never commit violence to anyone. Nor does
  understanding that the living entity is not killed encourage animal slaughter. Killing the body of anyone without authority is abominable and is punishable
  by the law of the state as well as by the law of the Lord. Arjuna, however, is
  being engaged in killing for the principle of religion, and not whimsically.`,
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

  let randomNumber = Math.floor(Math.random() * 11) + 1;
  changetextorigin.innerHTML = texts[randomNumber];
  origintext = texts[randomNumber];
};

// event listeners for keyboard input and the reset button :
testarea.addEventListener("keypress", start, false);
testarea.addEventListener("keyup", spellingcheck, false);
resetbutton.addEventListener("click", reset, false);
