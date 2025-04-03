/*

For primitive data types, memory is allocated in stack.
For Non - primitive data types, memory is allocated in heap.

*/

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

// userOne ka object heap me bana and userOne stack me h jo is object ko reference kar raha h

let userTwo = userOne
// userOne and userTwo same object ko point kar rahe h jo ki heap me h 

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
