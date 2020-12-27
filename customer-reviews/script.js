const customername = document.querySelector('#input1');
const productname = document.querySelector("#input2");
const review = document.querySelector("#input3");
const button = document.querySelector(".btn");
const showreviews = document.querySelector(".showreviews");
const reset = document.querySelector("#reset");

const show = () =>{
    let value1 = customername.value;
    let value2 = productname.value;
    let value3 = review.value;
    showreviews.innerHTML += `<p class="showingreviews">Review from customer:- <b> ${value1}</b> for product -<b> ${value2}</b> <br> Review: <b>${value3}</b></p>`

}

button.addEventListener("click",show);
reset.addEventListener("click",()=>{
    showreviews.innerHTML = null;
})