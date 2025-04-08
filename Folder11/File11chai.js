// strings

const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "Value");  // Prefer not to use this syntax, use below syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(1, 4)
console.log(newString);

const anotherString = gameName.slice(1, 4)
console.log(anotherString);

const anotherString1 = gameName.slice(-8, 4)
console.log(anotherString1);

const newStringOne = "    hitesh    ch  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'));
console.log(url.includes('ch'));

console.log(gameName.split('-'));

/*
According to chatgpt :-

Key Differences Between substring() and slice():
1. Purpose:

substring(start, end): Extracts characters between the start index (inclusive) and the end index (exclusive). It does not handle negative indices.
slice(start, end): Extracts characters between the start index (inclusive) and the end index (exclusive). It can handle negative indices to count from the end of the string.

2. Handling Negative Indices:

substring():
Treats negative values as 0.
slice():
Allows negative indices to start counting from the end of the string.
-1 represents the last character, -2 represents the second-to-last, and so on.

3. Parameter Swapping:

substring():
If start > end, it swaps the two values.
slice():
Does not swap values; the result will be empty if start > end.

*/