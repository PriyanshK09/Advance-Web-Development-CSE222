// Hoisting with VAR
console.log(x)
var x = 10
console.log(x)

// Hoisting with LET
console.log(y)
let y = 10
console.log(y)

// Hoisting with FUNCTION
console.log(z)
function z() {
    console.log('z')
}
console.log(z)

// Hoisting Caveats
// While the declarations are hoisted, the initializations are not.