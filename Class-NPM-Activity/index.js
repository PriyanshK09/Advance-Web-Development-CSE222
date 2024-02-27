// Design a NODEJS application that can handle data submitted through a form on '/submit' route,
// and 'GET' method, the data when received at backend should be saved in file.
// Make use of stream module and URL Modules

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let path = url.parse(req.url, true);
    console.log(path);
    if (req.url === '/') {
        const readableStream = fs.createReadStream('/home/priyansh/Desktop/Advance-Web-Development-CSE222/Class-NPM-Activity/index.html', (encoding = 'utf8'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readableStream.pipe(res);
    } else if (path.pathname === '/submit') {
        const writableStream = fs.createWriteStream('/home/priyansh/Desktop/Advance-Web-Development-CSE222/Class-NPM-Activity/form-data.txt', { flags: 'a' });

        // Writing user entered data to file from query string with append to save old data too : we are using FLAG "A" in writeable stream

        writableStream.write('Name: ' + path.query.name + '\n');
        writableStream.write('Email: ' + path.query.email + '\n');
        writableStream.write('Phone: ' + path.query.phone + '\n');
        writableStream.write('Age: ' + path.query.age + '\n');
        writableStream.write('Password: ' + path.query.password + '\n');
        writableStream.write('\n')

        writableStream.end();
        res.end('Data has been saved');
    }
});

const port = 5001;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});