var button = document.querySelector("#calculate");
var gender = document.querySelector("#gender");
var weight = document.querySelector("#weight");
var age = document.querySelector("#age");
var height = document.querySelector("#height");
var show = document.querySelector(".showcase");



button.addEventListener("click", () => {
  let gen = gender.value;
  let wei = Number(weight.value);
  let ag = Number(age.value);
  let hei = Number(height.value);
  if(gen=="male"){
  let bmr = 66.47 + (13.75 * wei) + (5.003 * hei) - (6.755 * ag);
  show.innerHTML = `<h1>Your BMR is ${bmr}</h1>`;
  }
  else{
    let bm = 655.1 + (9.563*wei) + (1.85*hei) - (4.676*ag);
    show.innerHTML = `<h1>Your BMR is ${bm}</h1>`;
  }
})