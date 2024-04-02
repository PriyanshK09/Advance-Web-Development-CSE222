const express = require('express');
const sequelize = require('./sequelize');
const Todo = require('./models/todo');
const app = express();
const PORT = 3000;
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log('All models were synchronized successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

app.use(express.json());

// GET endpoint to fetch all todos
app.get('/todos', (req, res) => {
    Todo.findAll()
        .then((todos) => {
            res.json(todos);
        })
        .catch(() => {
            res.status(500).json({ error: 'Internal server error' });
        });
});
// https://localhost:3000/todos/ pe json mein saare tasks show krega

// POST endpoint to create a new todo
app.post('/todos',(req,res)=>{
    const {title,completed}=req.body;
    Todo.create({title,completed})
    .then((todo)=>{
        res.status(201).json(todo);
    })
    .catch((error)=>{
        res.status(500).json({error:'Internal server error'});
    });
});
// https://localhost:3000/todos/ pe json mein new task add krenge

// PUT endpoint to update a todo
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    Todo.findByPk(id)
        .then((todo) => {
            if (!todo) {
                return res.status(404).json({ error: 'Todo not found' });
            }
            // Update the todo
            todo.title = title;
            todo.completed = completed;
            // Save the updated todo
            return todo.save();
        })
        .then((todo) => {
            res.json(todo);
        })
        .catch(() => {
            res.status(500).json({ error: 'Internal server error' });
        });
});
// https://localhost:3000/todos/1 pe json mein task update krenge

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});