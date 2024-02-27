// Create a Node.js Server that servers a specific text file,
// Compresses it with gzip encoding and dynamically responds to HTTP requests
// Provide a detailed solution, do without PIPE and use the zlib.gzip() method

const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        const input = fs.createReadStream('Class-NPM-Activity2/input.txt');
        let compressedData = '';
        input.on('data', (chunk) => {
            compressedData += chunk;
        });
        input.on('end', () => {
            zlib.gzip(compressedData, (err, compressedData) => {
                if (err) {
                    console.error('Error compressing data: ', err);
                    return;
                }
                else {
                    console.log('Compressed Data: ', compressedData);
                }
                res.writeHead(200, {'Content-Type': 'text/plain', 'Content-Encoding': 'gzip'});
                res.end(compressedData);
            });
        });
    }

    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
