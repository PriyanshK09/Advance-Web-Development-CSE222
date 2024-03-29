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

// Splicing an array
let removed = fruits.splice(1, 2, "Kiwi", "Papaya");
console.log(removed);
console.log(fruits);
// When we are SPLICING, we add elements at the index where we are removing elements

// Concatenating two arrays
let vegetables = ["Tomato", "Potato"];
let fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);