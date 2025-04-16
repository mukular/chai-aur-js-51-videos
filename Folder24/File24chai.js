// Immediately Invoked Function Expressions(IIFE)

(function chai()       // named IIFE
{
    console.log(`DB connected`);
})();    // semicolon hatate hi error aa jayega

( (myName) => {
    console.log(`DB connected2 ${myName}`); 
})('jumba ');

console.log('yo');
