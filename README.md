# Employee Management System (EMS)

A full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js) designed to manage employee records, system interactions, and administrative operations seamlessly.

## 🚀 Features

- **Full-Stack Architecture:** Decoupled front-end client and back-end server environments.
- **RESTful API:** Robust backend endpoints handling CRUD operations for employee data.
- **Data Modeling:** Strict data validation and schema structures utilizing Mongoose.
- **Modern UI:** Responsive, component-driven user interface built with React and Vite.
- **Environment Security:** Secured configuration flags and connection strings using environment isolated variables.

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript (ES6+), Vite, CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose ODM)
- **Version Control:** Git & GitHub

## 📦 Project Structure

```text
ems/
├── ems-frontend/     # React client application
└── ems-backend/      # Node.js / Express server API
```

## ⚙️ Local Setup Instructions

Follow these steps to run the application locally on your machine.

### Prerequisites

- Node.js (v16.x or higher recommended)
- MongoDB instance (Local or Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com
cd ems
```

### 2. Backend Installation & Setup
Navigate to the backend directory, install the server dependencies, and configure environment paths:
```bash
cd ems-backend
npm install
```
*Create a `.env` file in the `ems-backend` root folder based on the `.env.example` keys:*
```text
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Start the server:
```bash
npm start
```

### 3. Frontend Installation & Setup
Open a new terminal window, navigate to the frontend directory, and spin up the development client:
```bash
cd ems-frontend
npm install
npm run dev
```
