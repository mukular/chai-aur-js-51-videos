// High Order Array loops

const arr = [1, 12, 3, 4, 5];

for(const num of arr)
{
    console.log(num);
}

const greetings = "Hello world!";

for(const greet of greetings)
{
    console.log(`Each char is ${greet}`);
}

// map
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

console.log(map);

for(const [key, value] of map)
{
    console.log(key, ':-', value);
}

const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb : "ruby",
    swift: "swift by apple"
}

for(const key in myObject)
{
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for(const key in programming)
{
    console.log(key);
    console.log(programming[key]);   
}