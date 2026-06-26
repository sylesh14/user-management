# User Management System - Backend

A REST API built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication** that provides user authentication, role-based authorization, user management, post creation, and post analytics.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Cookie Parser

---

## Features

### Authentication

- User Signup
- User Login
- User Logout
- JWT Authentication using HTTP-only Cookies
- Password Hashing using Bcrypt

### Role Based Access Control

- Admin
- User

Protected routes using middleware.

### User Management

- Get all users
- Search users
- Filter users
- Admin-only access

### Posts

- Create Post
- Get All Posts
- Like Posts
- Track Like Count

---

## Installation

Clone the repository

```bash
git clone https://github.com/sylesh14/user-management
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run the application

```bash
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint     | Description   |
| ------ | ------------ | ------------- |
| POST   | /auth/signup | Register User |
| POST   | /auth/login  | Login User    |
| POST   | /auth/logout | Logout User   |

---

### Users

| Method | Endpoint | Access |
| ------ | -------- | ------ |
| GET    | /users   | Admin  |

---

### Posts

| Method | Endpoint        |
| ------ | --------------- |
| POST   | /posts          |
| GET    | /posts          |
| POST   | /posts/:id/like |

---

## Authentication

JWT Token is stored securely using HTTP-only cookies.

---

## Author

Sylesh
