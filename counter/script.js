const add = document.querySelector(".increase")
const low = document.querySelector(".decrease")
const num = document.querySelector(".show")

let a = 0;
add.addEventListener("click",()=>{
    a++;
    num.innerHTML = a;
})
low.addEventListener("click",()=>{
    a--;
    num.innerHTML = a;
})