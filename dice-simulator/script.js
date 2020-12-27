function shuffle() {
    let img = document.getElementById("img");
    let randomNumber = Math.floor(Math.random() * 6)+1;
    img.setAttribute("src",`${randomNumber}.png`);
};
function anim() {
    setTimeout(shuffle,500);
    let img = document.getElementById("img");
    img.setAttribute("src","dice.gif");

};
console.log("Working")