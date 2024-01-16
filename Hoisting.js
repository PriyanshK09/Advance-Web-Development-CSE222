// HOISTING Is a JavaScript behavior where variables and function declarations are moved to the top of their scope before code execution.
// This behavior allows you to use a function before you declare it in your code.

// Hoisting wit 'VAR'
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// The first console.log() returns undefined because the variable declaration (but not the value) is hoisted to the top of the scope.

// Hoisting wit 'LET'
console.log(x); // ReferenceError: x is not defined
let x = 10;
console.log(x); // 10

// The first console.log() returns a ReferenceError because the variable is not initialized, and therefore not yet defined.