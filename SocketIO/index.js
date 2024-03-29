// Importing the required modules
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const app = express();

// Creating a server instance and attaching the express app to it
const server = app.listen(3000, () => {
    console.log("Server Started");
})
const io = socketIO(server); // Attach Socket.IO to the server instance
app.use(express.static(path.join(__dirname)));

// Handling the connection event
io.on('connection', (socket) => {
    console.log("A user has connected to server");
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })    
})
