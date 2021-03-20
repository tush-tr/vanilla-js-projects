console.log("metacharacters in regular expressions")

let regex = /tushar/;
let str = "tushar is a very bad programmer"
let result = regex.exec(str);
// lets look into some metacharacter symbols
regex = /^tu/;  // starts with
regex = /er$/; // ends with
regex = /t.ushar/; // matches any one character
regex = /t*ushar/; // matches any 0 or more character
regex = /tushar?rr?/; //optional - rr
regex = /t\*ushar/; // * is going to be matches it's not metachar now











// console.log(result)
if(regex.test(str)){
    console.log("The string matches the expression");
}
else{
    console.log("Not matched")
}