const tinderUser = new Object();    // singleton object

console.log(tinderUser);

const tinderUser1 = {};   // Non-singleton object

console.log(tinderUser1);

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = {obj1, obj2};
console.log(obj3);

const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5);
console.log(obj1);

const obj4 = Object.assign(obj1, obj2);
console.log(obj4);
console.log(obj1);

const obj6 = {...obj1, ...obj2};
console.log("Printing obj6 ");

console.log(obj6);
console.log(obj1);

console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoogedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
