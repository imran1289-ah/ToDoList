import React from "react";
import DeleteToDo from "./DeleteToDo";

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
      <ul>
        {todos.map((todo) => (
          <li
            onDoubleClick={() => handleToggleTodo(todo)}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
            key={todo.id}
          >
            {todo.description}
            <DeleteToDo todo={todo} setTodos={setTodos}></DeleteToDo>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
