// Comparison of datatypes

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("Hello");
console.log("2" > 1);
console.log("2" > 3);
console.log("02" > 1);
console.log("Hello 2");


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log("Hello 3");
// equality check == and comparison > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0
// That's why null >= 0 is true and null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === checks value and data type also
console.log("2" == 2);
console.log("2" === 2);
