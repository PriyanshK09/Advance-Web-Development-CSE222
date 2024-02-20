const fs = require('fs');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Write data to the stream
const data = ['Hello World!\n', 'Another line\n', 'Yet another line'];
// Write data in Chunks
data.forEach(chunk => {
    writableStream.write(chunk);
});

// End the stream
writableStream.end();