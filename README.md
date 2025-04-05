Task Manager Frontend
Setup
Frontend README (frontend/README.md)
# Task Manager Frontend

This is the frontend for the Task Manager application built with React and TypeScript. It provides a user interface for registration, login, and managing tasks.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)

## Setup

1. **Clone the Repository and Navigate to the Frontend Folder**

   ```bash
   git clone <your-repo-url>
   cd project-root/frontend
   npm install

.env -REACT_APP_API_URL=http://localhost:5000


Task Manager Backend
This is the backend for the Task Manager application built with Node.js, TypeScript, Express, and PostgreSQL. It provides user authentication (registration and login) and CRUD endpoints for managing tasks.

Table of Contents
Prerequisites
Setup
Clone and Install Dependencies
Environment Variables
Database Setup
Running the Server
API Endpoints
Troubleshooting
Notes
Prerequisites
Node.js (v14 or higher recommended)
npm
PostgreSQL installed and running
(Ensure the PostgreSQL bin directory is in your system's PATH so you can run psql)
Setup
Clone and Install Dependencies
Clone the repository (replace <your-repo-url> with the actual URL):

git clone <your-repo-url>
cd project-root/backend
npm install

.env-PORT=5000 DATABASE_URL=postgres://postgres:Harshith%40123@localhost:5432/task_manager JWT_SECRET=your_jwt_secret_here

npm run dev

Database Setup
Create the Database:

Open a terminal and run:

psql -U postgres When prompted, enter your PostgreSQL password. Then, create the database by running:

CREATE DATABASE task_manager; \q Run Migrations:

A migration script (migrations.sql) is provided to create the required tables. Run the following command (adjust the path as necessary):

psql -U postgres -d task_manager -f "C:\Users\harsh\Downloads\FULLSTACK PROJECT\project-root\backend\migrations.sql" This script should create tables such as users and tasks.

Verify Tables:

Connect to the database again:

psql -U postgres -d task_manager And list tables:

\dt You should see your tables listed (e.g., users and tasks). Then exit with \q.
