var input = document.querySelector("input");
var button = document.querySelector("div .btn");
var show = document.querySelector(".show");
var print = document.querySelector(".print");
button.addEventListener("click",()=>{
    let word = input.value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then((data)=>{
        return data.json();
    }).then((data)=>{
        var definition = data[0].meanings[0].definitions[0];
        // console.log(definition)
        var def = definition.definition;
        var ex = definition.example;
        var full = `<p>
                    <b>Word: </b>
                    ${word}<br>
                    <b>Definition: </b>${def} <br>
                    <b>Example: </b>${ex}
                    </p>`
        show.innerHTML += full;
        
    }).catch((err)=>{
        console.log(err);
    });
    

})
var doc = new jsPDF();
var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
// var content = document.querySelector("#content");
// var button = document.querySelector("#cmd");
print.addEventListener("click",()=>{
	doc.fromHTML(show.innerHTML,15,15,{
  	'width':170,
    'elementHandlers': specialElementHandlers
  });
  doc.save("word-list.pdf");
})
