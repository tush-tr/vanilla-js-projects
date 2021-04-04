const num = document.querySelector(".num");
const range = document.querySelector(".range");
const button = document.querySelector("button");
const show = document.querySelector(".show");
const randNum = (n)=>{
    return Math.floor(Math.random()*n)+1;
}
const targetNum = randNum(100);
button.addEventListener("click",()=>{
    if(num.value===targetNum){
        show.innerHTML = `<h3>Congrats, Matched</h3>`
    }
    else{
        if(targetNum<50){
            show.innerHTML = `<h3>Try Again</h3><p>Hint: try a number below 50</p>`;
        }
        else{
            show.innerHTML = `<h3>Try Again</h3><p>Hint: try a number above 50</p>`
        }
        
    }
})
