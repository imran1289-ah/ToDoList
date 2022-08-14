import React from "react";

function DeleteToDo({ todo, setTodos }) {
  function handleDeleteTodo() {
    const confirmed = window.confirm("Are you sure want to remove this item?");
    if (confirmed) {
      setTodos((prevTodos) => {
        return prevTodos.filter((td) => td.id !== todo.id);
      });
    }
  }

  return (
    <button
      onClick={handleDeleteTodo}
      style={{ color: "red", marginLeft: 10, height: "15px", width: "10px" }}
    ></button>
  );
}

export default DeleteToDo;
