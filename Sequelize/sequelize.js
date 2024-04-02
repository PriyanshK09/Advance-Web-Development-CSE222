const { Sequelize } = require('sequelize');

// Initialize Sequelize with your database credentials
const sequelize = new Sequelize('todos', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres', // Specify the database dialect
});

module.exports = sequelize;