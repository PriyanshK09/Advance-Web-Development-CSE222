// Design a Node.js server using the HTTP and FS modules to efficiently read the contents
// of a file ('example.txt') and stream it to another file ('example2.txt') when a client
// accesses the server's root URL.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url !== '/') {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
        return;
    }
    else {
    const rStream = fs.createReadStream('/home/priyansh/Desktop/Advance-Web-Development-CSE222/Class-NPM-Server/example.txt', {encoding: 'utf8', highWaterMark: 64});
    const writeStream = fs.createWriteStream('/home/priyansh/Desktop/Advance-Web-Development-CSE222/Class-NPM-Server/example2.txt');
    rStream.on('data', (chunk) => {
        writeStream.write(chunk);
    });
    rStream.on('end', () => {
        console.log('There will be no more data.');
    });
    res.end('File copied successfully');

    writeStream.on('finish', () => {
        console.log('Write completed');
    });
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});