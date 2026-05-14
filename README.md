````markdown
# Task Manager Application

A full-stack Task Manager application built with **React + TypeScript** on the frontend and **Node.js + Express + PostgreSQL + TypeScript** on the backend.

The application allows users to register, log in, and manage tasks through a clean and responsive user interface.

---

## Features

### Frontend
- User registration and login
- Create, update, and delete tasks
- Responsive and clean UI
- API integration with backend

### Backend
- JWT-based authentication
- User registration and login APIs
- Task CRUD APIs
- PostgreSQL database integration
- TypeScript-based Express server

---

## Tech Stack

### Frontend
- React
- TypeScript
- npm

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- JWT Authentication

---

## Project Structure

```bash
project-root/
├── frontend/      # React + TypeScript frontend
├── backend/       # Node.js + Express + PostgreSQL backend
└── README.md      # Project documentation
````

---

## Prerequisites

Before running the project, make sure you have the following installed:

* Node.js v14 or above
* npm
* PostgreSQL
* psql command-line tool

---

## Frontend Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd project-root/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file inside the `frontend` folder:

```env
REACT_APP_API_URL=http://localhost:5000
```

### 4. Start the Frontend

```bash
npm start
```

The frontend will run at:

```bash
http://localhost:3000
```

---

## Backend Setup

### 1. Navigate to the Backend Folder

```bash
cd project-root/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
DATABASE_URL=postgres://postgres:your_password@localhost:5432/task_manager
JWT_SECRET=your_jwt_secret_here
```

Replace `your_password` with your PostgreSQL password.

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

Exit the PostgreSQL shell:

```sql
\q
```

---

## Run Database Migrations

Run the migration file to create the required tables:

```bash
psql -U postgres -d task_manager -f path/to/migrations.sql
```

Replace `path/to/migrations.sql` with the actual path to your migration file.

Example:

```bash
psql -U postgres -d task_manager -f backend/migrations.sql
```

---

## Verify Database Tables

```bash
psql -U postgres -d task_manager
```

Inside the PostgreSQL shell, run:

```sql
\dt
```

Exit using:

```sql
\q
```

---

## Start the Backend Server

```bash
npm run dev
```

The backend server will run at:

```bash
http://localhost:5000
```

---

## Running the Full Application

Open two terminals:

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

Then open:

```bash
http://localhost:3000
```

---

## Demo

Project demo walkthrough:

[YouTube Demo Video](https://youtube.com/watch?v=WXXPRYRlVPY&si=JIQytMLqxDndV6ZX)

---

## Important Notes

* Make sure PostgreSQL is running before starting the backend.
* Keep `.env` files private and do not push them to GitHub.
* Change `JWT_SECRET` before using the application in production.
* Update database credentials based on your local PostgreSQL setup.
* Make sure the frontend API URL matches the backend server URL.

---

## Author
Harshith Basavaraju
