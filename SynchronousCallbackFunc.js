function parentFunction(name, callback) {
    callback();
    console.log('Hello '+ name);
}

function randomFunction() {
    console.log('Hey! I am a callback function');
}

parentFunction('Random String', randomFunction)