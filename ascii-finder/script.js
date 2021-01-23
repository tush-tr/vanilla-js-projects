const button = document.querySelector(".btn");
const input = document.querySelector("input");
const show = document.querySelector(".show");
button.addEventListener("click",()=>{
    let val = input.value;
    let asc = val.charCodeAt(0);
    show.innerHTML = asc;
})