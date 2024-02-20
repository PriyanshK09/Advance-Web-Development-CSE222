const buffer1 = Buffer.from('Node.js ');
const buffer2 = Buffer.from('is a runtime environment');

// Concatenating two buffers
const concatenatedBuffer = Buffer.concat([buffer1, buffer2]);
console.log(concatenatedBuffer.toString('utf-8')); // OUTPUT : Node.js is a runtime environment

// Size of the concatenated buffer
console.log(concatenatedBuffer.length); // OUTPUT : 31