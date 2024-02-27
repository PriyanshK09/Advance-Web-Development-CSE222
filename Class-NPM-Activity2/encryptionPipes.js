const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    const filePath = './input.txt';
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Encoding': 'gzip'
    });

    readStream.pipe(zlib.createGzip()).pipe(res);
    readStream.on('error', (err) => {
        console.log('Error: ', err);
    }
    );
    res.on('error', (err) => {
        console.log('Error: ', err);
    }
    );
    readStream.on('end', () => {
        console.log('File has been read');
    }
    );
}
);

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
