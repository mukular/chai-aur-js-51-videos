// Scope level and mini hoisting

function one()
{
    const username = "hitesh";

    function two()
    {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);   // gives error
    
    two();
}

one();

if(true)
{
    const username = "mukul";
    if(username === "mukul")
    {
        const website = " youtube "
        console.log(username + website);
        
    }
    // console.log(website);  // gives error
    
}

// console.log(username);   // gives error

console.log(addone(5));

function addone(num)
{
    return num + 1;
}

// addTwo(5);   // gives error 

const addTwo = function(num)    // addTwo ek function h jise expression bhi bol diya jata h
{
    return num + 2;
}

addTwo(5);