import React from "react";
import DeleteToDo from "./DeleteToDo";
import "../ToDoList.css";
import Typography from "@mui/material/Typography";

//Object destructuring to pass the todos array to ToDoList component
function ToDoList({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    const updatedTodos = todos.map((td) =>
      td.id === todo.id ? { ...td, completed: !td.completed } : td
    );
    setTodos(updatedTodos);
  }

  return (
    <div>
      <ul id="list">
        {todos.map((todo) => (
          <li
            // onDoubleClick={() => handleToggleTodo(todo)}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
              marginTop: 30,
            }}
            key={todo.id}
            className="elementinList"
          >
            <Typography variant="h5">{todo.description}</Typography>
            <br />

            <DeleteToDo todo={todo} setTodos={setTodos}></DeleteToDo>

            <br></br>
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
