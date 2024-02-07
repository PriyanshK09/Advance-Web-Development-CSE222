const http = require('http'); // Import Node.js core module
const fs = require('fs'); // Import Node.js core module

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // Synchronous file read
        try {
            const data = fs.readFileSync('FileSystem/firstExample.txt', 'utf-8');
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('File Content: ' + data);
        } catch (err) {
            console.error(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error reading the file');
        }
    }
});

const port = 3000; // Define a port
server.listen(port, () => console.log(`Server is running on port ${port}`)); // Start the server