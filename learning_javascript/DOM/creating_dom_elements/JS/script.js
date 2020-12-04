const FEATURED = document.querySelector(".featured-image");
const the_img = document.querySelector("img");
 
var alttext = the_img.getAttribute("alt");

var captionElement = document.createElement("figcaption");

var captiontext = document.createTextNode(alttext);
captionElement.appendChild(captiontext);
console.log(captionElement);
FEATURED.appendChild(captionElement);
captionElement.append("new");


// CREATING New Elements
// 1. Create the element
var newElement = document.createElement("div");
var textfornewelement = document.createTextNode("Hey this is new element");
newElement.setAttribute("class","myelement");
newElement.appendChild(textfornewelement);
console.log(newElement);


// __________
function newelement(){
    FEATURED.appendChild(newElement);
}