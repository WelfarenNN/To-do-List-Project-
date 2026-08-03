"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { TodoActionButton } from "./components/TodoActionButton";
import { TodoButton } from "./components/Todo-button";

function checkLocal() {
  if (typeof window !== "undefined") {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  }
  return [];
}

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [text, setText] = useState("");
  const isEmpty = text.trim() === "";
  const isToolong = text.length > 40;
  const doneCount = todos.filter((todo) => todo.done).length;
  const hasCompleted = todos.some((todo) => todo.done);

  function handleSubmit(e) {
    e.preventDefault();
    if (isEmpty || isToolong) return;

    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleClearCompleted() {
    setTodos(todos.filter((todo) => !todo.done));
  }

  let filteredTodos = todos;
  if (filter === "Active") {
    filteredTodos = todos.filter((todo) => !todo.done);
  } else if (filter === "Completed") {
    filteredTodos = todos.filter((todo) => todo.done);
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>To-Do list</h1>

        <form className={styles.addtaskContainer} onSubmit={handleSubmit}>
          <input
            className={styles.addtask}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit" disabled={isEmpty || isToolong}>
            Add
          </button>
        </form>
        <div className={styles.filters}>
          <TodoButton
            isActive={filter === "All"}
            onClick={() => setFilter("All")}
            text="All"
          >
            All
          </TodoButton>
          <TodoButton
            isActive={filter === "Active"}
            onClick={() => setFilter("Active")}
            text="Active"
          >
            Active
          </TodoButton>
          <TodoButton
            isActive={filter === "Completed"}
            onClick={() => setFilter("Completed")}
            text="Completed"
          >
            Completed
          </TodoButton>
        </div>
        {filteredTodos.length === 0 ? (
          <div className={styles.emptyState}>No tasks yet. Add one above!</div>
        ) : (
          <ul className={styles.todoList}>
            {filteredTodos.map((todo) => (
              <li key={todo.id} className={todo.done ? styles.completed : ""}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggle(todo.id)}
                />
                <span className={styles.todoText}>{todo.text}</span>
                <div className={styles.deleteContainer}>
                  <TodoActionButton onClick={() => handleDelete(todo.id)}>
                    Delete
                  </TodoActionButton>
                </div>
              </li>
            ))}
          </ul>
        )}
        {todos.length > 0 && (
          <div className={styles.footer}>
            <span>
              {doneCount} of {todos.length} tasks completed
            </span>
            {hasCompleted && (
              <button
                onClick={handleClearCompleted}
                className={styles.clearBtn}
              >
                Clear completed
              </button>
            )}
          </div>
        )}
        <div className={styles.brand}>
          Powered by <span>Pinecone academy</span>
        </div>
      </div>
    </div>
  );
}
