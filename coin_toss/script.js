function toss() {
    let img = document.getElementById("img");
    let randomNumber = Math.floor(Math.random() * 2)+1;
    img.setAttribute("src",`${randomNumber}.jpg`);
};
function anim() {
    setTimeout(toss,500);
    let img = document.getElementById("img");
    img.setAttribute("src","toss.gif");

};
console.log("Working")