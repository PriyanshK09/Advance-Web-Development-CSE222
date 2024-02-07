const http = require('http'); // Import Node.js core module
const fs = require('fs'); // Import Node.js core module

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const message = // how to add multiple lines of text
            `<!DOCTYPE html>
            <html>
            <head>
                <title>Node.js File System</title>
            </head>
            <body>
                <h1>Node.js File System</h1>
                <p>Node.js has a built-in module called fs which stands for File System. Using this module, you can interact with the file system of your computer.</p>
            </body>
            </html>`;

        fs.writeFile('FileSystem/index.html', message, (err) => {
            if (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(message);
        });
    }
}
);

const port = 3000; // Define a port
server.listen(port, () => console.log('Server is running on port ' + port)); // Start the server