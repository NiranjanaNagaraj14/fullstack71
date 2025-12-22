import React, { useState } from "react";

export default function Dashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    setTasks((prev) => [
      ...prev,
      { text: task.trim(), completed: false },
    ]);
    setTask("");
  };

  const toggleTask = (index) => {
    setTasks((prev) =>
      prev.map((taskItem, i) =>
        i === index
          ? { ...taskItem, completed: !taskItem.completed }
          : taskItem
      )
    );
  };

  const removeTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const completed = tasks.filter(({ completed }) => completed).length;
  const pending = tasks.length - completed;

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📊 Task Dashboard</h1>

      <div style={styles.cards}>
        {[
          { label: "Total Tasks", value: tasks.length },
          { label: "Completed", value: completed },
          { label: "Pending", value: pending },
        ].map((card, i) => (
          <div key={i} style={styles.card}>
            <h3>{card.label}</h3>
            <p>{card.value}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <form onSubmit={addTask} style={styles.form}>
          <input
            type="text"
            value={task}
            placeholder="Add new task"
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>
            Add
          </button>
        </form>

        <ul style={styles.list}>
          {tasks.map((t, index) => (
            <li key={index} style={styles.listItem}>
              <span
                onClick={() => toggleTask(index)}
                style={{
                  cursor: "pointer",
                  textDecoration: t.completed ? "line-through" : "none",
                }}
              >
                {t.text}
              </span>

              <button
                onClick={() => removeTask(index)}
                style={styles.removeButton}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: 30,
    background: "#c5aff8ff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
  },
  cards: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  card: {
    width: 150,
    padding: 20,
    background: "#fff",
    borderRadius: 8,
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(70, 16, 16, 1)",
  },
  section: {
    maxWidth: 500,
    margin: "0 auto",
    padding: 20,
    background: "#fff",
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(80, 17, 17, 1)",
  },
  form: {
    display: "flex",
    gap: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  addButton: {
    padding: "8px 14px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: 8,
    borderBottom: "1px solid #eee",
  },
  removeButton: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
};
