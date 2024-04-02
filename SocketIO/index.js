// Importing the required modules
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const app = express();

// Define the path to your HTML file
const publicPath = path.join(__dirname, 'public');

// Creating a server instance and attaching the express app to it
const server = app.listen(3000, () => {
    console.log("Server Started");
})

const io = socketIO(server); // Attach Socket.IO to the server instance
app.use(express.static(publicPath)); // Serve static files from the 'public' directory

// Handling the connection event
io.on('connection', (socket) => {
    console.log("A user has connected to server");
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })    

    // Listen for user joined
    socket.on('join', data => {
        console.log('A user has joined the chat');
        socket.username = data;
        socket.emit('chat message', { type: 'notfication', message: `${socket.username} has joined the chat` });
    });

    // Listen for chat message
    socket.on('chat message', msg => {
        io.emit('chat message', { type: 'message', username: socket.username, message: msg });
    });

    // Listen for user left
    socket.on('disconnect', data => {
        console.log('A user has left the chat');
        if(socket.username) {
            socket.emit('chat message', { type: 'notfication', message: `${socket.username} has left the chat` });
        }
    });
})

