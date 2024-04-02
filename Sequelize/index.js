const express = require('express');
const sequelize = require('sequelize');
const Todo = require('./models/todo');
const { error } = require('jquery');

const app = express();
const port = 3002;

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    
        // Synchronize defined models to the database
        return sequelize.sync({ alter: true});
    })
    .then(() => {
        console.log('Models have been synchronized successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

app.use(express.json());
