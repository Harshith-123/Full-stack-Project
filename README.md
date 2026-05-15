````markdown
# Task Manager Application

A full-stack Task Manager application built with **React + TypeScript** on the frontend and **Node.js + Express + PostgreSQL + TypeScript** on the backend.

The application allows users to register, log in, and manage their daily tasks through a clean, responsive, and user-friendly interface. It includes secure authentication, task CRUD operations, and PostgreSQL-based data storage.

---

## Project Overview

The Task Manager Application is designed to help users organize and track their tasks efficiently. Users can create an account, log in securely, and manage their personal tasks by adding, updating, completing, and deleting them.

This project demonstrates full-stack development concepts such as frontend-backend integration, REST API development, JWT authentication, database design, TypeScript-based development, and PostgreSQL connectivity.

---

## Features

### User Features

- User registration
- User login
- Secure authentication using JWT
- Create new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- Responsive user interface

### Frontend Features

- Built with React and TypeScript
- Clean and responsive UI
- Form handling for login, registration, and tasks
- API integration with backend services
- Error handling and user feedback

### Backend Features

- RESTful API development using Express.js
- JWT-based authentication
- User registration and login APIs
- Protected task management routes
- PostgreSQL database integration
- TypeScript-based server structure
- Environment variable configuration

---

## Tech Stack

### Frontend

- React
- TypeScript
- HTML
- CSS
- npm

### Backend

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- JWT Authentication

### Tools

- Git
- GitHub
- VS Code
- PostgreSQL CLI / pgAdmin
- npm

---

## Project Structure

```bash
Full-stack-Project/
│
├── frontend/              # React + TypeScript frontend
│   ├── src/               # Frontend source code
│   ├── public/            # Static files
│   ├── package.json
│   └── .env
│
├── backend/               # Node.js + Express + PostgreSQL backend
│   ├── src/               # Backend source code
│   ├── package.json
│   ├── migrations.sql     # Database table creation script
│   └── .env
│
└── README.md              # Project documentation
````

---

## Prerequisites

Before running the project, make sure you have the following installed:

* Node.js v14 or above
* npm
* PostgreSQL
* psql command-line tool
* Git
* Visual Studio Code or any code editor

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Harshith-123/Full-stack-Project.git
```

```bash
cd Full-stack-Project
```

---

## Backend Setup

### 1. Navigate to the Backend Folder

```bash
cd backend
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Create Backend Environment File

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
DATABASE_URL=postgres://postgres:your_password@localhost:5432/task_manager
JWT_SECRET=your_jwt_secret_here
```

Replace:

```text
your_password
```

with your PostgreSQL password.

Replace:

```text
your_jwt_secret_here
```

with a strong secret key.

Example:

```env
PORT=5000
DATABASE_URL=postgres://postgres:admin123@localhost:5432/task_manager
JWT_SECRET=my_task_manager_secret_key
```

---

## PostgreSQL Database Setup

### 1. Open PostgreSQL Shell

```bash
psql -U postgres
```

### 2. Create the Database

```sql
CREATE DATABASE task_manager;
```

### 3. Exit PostgreSQL Shell

```sql
\q
```

### 4. Run Database Migration

Run the SQL migration file to create the required tables.

From the project root, use:

```bash
psql -U postgres -d task_manager -f backend/migrations.sql
```

If your migration file is located somewhere else, update the path accordingly.

### 5. Verify Tables

```bash
psql -U postgres -d task_manager
```

Inside PostgreSQL shell, run:

```sql
\dt
```

Then exit:

```sql
\q
```

---

## Start the Backend Server

Inside the `backend` folder, run:

```bash
npm run dev
```

The backend server will run at:

```text
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal.

### 1. Navigate to the Frontend Folder

From the project root:

```bash
cd frontend
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Create Frontend Environment File

Create a `.env` file inside the `frontend` folder.

```env
REACT_APP_API_URL=http://localhost:5000
```

Make sure this URL matches your backend server URL.

### 4. Start the Frontend

```bash
npm start
```

The frontend will run at:

```text
http://localhost:3000
```

---

## Running the Full Application

Open two terminals.

### Terminal 1: Backend

```bash
cd backend
npm run dev
```

### Terminal 2: Frontend

```bash
cd frontend
npm start
```

Then open the application in your browser:

```text
http://localhost:3000
```

---

## API Endpoints

### Authentication Routes

| Method | Endpoint             | Description                     |
| ------ | -------------------- | ------------------------------- |
| POST   | `/api/auth/register` | Register a new user             |
| POST   | `/api/auth/login`    | Login user and return JWT token |

### Task Routes

| Method | Endpoint         | Description                      |
| ------ | ---------------- | -------------------------------- |
| GET    | `/api/tasks`     | Get all tasks for logged-in user |
| POST   | `/api/tasks`     | Create a new task                |
| PUT    | `/api/tasks/:id` | Update an existing task          |
| DELETE | `/api/tasks/:id` | Delete a task                    |

Note: Actual route paths may vary based on your backend implementation. Update this section if your routes are different.

---

## Environment Variables

### Backend `.env`

```env
PORT=5000
DATABASE_URL=postgres://postgres:your_password@localhost:5432/task_manager
JWT_SECRET=your_jwt_secret_here
```

### Frontend `.env`

```env
REACT_APP_API_URL=http://localhost:5000
```

---

## Usage

1. Start the backend server.
2. Start the frontend application.
3. Open the frontend in your browser.
4. Register a new account.
5. Log in using your credentials.
6. Create and manage your tasks.
7. Update or delete tasks whenever required.
8. Log out after use.

---

## Demo

Project demo walkthrough:

```text
https://youtube.com/watch?v=WXXPRYRlVPY&si=JIQytMLqxDndV6ZX
```
---

## Important Notes

* Make sure PostgreSQL is running before starting the backend.
* Do not push `.env` files to GitHub.
* Keep your `JWT_SECRET` private.
* Update the database credentials based on your local PostgreSQL setup.
* Make sure the frontend API URL matches the backend server URL.
* Run database migrations before starting the backend.
* Use strong credentials before deploying the application.

---

## Future Enhancements

* Add task priority levels
* Add task due dates
* Add task categories
* Add task completion status
* Add search and filter functionality
* Add password reset functionality
* Add email reminders
* Add deployment support for Render, Railway, or Vercel
* Improve dashboard analytics

---

## Project Purpose

This project was developed to demonstrate full-stack web development using React, TypeScript, Node.js, Express, PostgreSQL, and JWT authentication. It focuses on building a secure and functional task management system with proper frontend-backend communication and database integration.

---

## Author

**Harshith Basavaraju**

GitHub: [Harshith-123](https://github.com/Harshith-123)
