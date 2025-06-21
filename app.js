const express = require('express');
const taskHelper = require('./helpers/taskHelpers');
const dbData = require('./data/dbData');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('=============================Welcome to Task Manager API==============================');
});

// Get all tasks
app.get('/tasks', (req, res) => {
    let result = taskHelper.getAllTasks(req);
    if (!result || result.error) {
        res.status(500); // 500 Internal Server Error
        res.json(result);
        return;
    }

    if (result && result.length === 0) {
        res.status(200); // 200 OK, but no content
        res.json({ Message: 'No tasks found, kindly create a task.' });
        return;
    }

    res.status(200); // 200 OK
    res.json(result);
});

// Get task by ID
app.get('/tasks/:id', (req, res) => {
    const task = taskHelper.getTaskById(req.params.id);
    if (!task) {
        res.status(404);
        res.json({ error: 'Task not found' });
        return;
    }
    res.status(200); // 200 OK
    res.json(task);
});

// Get tasks by priority level
app.get('/tasks/priority/:level', (req, res) => {
    const { level } = req.params;
    const acceptablePriority = dbData.acceptablePriority;
    if (!acceptablePriority.includes(level.toLowerCase())) {
        return res.status(400).json({ error: 'Invalid priority level' });
    }

    const tasks = taskHelper.getTasksByPriority(level);

    return res.status(200).json(tasks);
});

// Create a new task with the required fields (title, description, completed).
app.post('/tasks', (req, res) => {
    const result = taskHelper.createTask(req.body);
    if (!result || result.error) {
        res.status(400);
        res.json(result);
        return;
    }
    res.status(201); // 201 Created
    res.json(result); // Return the created task
});

// Update task
app.put('/tasks/:id', (req, res) => {
    const result = taskHelper.updateTask(req.params.id, req.body);
    if (result.error) {
        if (result.invalidId) {
            res.status(404);
            res.json(result);
            return;
        } else {
            res.status(400);
            res.json(result);
            return;
        }
    }
    res.status(200);
    res.json(result);
});

// Delete task
app.delete('/tasks/:id', (req, res) => {
    const deleted = taskHelper.deleteTask(req.params.id);
    if (!deleted) {
        res.status(404);
        res.json({ error: 'Task not found' });
        return;
    }
    res.status(200); // ideally, status should be 204 for delete operations which do not return content
    res.json(deleted);
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;