const fs = require('fs');

// Create a readable stream with  smaller chunk size of 64 bytes
const readableStream = fs.createReadStream('input.txt', {encoding: 'utf8', highWaterMark: 64});

// Listen for the 'data' event
readableStream.on('data', (chunk) => {
    console.log('Received chunk:');
    console.log(chunk);
});

// Listen for the 'end' event
readableStream.on('end', () => {
    console.log('There will be no more data.');
});

// Listen for the 'error' event
readableStream.on('error', (err) => {
    console.error('An error occurred:', err);
});


