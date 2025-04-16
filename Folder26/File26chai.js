// control flow in js

if(2 == "2")
{
    console.log("executed");
}

if(2 === "2")    // type bhi check karega
{
    console.log("chala ja");
}

if(2 != 3)
{
    console.log("oh yeah");
}

const temperature = 41;
if(temperature < 50)
{
    console.log("less than 50");
}
else
{
    console.log("temperature is greater than 50");
}

console.log("Always executed");

const score = 200;
if(score > 100)
{
    const power = "fly";
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);   // gives error

const balance = 1000;

if(balance > 500) console.log("test");

if(balance < 500)
{
    console.log("less than 500");
}
else if(balance < 750)
{
    console.log("less than 750");
}
else if(balance < 900)
{
    console.log("less than 900");
}
else
{
    console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2 == 2)
{
    console.log("Allow to buy course");
}
if(userLoggedIn && debitCard && 2 == 3)
{
    console.log("Not Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("User logged in");
}

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


const mon = "february";

switch (mon) {
    case "jan":
        console.log("January");
        break;
    case "february":
        console.log("feb");
        break;
    case "march":
        console.log("march");
    case "april":
        console.log("april");
        break;

    default:
        console.log("Hey, default case match");
        break;
}