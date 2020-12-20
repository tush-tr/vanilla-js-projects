console.log("This is functions tutorial");

let nam = "Tushar";
let name1 = "Rahul";
let name2 = "Sahul";
let name3 = "Sohan";
let name4 = "Mohan";
function give(name) {
    console.log(name + " is a programmer");  
}

give(nam);
give(name1);
give(name2);
give(name3);
give(name4);


function greet(name,text){
    let name1 = "Rahul" //local variable
    console.log(text + name);
    console.log(name1);
}
greet("Tushar"," Good Morning ");

// ____________Returning the value__________
function sum(a,b,c){
    let d = a+b+c;
    return d;
    // This line will never execute(unreachable code)
    // console.log("Function is returned");
}
console.log(sum(2,4,5))






