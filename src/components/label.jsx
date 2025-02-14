import React from "react";
import checkIcon from "../assets/checked.png";
import uncheckIcon from "../assets/unchecked.png";
import styles from "../components/TodoUI/"

export default function Label({ task, onClick }) {
  return (
    <div className={styles.tasklabel}>
      <div className={styles.checkboxcontainer} onClick={onClick}>
        <img 
          src={task.completed ? checkIcon : uncheckIcon} 
          alt={task.completed ? "Checked" : "Unchecked"} 
          className={styles.checkicon}
        />
      </div>

    </div>
  );
}
