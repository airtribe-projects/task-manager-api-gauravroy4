# 🗂️ Task Manager API

A simple and flexible RESTful API for managing tasks, built using **Node.js** and **Express.js**. It supports full CRUD operations, filtering, sorting, and task prioritization, and uses in-memory data storage for easy development and testing.

---

## 🚀 Features

- ✅ Get all tasks with optional filtering (`completed`) and sorting (`creationDate`)
- 🔍 Get a single task by ID
- 🎯 Filter tasks by priority level (`low`, `medium`, `high`)
- ✍️ Create a new task with required fields
- ♻️ Update a task (title, description, completion, priority)
- ❌ Delete a task by ID

---

## 🏗️ Tech Stack

- **Node.js**
- **Express.js**
- **JavaScript (ES6+)**
- In-memory storage (for demo purposes)

---

## 📁 Project Structure

```
project-root/
│
├── app.js                  # Entry point & route handlers
├── helpers/
│   └── taskHelpers.js      # Business logic & task operations
├── data/
│   └── dbData.js           # Mock database (in-memory)
├── package.json
└── README.md
```

---

## 🔄 API Endpoints

### Base URL

```
http://localhost:3000
```

### Routes

#### 🔹 Welcome

```http
GET /
```
Returns a welcome message.

---

#### 🔹 Get All Tasks

```http
GET /tasks
```

**Optional Query Parameters:**
- `completed=true|false` – filter by completion status
- `sortBy=creationDate` – sort by creation date
- `orderBy=asc|desc` – ascending (default) or descending order

---

#### 🔹 Get Task by ID

```http
GET /tasks/:id
```

---

#### 🔹 Get Tasks by Priority

```http
GET /tasks/priority/:level
```

**Path Parameters:**
- `level` – must be one of: `low`, `medium`, `high`

---

#### 🔹 Create Task

```http
POST /tasks
```

**Body Parameters (JSON):**
```json
{
  "title": "Task title",
  "description": "Task description",
  "completed": false,
  "priority": "medium"
}
```

**Note:** `title`, `description`, and `completed` are required. `priority` defaults to `"low"` if not provided.

---

#### 🔹 Update Task

```http
PUT /tasks/:id
```

**Body Parameters (JSON):** (any combination)
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "completed": true,
  "priority": "high"
}
```

---

#### 🔹 Delete Task

```http
DELETE /tasks/:id
```

---

## 📊 Sample Data

Tasks are initially populated from `data/dbData.js`. Each task has:

```js
{
  id: Number,
  title: String,
  description: String,
  completed: Boolean,
  creationDate: ISOString,
  priority: "low" | "medium" | "high"
}
```

---

## 🛠️ Installation & Usage

### Prerequisites

- Node.js ≥ 14.x
- npm ≥ 6.x

### Install Dependencies

```bash
npm install
```

### Run the Server

```bash
node app.js
```

You should see:

```
Server is listening on 3000
```

### (Optional) Use Nodemon

```bash
npx nodemon app.js
```

---

## 📌 Notes

- This API uses in-memory data. All data resets on server restart.
- Ideal for learning, prototyping, or extending into a persistent DB model like MongoDB/PostgreSQL.

---

## 📬 Future Enhancements

- [ ] Add pagination and limit/offset
- [ ] Add validation middleware using `Joi` or `express-validator`
- [ ] Connect to a MongoDB or SQL database
- [ ] Add authentication (e.g., JWT)
- [ ] Add Swagger/OpenAPI documentation

---

## 👨‍💻 Author

**Gaurav Kumar**  
Senior SFCC Developer  
[LinkedIn](https://www.linkedin.com/in/4roygaurav/) • [GitHub](https://github.com/gauravroy4/gauravroy4)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).