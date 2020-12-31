var button = document.querySelector("#calculate");
var gender = document.querySelector("#gender");
var weight = document.querySelector("#weight");
var age = document.querySelector("#age");
var height = document.querySelector("#height");
var showbmr = document.querySelector(".showbmr");
var lifestyle = document.querySelector("#lifestyle");
var showtdee = document.querySelector(".showtdee");

button.addEventListener("click", () => {
  let ls = lifestyle.value;
  let gen = gender.value;
  let wei = Number(weight.value);
  let ag = Number(age.value);
  let hei = Number(height.value);
  if (gen == "male") {
    let bmr = (10 * wei) + (6.25 * hei) - (5 * ag) + 5;
    showbmr.innerHTML = `<h1>Your BMR is ${bmr}</h1>`;
    if (ls == 1){
      showtdee.innerHTML = `<h1>Your TDEE is ${bmr * 1.5}</h1>`;
    }
    else if(ls == 2){
      showtdee.innerHTML = `<h1>Your TDEE is ${bmr * 1.8}</h1>`;

    }
    else {
      showtdee.innerHTML = `<h1>Your TDEE is ${bmr * 2.2}</h1>`;
    }
  }
  else {
    let bm = (10 * wei) + (6.25 * hei) - (5 * ag) - 161;
    showbmr.innerHTML = `<h1>Your BMR is ${bm}</h1>`;
    if (ls == 1){
      showtdee.innerHTML = `<h1>Your TDEE is ${bm * 1.5}</h1>`;
    }
    else if(ls == 2){
      showtdee.innerHTML = `<h1>Your TDEE is ${bm * 1.8}</h1>`;

    }
    else {
      showtdee.innerHTML = `<h1>Your TDEE is ${bm * 2.2}</h1>`;
    }


  }

})