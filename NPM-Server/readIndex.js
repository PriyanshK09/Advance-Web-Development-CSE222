const http = require('http'); // Import Node.js core module
const fs = require('fs'); // Import Node.js core module

// req : request, res : response
const server = http.createServer((req, res) => {
    // res.end('Hello World!'); // Send a response
    if (req.url == "/"){
        fs.readFile('FileSystem/firstExample.txt', 'utf-8', (err, data) => {
            if (err){
                console.error(err);
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('File Content: ' + data);
        })
    }
}); // Create a server

const port = 3000; // Define a port

server.listen(port, () => // Start the server
  console.log(`Server is running on port ${port}`)); // Print a message