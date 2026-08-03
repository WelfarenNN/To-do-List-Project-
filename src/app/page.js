"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

function checkLocal(){
  const todos = typeof window !== "undefined" ? localStorage.getItem("todos") : null;
  return todos ? JSON.parse(todos) : [];
}
export default function Home() {
  const [state, setState] = useState("All");
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleActiveButtonClick = () => {
    setState("Active");
  };

  const handleCompleteButtonClick = () => {
    setState("Completed");
  };

  const handleAllButton = () => {
    setState("All");
  };
  const handleAddButton = () => {
    const newTodo = {
      id: Date.now(),
      title: inputValue,
      isDone: false,
    };
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  console.log(todos,"its working")

  return (
    <div className={styles.primaryContainer}>
      <div className={styles.container}>
        <div className={styles.piContainer}>
          <div className={styles.innerContainer}>
            <span className={styles.todolist}>To-Do list</span>
            <div className={styles.addtaskContainer}>
              <input
                className={styles.addtask}
                onChange={handleInputChange}
                placeholder="Add a new task..."
                value={inputValue}
              />
              <div className={styles.buttonAdd} onClick={handleAddButton}>
                Add
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.buttonAll} onClick={handleAllButton}>
                All
              </div>
              <div
                className={styles.buttonActive}
                onClick={handleActiveButtonClick}
              >
                Active
              </div>
              <div
                className={styles.buttonComplete}
                onClick={handleCompleteButtonClick}
              >
                Completed
              </div>
            </div>
          </div>
          <span className={styles.piFooter}>No tasks yet. Add one above!</span>
        </div>
        <div className={styles.containerFooter}>
          <span className={styles.CFT1}>Powered by</span>
          <span className={styles.CFT2}>Pinecone academy</span>
        </div>
      </div>
    </div>
  );
}
