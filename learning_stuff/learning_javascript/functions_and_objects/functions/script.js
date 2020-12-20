// ________NAMED FUNCTION_____

function multiply(a,b){
    var result = a*b;
    console.log(result);
    return result;
}

// Calling a function--
var mul = multiply(3,4);

// ____ANONYMOUS FUNCTION____
var devided = function(a,b){
    var result = a/b;
    console.log(result);
}
// Calling an anonymous function
devided(12,4);


// ______Immediately invoked function expressions_______
(function(){
    var result = 12/3;
    console.log(result);
}())

// ________________Bulding basic functions_________
function findbiggestfraction(a,b){
    console.log("Function is running");
    // using a ternary operator
    var result;
    a>b ? result=["firstfraction",a] : result=["secondfraction",b]
    return result;
}
var fr = 3/4;
var sc = 5/7;
// calling function
var result1 = findbiggestfraction(fr,sc);
console.log(result1[1]);


// ________Playing with Anonymous Functions
var a = 5/7;
var b = 18/25;
var thebiggest = function(){
    var result;
    a>b ? result = a : result = b;
    return result;
}
console.log(thebiggest());

// ______Immediately invoked function expressions_______
var substraction = (function(a,b){
    var result = a-b;
    return result;
})(5,4);
console.log(substraction);

