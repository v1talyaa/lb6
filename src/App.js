import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Завантаження завдань з localStorage при завантаженні сторінки
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Збереження завдань у localStorage при оновленні списку
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      <h1>Список завдань</h1>
      <div>
        <input
          type="text"
          placeholder="Введіть завдання"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "70%",
            marginRight: "10px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Додати
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: "0", marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              backgroundColor: "#f9f9f9",
              marginBottom: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            {task}
            <button
              onClick={() => deleteTask(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                padding: "5px 10px",
              }}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
