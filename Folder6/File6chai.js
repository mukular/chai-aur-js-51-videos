// Datatype conversion

let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/* 
According to chatgpt:-
typeof NaN is "number", even though NaN stands for "Not a Number." 
 This can be counterintuitive but is part of JavaScript's behaviour. */

let score1 = null

console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1)
console.log(typeof(valueInNumber1));
console.log(valueInNumber1);

let score2 = undefined

console.log(typeof score2);
console.log(typeof(score2));

let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);

let score3 = true

console.log(typeof score3);
console.log(typeof(score3));

let valueInNumber3 = Number(score3)   // true is converted to 1 and false to 0
console.log(typeof(valueInNumber3));
console.log(valueInNumber3);

let score4 = "33"

console.log(typeof score4);
console.log(typeof(score4));

let valueInNumber4 = Number(score4)
console.log(typeof(valueInNumber4));
console.log(valueInNumber4);

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = "hitesh"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);


let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
