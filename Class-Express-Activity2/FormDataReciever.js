// You are building an Express Application that needs to handle form submissions
// containing URL-encoded data. Using the build in URL-Encoded body parser middleware
// , write a route handler to handle POST requests to the /submit endpoint.
// Parse the incoming URL-encoded form data and log it to the console.

// Hint :
// app.use(express.urlencoded({ extended: false }));

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
