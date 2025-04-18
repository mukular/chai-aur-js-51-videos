let myName = "hitesh     "

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh();
// heroPower.heyHitesh();    // gives error
console.log("hey");
myHeros.hitesh()
myHeros.heyHitesh()

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true 
}

const TeachingSupport = {
    isAvailable: false 
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()
"      mukul   ".trueLength()
"icetea".trueLength()