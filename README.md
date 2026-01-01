
# 👨‍💼 Employee Management System (EMS)

A **role-based Employee Management System** built with **React + Vite + Tailwind CSS**, demonstrating **Admin & Employee dashboards**, **task management**, and **authentication using localStorage**.
<!--
> 🚀 Designed as a frontend-focused project with clean architecture and interview-ready concepts.
-->

---

## ✨ Features

### 🔐 Role-Based Authentication
- Admin login
- Employee login
- Dynamic dashboard rendering based on role

### 🧑‍💻 Admin Capabilities
- Create & assign tasks to employees
- View all employee tasks
- Monitor task status counts

### 👨‍🔧 Employee Capabilities
- View assigned tasks
- Accept tasks
- Mark tasks as completed or failed
- Task status updates in real-time (localStorage)

### 📊 Task Status Tracking
- New Tasks
- Accepted Tasks
- Completed Tasks
- Failed Tasks

---

## 🛠️ Tech Stack

| Category | Technology |
|-------|------------|
| Frontend | React (Vite) |
| Styling | Tailwind CSS |
| State Management | React Context API |
| Authentication | localStorage (Simulated) |
| Build Tool | Vite |
| Linting | ESLint |

---

## 📁 Project Structure

```

├── public
│   └── vite.svg
├── src
│   ├── components
│   │   ├── Auth
│   │   │   └── Login.jsx
│   │   ├── Dashboard
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── TaskList
│   │   │   ├── AcceptTask.jsx
│   │   │   ├── CompleteTask.jsx
│   │   │   ├── FailedTask.jsx
│   │   │   ├── NewTask.jsx
│   │   │   └── TaskList.jsx
│   │   └── other
│   │       ├── AllTask.jsx
│   │       ├── CreateTask.jsx
│   │       ├── Header.jsx
│   │       └── TaskListNumbers.jsx
│   ├── context
│   │   └── AuthProvider.jsx
│   ├── utils
│   │   └── localStorage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── README.md

```

---

## 🔄 Application Flow

### 🔑 Authentication Flow
```

Login → Save user (role + email) in localStorage
→ AuthContext reads user
→ Role-based dashboard rendered

```

### 📋 Task Flow
```

Admin creates task
↓
Task saved in localStorage
↓
Employee views task
↓
Accept / Complete / Fail
↓
Task status updated

````

---

## 🧠 How Role-Based Access Works

- User role (`admin` or `employee`) is stored in `localStorage`
- React Context (`AuthProvider`) manages auth state
- Dashboards render conditionally based on role
- Backend behavior is **simulated** using utilities

---

## 🧪 Sample localStorage Structure

```js
loggedInUser = {
  role: "employee",
  email: "john@gmail.com"
}

employees = [
  {
    firstname: "John",
    email: "john@gmail.com",
    tasks: [
      { title: "Fix Bug", status: "new" }
    ]
  }
]
````

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Krishnandu-Halder/EMS-webapp.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

<!--
---
## ⚠️ Limitations (Important for Interviews)

❌ No backend (Node/Express)
❌ No database (MongoDB)
❌ No JWT or real authentication
❌ localStorage is not secure

> ✅ These are intentional to keep the project frontend-focused and beginner-friendly.
-->
---

## 🔥 How This Can Be Upgraded to Full MERN

| Current       | Upgrade            |
| ------------- | ------------------ |
| localStorage  | MongoDB            |
| Context Auth  | JWT + Cookies      |
| Fake users    | User Schema        |
| Task Utils    | REST APIs          |
| UI Role Check | Backend Middleware |

---

## 🎯 What This Project Demonstrates
```
✔ Role-Based Access Control (RBAC)
✔ React Context API
✔ Component-based architecture
✔ Task state management
✔ Clean folder structure
```
<!-- ---

## 🧑‍💼 Interview Explanation (30 Seconds)

> “This is a role-based Employee Management System built using React and Tailwind CSS. It features separate dashboards for Admins and Employees, task creation and tracking, and authentication simulated using localStorage and Context API. The project focuses on frontend architecture and can be easily extended into a full MERN stack application.”
-->
---

## 📌 Future Enhancements

* 🔐 JWT authentication
* 🗄️ MongoDB database
* 🌐 REST APIs
* 📈 Analytics dashboard
* 📱 Responsive mobile UI

---

## 🧑‍💻 Author

**Krishnendu Halder**
🎓 B.Tech CSE (AI & ML)
💼 Aspiring Full Stack Developer

📫 *Feel free to connect and contribute!*

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub!

