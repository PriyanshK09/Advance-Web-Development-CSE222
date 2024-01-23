let fruits = ["Apple", "Banana", "Orange", "Grapes"];

// Adding element at the end of the array
fruits.push("Mango");
console.log(fruits);

// Adding element at the beginning of the array
fruits.unshift("Pineapple");
console.log(fruits);

// Removing the last element
let removedLast = fruits.pop();
// Removing the first element
let removedFirst = fruits.shift();
console.log(fruits);

// Finding index of an element
let index = fruits.indexOf("Orange");
console.log(index);

// Iterating using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Slicing an array
let citrus = fruits.slice(1, 3);
console.log(citrus);