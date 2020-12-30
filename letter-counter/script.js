const letter = document.getElementById("letter");
const counter = document.querySelector(".shownumber");
const reset = document.querySelector(".btn");
letter.addEventListener("keypress",()=>{
    let len = letter.value.length;
    console.log(len);
    counter.innerHTML = len;
},false)

reset.addEventListener("click",()=>{
    counter.innerHTML = null;
    letter.value = null;
})