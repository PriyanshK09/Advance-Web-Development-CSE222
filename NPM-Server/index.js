const http = require('http'); // Import Node.js core module

const server = http.createServer((req, res) => {
    res.end('Hello World!'); // Send a response
}); // Create a server

const port = 3000; // Define a port

server.listen(port, () => // Start the server
  console.log(`Server is running on port ${port}`)); // Print a message