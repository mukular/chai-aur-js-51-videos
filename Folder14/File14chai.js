const myArr = [0, 1, 13, 12, true, "Hitesh", -3]
console.log(myArr[2]);

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(34, 69, 35, 34)

myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(69)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(-3));
console.log(myArr.includes(3));
console.log(myArr.indexOf(19));
console.log(myArr.indexOf(-3));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("B ", myArr);
