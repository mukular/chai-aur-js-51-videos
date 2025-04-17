const myNumbers = [11, 22, 33, 44, 55, 66, 77, 88, 9, 100];

const newNums = myNumbers.map( (num) => num + 10);
console.log(newNums);

const newNums1 = myNumbers.map( (num) => num * 10).map( (num)=> num + 1).filter( (num) => num >= 112);
console.log(newNums1);

const arr = [11, 2, 3];

const ans1 = arr.reduce( function (acc, currVal){
    console.log(`acc: ${acc} and currval: ${currVal}`);
    
    return acc + currVal;
}, 6)

console.log(ans1);

const ans2 = arr.reduce( (acc, curr)  => acc * curr, 2);
console.log(ans2);

const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: "mobile dev course",
        price: 5999
    },
    {
        itemname: "data science course",
        price: 12999
    },
]

const totalAmount = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(totalAmount);
 