const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Route
app.get('/', (req, res) => {
    fs.readFile('./ExpressForm/indexForm.html', (err, data) => {
        if (err) {
            res.status(500).send('Some error occurred');
        }
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    }
    );
});

// Serving Route
app.get('/submit', (req, res) => {
    res.send('Form submitted successfully');
    let data = req.query;
    console.log('New Entry Received')
    console.log('Name: ' + data.name);
    console.log('Email: ' + data.email);
    console.log('Rating: ' + data.rating);
    console.log('Comment: ' + data.message);

    // Writing to a file
    fs.appendFile('./ExpressForm/formData.txt', `Name: ${data.name}, Email: ${data.email}, Rating: ${data.rating}, Comment: ${data.message}\n`, 'utf-8', (err) => {
        if (err) {
            console.log('Some error occurred');
        }
    });
});

app.listen(port, () => {
  console.log(`Server is running on port https://localhost:${port}`);
});