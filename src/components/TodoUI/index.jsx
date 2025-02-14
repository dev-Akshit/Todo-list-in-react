import React, { useState, useEffect, useRef } from "react";
import TodoList from "../TodoList";
import styles from './style.module.css';

export default function TodoUI() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(5);
  const containerRef = useRef(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    loadMoreTasks();
  }, [tasks, filter]);

  function addTask(taskText) {
    if (!taskText.trim()) return alert("You must write something!");
    const newTasks = [...tasks, { text: taskText, completed: false }];
    setTasks(newTasks);
    setTaskText("");
  }

  function toggleComplete(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function editTask(index, newText) {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
  });

  function loadMoreTasks() {
    setDisplayedTasks(filteredTasks.slice(0, visibleCount));
  }

  useEffect(() => {
    function handleScroll() {
      if (containerRef.current) {
        //scrollTop: no. of px scrolled
        // scrollHeight: total height of the content
        // clientHeight: height of the viewport
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight >= scrollHeight-1) {
          setVisibleCount(prev => prev + 5);
        }
      }
    }
    
    const container = containerRef.current;
    if (container) container.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    loadMoreTasks();
  }, [visibleCount]);

  return (
    <div className={styles.container}  >
      <div className={styles.todoapp}>
        <h2>To-Do List</h2>
        <div className={styles.row}>
          <input 
            type="text"
            className={styles.inputbox} 
            value={taskText} 
            onChange={(e) => setTaskText(e.target.value)} 
            placeholder="Add your text" 
          />
          <button onClick={() => addTask(taskText)}>Add</button>
        </div>

        <div>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        </div>

        <TodoList 
          ref={containerRef}
          tasks={displayedTasks} 
          toggleComplete={toggleComplete} 
          editTask={editTask} 
          deleteTask={deleteTask} 
        />
      </div>
    </div>
  );
}
