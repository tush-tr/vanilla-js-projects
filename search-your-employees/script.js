var emp1 = document.querySelector("#emp1");
var emp2 = document.querySelector("#emp2");
var emp3 = document.querySelector("#emp3");
var input = document.querySelector("input");
var search = document.querySelector("button");
var showbox = document.querySelector(".showbox");
search.addEventListener("click",()=>{
    var val = input.value;
    fetch("data.json").then((data)=>{
        return data.json();
    }).then((data)=>{
        searching(val,data);
    }).catch((err)=>{
        console.log(err);
    });
})


fetch("data.json").then((data)=>{
    return data.json();
}).then((data)=>{
    show(data);
}).catch((err)=>{
    console.log(err);
});

const show = (data)=>{
    for(var i=0;i<3;i++){
        let pic = data[i].Image;
        let name = data[i].name;
        var com = `<div class="card">
                    <img src="${pic}" alt="">
                    <h2>${name}</h2>
                    </div>`
        emp1.innerHTML += com;
    }
    for(var i=3;i<6;i++){
        let pic = data[i].Image;
        let name = data[i].name;
        var com = `<div class="card">
                    <img src="${pic}" alt="">
                    <h2>${name}</h2>
                    </div>`
        emp2.innerHTML += com;
    }
    for(var i=6;i<8;i++){
        let pic = data[i].Image;
        let name = data[i].name;
        var com = `<div class="card">
                    <img src="${pic}" alt="">
                    <h2>${name}</h2>
                    </div>`
        emp3.innerHTML += com;
    } 
}

const searching = (val,data)=>{
    for(var i = 0;i<8;i++){
        if(val == data[i].name ){
            var com = `<div class="card">
                    <img src="${data[i].Image}" alt="">
                    <h2>${data[i].name}</h2>
                    </div>`
            showbox.innerHTML = com;
            
        }
    }
}

