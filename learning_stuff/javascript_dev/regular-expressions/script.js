console.log("This is tutorial of regular expressions from code with harry");
let reg = /tushar/; //regular expresion literal
// console.log(reg.source) // source is what is inside regular expressions

// functions to match expressions
let st = "hello I am Tushar to learn javascript learn javascript";
// FUNCTION 1 exec()- this function will return an array for match or null for no match
let result = reg.exec(st);
// console.log(result)
// what is flag like -g - global flag
let newreg = /learn/g; // g means global
// console.log(newreg.exec(st));
// console.log(newreg.exec(st));

reg = /Tushar/i //case insensitive
// console.log(reg.exec(st))

// FUNCTION 2- test() returns true or false
result = reg.test(st);
console.log(result)

// FUNCTION 3 match() return an array of results or null
// let result3 = reg.match(a) -- this is wrong
let result3 = st.match(reg);
console.log(result3)

// FUNCTION 4 search - returns index of first match else -1
let result4 = st.search(reg);
let resultsearch = st.search(/bhoot/);
// console.log(result4) // output -- index 11
// console.log(resultsearch) // returns -1

// FUNCTION 5 replace()- returns new replaced string with all the replacements
reg = /learn/g // if no global flag  is given first match will be replace
let result5 = st.replace(reg,"teach");
console.log(result5);




