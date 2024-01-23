// JavaScript and PHP are Loosely Typed Languages
// Therefore, the type of a variable is determined by its value (not by its name).
let firstName = "John";
console.log(typeof firstName); // string

let x = 5;
console.log(typeof x); // number

let pi = 3.14;
console.log(typeof pi); // number

let isStudent = true;
console.log(typeof isStudent); // boolean

let undefinedVar;
console.log(typeof undefinedVar); // undefined

let nullVar = null;
console.log(typeof nullVar); // object

// Difference between Undefined and Null
// Variables that are declared but not initialdized are undefined, while variables that are not declared at all are null.

// Dictionary Objects (Key-Value Pairs)
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    isStudent: true,
    eyeColor: "blue" };
console.log(typeof person); // object
console.log(person.firstName); // John

// Arrays
let colors = ["red", "green", "blue"];
console.log(typeof colors); // object
console.log(colors[0]); // red

// Functions
function add(a, b) {
    return a + b;
}
console.log(typeof add); // function
console.log(add(2, 3)); // 5