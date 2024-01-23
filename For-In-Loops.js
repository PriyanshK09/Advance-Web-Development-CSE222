// for...in Loops
// Iterates over the properties of an object

let person = { name: "John", age: 30, occupation: "developer" };
for (let key in person) {
    console.log(key + ":" + person[key]);
}

// Explanation: The for...in loop iterates over the properties of an object.
// In each iteration, the key variable is assigned to one of the object's keys, and the statement is executed.
// The for...in loop is useful when you want to iterate over the properties of an object.