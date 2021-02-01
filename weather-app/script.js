const que = document.querySelector("input");
const button = document.querySelector("button");
const show = document.querySelector("section");

setInterval(()=>{
    show.style.width = "40vw";
},50)


button.addEventListener("click", () => {
    const query = que.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=b2b8f013cb2d1da62f710e50287d5e7d&units=metric`
    fetch(url).then((data) => {
        return data.json();
    }).then((data) => {
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        show.innerHTML = `<div>${desc}<br>Temperature in your city is ${temp} degrees<br><img src="${imageUrl}"></div>`
    }).catch((err) => {
        console.log(err);
    });
})

