// Data types summary

/*

A. Primitive : Call by value means agar kahi se inhe copy karte h toh memory ka reference nhi diya jata, 
inko copy karke diya jata h

7 types:-  String, Number, Boolean, null, undefined, Symbol, BigInt

B. Reference (Non primitive) : inki memory ka reference allocate kiya ja sakta h

Ex. Arrays, Objects, Functions

*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 364729203829202379402n   // bigInt

// Array
const heros = ["shaktiman", "naagraj", "doga"]

// Object
let myObj = {
    name : "hitesh",
    age : 22,
}

// Function
const myFunction = function(){
    console.log("Hello World");   
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof anotherId);
console.log(typeof heros);
