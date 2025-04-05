📋 Task Manager Application
This is a full-stack Task Manager application built with React (TypeScript) on the frontend and Node.js + Express + PostgreSQL (TypeScript) on the backend. It allows users to register, log in, and manage their tasks with a clean and intuitive UI.

🖥️ Frontend (React + TypeScript)
Features
User Registration & Login

Create, Update, and Delete Tasks

Responsive and clean UI

Prerequisites
Node.js (v14+ recommended)

npm

Setup Instructions
Clone the Repository and Navigate to the Frontend Folder

bash
Copy
Edit
git clone <your-repo-url>
cd project-root/frontend
Install Dependencies

bash
Copy
Edit
npm install
Set Environment Variables Create a .env file in the frontend directory with the following:

ini
Copy
Edit
REACT_APP_API_URL=http://localhost:5000
Run the Frontend

bash
Copy
Edit
npm start
🛠️ Backend (Node.js + Express + PostgreSQL + TypeScript)
Features
JWT Authentication (Login & Registration)

Task Management API (CRUD)

PostgreSQL for data persistence

Prerequisites
Node.js (v14+ recommended)

npm

PostgreSQL (Ensure it's installed and running, and psql is available in your terminal)

Setup Instructions
Navigate to the Backend Folder

bash
Copy
Edit
cd project-root/backend
Install Dependencies

bash
Copy
Edit
npm install
Create .env File Create a .env file in the backend directory with the following:

ini
Copy
Edit
PORT=5000
DATABASE_URL=postgres://postgres:your_password@localhost:5432/task_manager
JWT_SECRET=your_jwt_secret_here
Create the PostgreSQL Database

bash
Copy
Edit
psql -U postgres
Once inside the psql shell:

sql
Copy
Edit
CREATE DATABASE task_manager;
\q
Run Migrations Run the following command to create the required tables:

bash
Copy
Edit
psql -U postgres -d task_manager -f path/to/migrations.sql
Replace path/to/migrations.sql with the actual path to your migration file.

Verify Tables

bash
Copy
Edit
psql -U postgres -d task_manager
\dt
\q
Start the Backend Server

bash
Copy
Edit
npm run dev
🚀 Project Demo
Check out the live demo walkthrough here:
📹 YouTube Video – Task Manager Demo

🧩 Folder Structure
bash
Copy
Edit
project-root/
├── frontend/      # React + TypeScript frontend
├── backend/       # Node.js + Express backend
└── README.md      # Project documentation
📌 Notes
Ensure PostgreSQL is running before starting the backend server.

Use .env files to store sensitive configuration.

Customize JWT_SECRET and database credentials for production environments.
