const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
});

// Delete a todo by index
app.delete('/todos/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
