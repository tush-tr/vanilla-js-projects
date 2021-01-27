const dogs = ["https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg",
"https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg",
"https://images.dog.ceo/breeds/akita/Akina_Inu_in_Riga_1.jpg",
"https://images.dog.ceo/breeds/akita/Akita_Dog.jpg",
"https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg","https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg"]


const searchButton = document.querySelector("button");
const breed = document.querySelector("#selectbreed");
const show = document.querySelector(".show");
show.innerHTML = `<div class="card"></div>`
for(let i=0;i<3;i++){
    document.querySelector(".card").innerHTML += `<img src="${dogs[i]}">`
}
searchButton.addEventListener("click",()=>{
    show.innerHTML = null;
    let breedValue = breed.value;
    let url = `https://dog.ceo/api/breed/${breedValue}/images`
    fetch(url).then((data)=>{
        return data.json();
    }).then((data)=>{
        console.log(data);
        let a = 0;
        let pic =0;
        for(let i=0;i<500;i+=3){
            show.innerHTML += `<div class="card"></div>`
            for(let j=0;j<3;j++){
                document.querySelectorAll(".card")[a].innerHTML += `<img src="${data.message[pic]}">`
                pic++;
            }
            a++;
        }
    }).catch((err)=>{
        console.log(err);
    });
})



