// while and do-while loop

let index = 0;
while(index <= 10)
{
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

let myArray = ['flash', 'batman', 'superman'];
let arr = 0;
while(arr < myArray.length)
{
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1;
}

let score = 1;

do{
    console.log(`Score is ${score}`);
    score++;
}while(score <= 10);

// do-while me kaam pahle hota h condition baad me check hoti h

let sce = 12;

do{
    console.log(`Hey Score is ${sce}`);
    sce++;
}while(sce <= 10);