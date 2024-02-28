const express = require('express');
const app = express();

// Middleware Function
app.use((req, res, next) => {
    console.log('This is a Middleware Function');
    next(); // Call the next middleware function in the stack
});


app.get('/', (req, res) => {
    res.send('Hello World');
});

// Why is the following middleware function not called?
// res.send closes the response and does not call the next middleware function

app.use((req, res, next) => {
    console.log('This is another Middleware Function');
    next();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});