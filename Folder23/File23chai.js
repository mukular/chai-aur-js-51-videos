// THIS and arrow function 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage();

user.username = "sam";
user.welcomeMessage();

console.log("here");
console.log(this);
console.log("Now here");

function chai()
{
    let username = "sunny";
    console.log(this);
    console.log(this.username);
    
}

chai();

const chai2 = function()
{
    let username = "sunny";
    console.log(this.username);
    
}

chai2();

// Arrow function
const chai3 = ()=>{
    let username = "sunny";
    console.log("hello");
    console.log(this);
    console.log(this.username);
}

chai3();

const addTwo = (num1, num2)=>{
    return num1 + num2;
}

console.log(addTwo(3, 4));

const addTwo2 = (num1, num2)=> num1 + num2;
console.log(addTwo2(56, 12));

const addTwo3 = (num1, num2)=> (num1 + num2);

console.log(addTwo3(45, 13));

const o1 = ()=> {username : "ankit"}
const o2 = ()=> ({username : "ankita"})

console.log(o1());
console.log(o2());