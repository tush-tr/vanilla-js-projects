var a = 23;
var b;
b = 2;
var adding = a+b;
console.log(adding);


// document.body.innerHTML = `<h1>The sum of variables is: ${sum}</h1>`
function add() {
    var userinput_a = document.getElementById('a_input').value;
    var userinput_b = document.getElementById('b_input').value;
    var userinput_c = document.getElementById('c_input').value;
    var sum = Number(userinput_a) + Number(userinput_b) + Number(userinput_c);
    document.getElementById('show').innerHTML = `<h1>${sum}</h1>`;
}