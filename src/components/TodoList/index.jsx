import React from "react";
import TodoItem from "../TodoItem/index.jsx";
import styles from "../TodoUI/style.module.css"

export default function TodoList({ tasks, toggleComplete, editTask, deleteTask, ref }) {
  return (
    <ul className={styles.listcontainer} ref={ref} style={{ height: "400px", overflowY: "auto" }}>
      {tasks.map((task, index) => (
        <TodoItem key={index} 
        index={index} 
        task={task} 
        toggleComplete={toggleComplete} 
        editTask={editTask} 
        deleteTask={deleteTask} />
      ))}
    </ul>
  );
}
