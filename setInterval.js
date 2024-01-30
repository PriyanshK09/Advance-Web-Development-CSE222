const repeatedFunction = () => {
    console.log('Repeated function Executed!');
};

const intervalId = setInterval(repeatedFunction, 1000); // 1 second

// In case you want to stop the interval after some time
setTimeout(() => {
    clearInterval(intervalId);
} , 5000); // 5 seconds