// Write a middleware function in Express.js that logs the timestamp,
// HTTP Method, and URL of every incoming request to a file named 'request.log'.
// Ensure that the log file is created if it doesn't exist and that new log entries are appended to it.

const express = require('express');
const fs = require('fs');
const app = express();

// Middleware function for logging incoming requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request for ${req.url}`);
    fs.appendFile('request.log', `${new Date().toISOString()} - ${req.method} request for ${req.url}\n`, (err) => {
        if (err) {
            console.log('Error writing to log file');
        }
    });
    next(); // Passes control to the next middleware function
});

// Middleware function to add a custom header to outgoing responses
app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'Hello from Custom Header!');
    next();
});

// Route Handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);