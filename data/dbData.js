let tasks = [
    {
        id: 1,
        title: "Set up environment",
        description: "Install Node.js, npm, and git",
        completed: true,
        creationDate: "2023-11-13T10:45:00Z",
        priority: "medium"
    },
    {
        id: 2,
        title: "Create a new project",
        description: "Create a new project using the Express application generator",
        completed: true,
        creationDate: "2024-04-06T14:23:00Z",
        priority: "low"
    },
    {
        id: 3,
        title: "Install nodemon",
        description: "Install nodemon as a development dependency",
        completed: true,
        creationDate: "2023-08-25T08:30:00Z",
        priority: "high"
    },
    {
        id: 4,
        title: "Install Express",
        description: "Install Express",
        completed: false,
        creationDate: "2025-01-17T12:15:00Z",
        priority: "low"
    },
    {
        id: 5,
        title: "Install Mongoose",
        description: "Install Mongoose",
        completed: false,
        creationDate: "2023-10-02T09:00:00Z",
        priority: "medium"
    },
    {
        id: 6,
        title: "Install Morgan",
        description: "Install Morgan",
        completed: false,
        creationDate: "2024-12-10T11:45:00Z",
        priority: "low"
    },
    {
        id: 7,
        title: "Install body-parser",
        description: "Install body-parser",
        completed: false,
        creationDate: "2024-02-14T13:20:00Z",
        priority: "high"
    },
    {
        id: 8,
        title: "Install cors",
        description: "Install cors",
        completed: false,
        creationDate: "2023-06-18T15:00:00Z",
        priority: "medium"
    },
    {
        id: 9,
        title: "Install passport",
        description: "Install passport",
        completed: false,
        creationDate: "2025-03-05T09:50:00Z",
        priority: "high"
    },
    {
        id: 10,
        title: "Install passport-local",
        description: "Install passport-local",
        completed: false,
        creationDate: "2024-06-09T17:10:00Z",
        priority: "low"
    },
    {
        id: 11,
        title: "Install passport-local-mongoose",
        description: "Install passport-local-mongoose",
        completed: false,
        creationDate: "2023-12-01T10:30:00Z",
        priority: "medium"
    },
    {
        id: 12,
        title: "Install express-session",
        description: "Install express-session",
        completed: false,
        creationDate: "2024-10-28T16:05:00Z",
        priority: "high"
    },
    {
        id: 13,
        title: "Install connect-mongo",
        description: "Install connect-mongo",
        completed: false,
        creationDate: "2023-07-04T08:00:00Z",
        priority: "low"
    },
    {
        id: 14,
        title: "Install dotenv",
        description: "Install dotenv",
        completed: false,
        creationDate: "2024-01-21T18:40:00Z",
        priority: "medium"
    },
    {
        id: 15,
        title: "Install jsonwebtoken",
        description: "Install jsonwebtoken",
        completed: false,
        creationDate: "2025-05-12T07:25:00Z",
        priority: "high"
    }
];

const acceptablePriority = ['low', 'medium', 'high'];

module.exports = {
    tasks: tasks,
    acceptablePriority: acceptablePriority
};
