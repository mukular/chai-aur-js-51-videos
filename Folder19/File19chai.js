// Function

function sayMyName()
{
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName();

function addTwoNumbers(number1, number2)
{
    console.log(number1 + number2);
    
}

addTwoNumbers(3, 5)
addTwoNumbers(3, "5")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)

const result = addTwoNumbers(3, 6);
console.log("Result: ", result);

function adding(number1, number2)
{
    console.log("Hey");
    return number1 + number2;
    console.log("Hitesh");   // unreachable code
    
}

const res = adding(3, 12);
console.log("res: ", res);

function loginUserMessage(username)
{
    if(!username)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("mukul"));
console.log(loginUserMessage());
console.log(loginUserMessage(""));


function loginUserMessage2(username = "sam")
{
    if(!username)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage2("mukul garg"));
console.log(loginUserMessage2());
console.log(loginUserMessage2(""));