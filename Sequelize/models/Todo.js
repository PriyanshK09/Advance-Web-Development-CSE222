const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Todo = sequelize.define('Todo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
        tableName: 'todos', // Match the table name in the database
        timestamps: false, // Disable timestamps
});

module.exports = Todo;