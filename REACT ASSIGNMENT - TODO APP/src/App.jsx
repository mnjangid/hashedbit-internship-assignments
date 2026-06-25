import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (task.trim() === "") return;

    setTodos([...todos, task.trim()]);
    setTask("");
  }

  function deleteTask(todoToDel) {
    setTodos(todos.filter((todo) => todo !== todoToDel));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Write todo here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo}>
            {todo}
            <button onClick={() => deleteTask(todo)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;