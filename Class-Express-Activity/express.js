// Write a code demonstrating how Express.js sets up a server to handle GET requests at `/readfile`,
// read the content of `example.txt` and send it back to browser as response

const express = require('express');
const fs = require('fs');
const app = express();

app.get('/readfile', (req, res) => {
    fs.readFile('/home/priyansh/Desktop/Advance-Web-Development-CSE222/Class-Express-Activity/example.txt', 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        return;
        }
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});