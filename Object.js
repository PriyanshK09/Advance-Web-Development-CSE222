// Object Literal Notation
// Anonymus Object Literal Notation (no variable name) - used for one time use
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    isElectric: false,
    start: function() {
        console.log("Engine started");
    }
};

// Accessing object properties
console.log(car.make);
console.log(car.model);

// Calling a method
car.start();