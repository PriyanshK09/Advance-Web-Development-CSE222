function parentFunction(name, callback) {
    setTimeout(callback, 1000);
    console.log('Hello '+ name);
}

function randomFunction() {
    console.log('Hey! I am a callback function');
}

parentFunction('Random String', randomFunction)

// Setting randomFunction as anonymous function

function parentFunction(name, callback) {
    setTimeout(callback, 1000);
    console.log('Hello '+ name);
}

parentFunction('Random String', function() {
    console.log('Hey! I am a callback function');
}
)