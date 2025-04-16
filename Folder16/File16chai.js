// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",   // by default, yeh name string("name") ki tarah mana jayega
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   // mySym as Symbol used like this
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);  // full name only accessed using this way, not using .
console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser);

Object.freeze(JsUser)   // Now object can't be changed
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

const Jsuser1 = {
    name: "Mukul",
    age: 21,
    location: "Kota"
}

Jsuser1.greeting = function(){
    console.log("Hello JS user");
}
Jsuser1.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   // this refers to current object
}

console.log(Jsuser1.greeting);
console.log(Jsuser1.greeting());
console.log(Jsuser1.greetingTwo());
