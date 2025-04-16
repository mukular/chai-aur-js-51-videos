function calculateCartPrice(...num1)        // rest operator
{ 
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice1(val1, val2, ...num1)    
{ 
    return num1;
}

console.log(calculateCartPrice1(200, 400, 500, 100, 150));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([69, 130, 42, 53]));
