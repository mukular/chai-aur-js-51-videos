// For loop with break and continue

for(let index = 0; index < 10; index++)
{
    const element = index;
    if(element == 5)
    {
        console.log("5 is best number");
    }
    console.log(element);
}

// console.log(element);   // gives error

for(let index = 0; index < 10; index++)
{
    console.log(`Outer loop value: ${index}`);
    for(let j = 0; j <= 10; j++)
    {
        console.log(`Inner loop value ${j} and inner loop ${index}`);
    }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for(let index = 0; index < myArray.length; index++)
{
    const element = myArray[index];
    console.log(element);
}

for(let index = 1; index <= 20; index++)
{
    if(index == 5)
    {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}

console.log("Outside the loop");

for(let index = 1; index <= 20; index++)
{
    if(index == 5)
    {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}