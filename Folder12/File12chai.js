// Number and maths

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(5));

const otherNumber = 23.8936
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(1));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(5.6));
console.log(Math.round(5.4));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.min(4, 3, -6, 8));
console.log(Math.max(4, 3, -6, 8));
console.log(Math.random());   // gives value from 0 to 1(1 not included)
console.log((Math.random()*10) + 1);   // gives value from 1 to 11(11 not included)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // gives value from min to max
