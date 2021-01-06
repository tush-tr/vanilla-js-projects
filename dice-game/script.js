
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const don = ()=>{
    let ran = Math.floor(Math.random()*6)+1;
    one.setAttribute("src",`images/dice${ran}.png`);
    let ran2 = Math.floor(Math.random()*6)+1;
    two.setAttribute("src",`images/dice${ran2}.png`);

};

