// "Buffer" is a global object in Node.js, and it is a class that provides a way to work with binary data directly.

// Creating a buffer of size 5 bytes
const buf = Buffer.alloc(5);
console.log(buf); // OUTPUT : <Buffer 00 00 00 00 00>

// Writing data to the buffer
buf.write('Hello', 'utf-8');
// Reading data from the buffer
const data = buf.toString('utf-8'); 
console.log(data); // OUTPUT : Hello