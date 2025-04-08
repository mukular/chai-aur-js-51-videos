let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 21)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 3, 24, 5, 3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-08-21")
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("08-21-2023")
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);   // gives milliseconds from 1 january 1970

console.log(myCreatedDate.getTime());  // gives milliseconds for a particular date

console.log(Math.floor(Date.now()/1000));  // in seconds

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// aur bhi methods h khud explore karna