const express = require('express');
const app = express();

// Middleware function for logging incoming requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request for ${req.url}`);
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
});