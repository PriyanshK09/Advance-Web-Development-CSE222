// Difference between VAR, LET and CONST
// VAR Keyword is used to declare a variable globally or locally to an entire function regardless of block scope.
// LET Keyword is used to declare a variable in block scope.
// CONST Keyword is used to declare a constant variable in block scope.

// Local Variables can "shadow" global variables with the same name.
// The local variable takes precedence within its scope, and the global variable takes precedence outside its scope.
// ------------------------------------- //

// Usage with VAR Keyword
var shadowedVar = "I am global";

function exampleFunction() {
    var shadowedVar = "I am local";
    console.log(shadowedVar); // "I am local"
}

console.log(shadowedVar); // "I am global"

// Usage with LET Keyword
let shadowedVar = "I am global";

function exampleFunction() {
    let shadowedVar = "I am local";
    console.log(shadowedVar); // "I am local"
}

console.log(shadowedVar); // "I am global"

// Usage with CONST Keyword
const shadowedVar = "I am global";

function exampleFunction() {
    const shadowedVar = "I am local";
    console.log(shadowedVar); // "I am local"
}

console.log(shadowedVar); // "I am global"

