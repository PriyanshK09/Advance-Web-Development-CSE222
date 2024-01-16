function exampleFUnction() {
    if (true) {
        var functionScopedVar = "I am function-scoped";
    }
    console.log(functionScopedVar); // "I am function-scoped"
}
exampleFunction();
console.log(functionScopedVar); // "I am function-scoped"

// This code got error because : let and const are block scoped as opposed to var which is function scoped.
// VAR is used to declare a variable globally or locally to an entire function regardless of block scope.

function exampleFunction() {
    if (true) {
        let functionScopedVar = "I am function-scoped";
    }
    console.log(functionScopedVar); // "I am function-scoped"
}
exampleFunction();

// LET Is used to declare a variable in block scope.
// This code is not running because of the block scope of let.

// CONST Keyword is used to declare a constant variable in block scope.
function exampleFunction() {
    let functionScopedVar;
    if (true) {
        functionScopedVar = "I am function-scoped";
    }
    console.log(functionScopedVar); // "I am function-scoped"
}
exampleFunction();
// This code is running because of the block scope of let.


// REFER TO EACH CODE/LINES ABOVE TO UNDERSTAND THE DIFFERENCE BETWEEN VAR, LET AND CONST.
// BELOW CODE JUST TO CHECK RUNTIME ERROR.
let a = 10;
let b = 20;
console.log(a + b);