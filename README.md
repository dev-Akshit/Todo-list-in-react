# 📝 To-Do List App

A simple and efficient **To-Do List** application built with **React** that allows users to add, edit, delete, and filter tasks. It also supports **lazy loading**, loading 5 tasks at a time as the user scrolls.

## 🚀 Features

✅ Add new tasks  
✅ Mark tasks as completed/incomplete  
✅ Edit tasks  
✅ Delete tasks  
✅ Filter tasks (All, Completed, Incomplete)  
✅ Local storage support (Tasks persist after reload)  
✅ Lazy loading (Loads 5 tasks initially, more on scroll)  

## 🛠️ Tech Stack

- **React** - UI framework
- **CSS Modules** - Styling
- **Local Storage** - Data persistence

## 📂 Project Structure
```
📦 todo-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 TodoUI.js  # Main To-Do List UI
 ┃ ┃ ┣ 📜 TodoList.js # Displays list of tasks
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 style.module.css  # CSS for components
 ┃ ┣ 📜 App.js  # Root Component
 ┃ ┣ 📜 index.js  # Entry Point
 ┣ 📜 package.json
 ┣ 📜 README.md  # Project Documentation
```

## 📌 Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Run the application**
```bash
npm start
```

The app will be available at **http://localhost:3000/**

## 🎯 Usage Guide

1️⃣ **Add Task**: Type in the input box and press "Add".  
2️⃣ **Mark Complete/Incomplete**: Click on a task to toggle its status.  
3️⃣ **Edit Task**: Click the "Edit" button to modify the task text.  
4️⃣ **Delete Task**: Click the "Delete" button to remove the task.  
5️⃣ **Filter Tasks**: Click "All", "Completed", or "Incomplete" to filter tasks.  
6️⃣ **Lazy Loading**: Scroll down to load more tasks.  

## 🛠️ Contributing

Feel free to submit issues or pull requests if you want to improve the project! 🎉

## 📜 License

This project is licensed under the **MIT License**.

