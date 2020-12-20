// Two types of variable scope -- Global variable and local variable
var globalvariable = 344;
function add(a){
    var localvariable = 23;
    return a+localvariable;
}
globaloutside = add(2);
console.log(globaloutside);
console.log(globalvariable);
console.log(localvariable); // this will return error because it was a local variable