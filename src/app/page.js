"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const HandleInputValue = () => {
    const value = e.target.value
    setInputValue(value)
  }
  return (
    <div className={styles.primaryContainer}>
      <div className={styles.container}>
        <div className={styles.piContainer}>
          <div className={styles.innerContainer}>
            <span className={styles.todolist}>To-Do list</span>
            <div className={styles.addtaskContainer}>
              <span className={styles.addtask}>Add a new task...</span>
              <span>Add</span>
            </div>
            <div className={styles.buttons}>
              <button className={styles.buttonAll}>All</button>
              <button className={styles.buttonActive}>Active</button>
              <button className={styles.buttonComplete}>Completed</button>
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
