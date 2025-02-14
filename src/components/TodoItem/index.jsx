import React, { useState } from "react";
import Label from "../label";
import styles from "../TodoUI"

export default function TodoItem({ index, task, toggleComplete, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function handleEdit() {
    if (!newText.trim()) return alert("Task cannot be empty!");
    editTask(index, newText);
    setIsEditing(false);
  }

  return (
<li className={`${styles.taskitem} ${task.completed ? styles.checked : ""}`}>
<Label task={task} 
      onClick={() => toggleComplete(index)} 
      />

      {isEditing ? (
        <div className={styles.editcontainer}>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
            className={styles.editinput}
          />
          <button className={styles.savebtn} onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <>
          <span className={styles.tasktext} style={task.completed?{textDecoration: "line-through"}:{}}>{task.text}</span>
          <div className={styles.btncontainer}>
            <button className={styles.editbtn} onClick={() => {setIsEditing(true); }}>Edit</button>
            <button className={styles.deletebtn} onClick={() => {deleteTask(index); }}>&times;</button>
          </div> 
        </>
      )}
    </li>
  );
}
