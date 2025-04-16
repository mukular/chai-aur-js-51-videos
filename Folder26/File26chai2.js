const userEmail = "h@hitesh.ai";

if(userEmail)
{
    console.log("Got user email");
}
else
{
    console.log("Don't have user email");
}

const phone = "";

if(phone)
{
    console.log("le yeh le mera mobile number");
}
else
{
    console.log("kuch nhi milega");
}

/*

falsy values :-

false
0
-0
BigInt 0n
""
null
undefined
NaN

*/

/*

truthy values :-

"0"
'false'
" "
[]
{}
function(){}

*/

const arr = [];

if(arr.length === 0)
{
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
}

console.log(false == 0);
console.log(false == '');
console.log(0 == '');

// Nullish Coalescing Operator  (??)   (Only for null and undefined)

let val1;
val1 = 5 ?? 10;

console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 15;
console.log(val1);

val1 = null ?? 10 ?? 13
console.log(val1);

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
