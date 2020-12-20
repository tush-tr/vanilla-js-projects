var gender = document.querySelector('#gender');
var age = document.querySelector("#age");

console.log("Working");
function store() {
    var yourage = Number(age.value);
    var yourgender = gender.value;

    document.getElementById(".showcase").innerHTML=yourage;
    
}
