const dbData = require('../data/dbData');
let tasks = dbData.tasks;
const acceptablePriority = dbData.acceptablePriority;

// Get all tasks
function getAllTasks(req) {
    let result = tasks;
    try {
        if (req.query && req.query.completed) {
            const completed = req.query.completed.toLowerCase() === 'true';
            result = tasks.filter(task => task.completed === completed);
        }

        const sortBy = req.query && req.query.sortBy ? req.query.sortBy : 'creationDate'; // Default to sorting by creationDate
        const orderBy = req.query && req.query.orderBy ? req.query.orderBy : 'asc'; // Older tasks first by default
        if (sortBy === 'creationDate') {
            result = result.sort((a, b) => {
                const dateA = new Date(a.creationDate);
                const dateB = new Date(b.creationDate);
                return orderBy === 'asc' ? dateA - dateB : dateB - dateA;
            });
        }

        return result;
    } catch (error) {
        return {
            error: true,
            title: "An error occurred while retrieving tasks. Please try again later.",
            errorMessage: error.message
        };
    }

}

// Get task by ID
function getTaskById(id) {
    return tasks.find(task => task.id === parseInt(id));
}

// Get task by priority level
function getTasksByPriority(level) {
    const tasksByPriority = tasks.filter(task => task.priority && task.priority.toLowerCase() === level.toLowerCase());
    if (tasksByPriority.length === 0) {
        return {
            message: `No tasks found with priority level: ${level}`
        };
    }
    return tasksByPriority;
}

// Create a new task
function createTask(requestBody) {
    const { title, description, completed, priority } = requestBody;

    if (!title || !description || (completed === undefined || typeof completed !== 'boolean')) {
        return {
            error: true,
            message: "Invalid request body. Please provide title, description, and completed status. Completed must be a boolean."
        }
    }

    const newTask = {};
    newTask.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1; // Ensure unique ID
    newTask.creationDate = new Date();
    newTask.lastUpdated = new Date();
    newTask.title = title;
    newTask.description = description;
    newTask.completed = completed !== undefined ? completed : false; // Default to false if not provided
    newTask.priority = priority !== undefined ? priority : 'low'; // Default to 'low' if not provided

    tasks.push(newTask);
    return newTask;
}

// Update a task by ID
function updateTask(id, requestBody) {
    const task = getTaskById(id);
    if (!task) {
        return {
            error: true,
            invalidId: true,
            message: "Invalid task ID. Task not found."
        };
    }

    const { title, description, completed, priority } = requestBody;

    if (!title || !description || (completed === undefined || typeof completed !== 'boolean')) {
        return {
            error: true,
            invalidData: true,
            message: "Invalid request body. Required fields title, description, and completed status. Completed must be a boolean. Priority Optional."
        }
    }

    task.lastUpdated = new Date(); // Update last updated date
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;
    if (priority !== undefined) task.priority = priority;

    return task;
}

// Delete a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index === -1) return null;

    const deletedTask = tasks.splice(index, 1);
    return deletedTask;
}

// Export the functions
module.exports = {
    getAllTasks,
    getTaskById,
    getTasksByPriority,
    createTask,
    updateTask,
    deleteTask
};
