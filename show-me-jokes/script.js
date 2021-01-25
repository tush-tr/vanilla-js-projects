// https://v2.jokeapi.dev/joke/Programming?type=single&contains=t

const category = document.querySelector("#category");
const type = document.querySelector("#joketype");
const input = document.querySelector("#searchjoke");
const showbutton = document.querySelector("#showjoke");
const show = document.querySelector(".show");
showbutton.addEventListener("click",()=>{
    let cat = category.value;
    let typeofjoke = type.value;
    let contains = input.value;
    let url = `https://v2.jokeapi.dev/joke/${cat}?type=${typeofjoke}&contains=${contains}`;
    fetch(url).then((data)=>{
        return data.json();
    }).then((data)=>{
        if(data.type == "single"){
            show.innerHTML = data.joke;
        }
        else{
            show.innerHTML = data.setup +"<br>" + data.delivery;
        }
    }).catch((err)=>{
        console.log(err);
    });
});
