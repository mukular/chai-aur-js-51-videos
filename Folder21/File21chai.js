// Global and local scope

var c = 300;

if(true)
{
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);   // gives error
// console.log(b);   // gives error
console.log(c);   // isliye var use nhi karna chahiye


let a1 = 346;
var c1 = 44;
if(true)
{
    let a1 = 55;
    console.log("Inner: a1", a1);
    console.log("Inner: c1", c1);
    c1 = 33;
    console.log("Inner: c1", c1);
    
}

console.log(a1);
console.log(c1);
