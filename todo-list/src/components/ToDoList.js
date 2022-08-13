import React from "react";

//Object destructuring to pass the todos array to ToDoList component
function ToDoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
