import React from "react";
import Button from "@mui/material/Button";

const label = { inputProps: {} };

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
    <Button
      variant="contained"
      color="error"
      size="small"
      onClick={handleDeleteTodo}
      style={{ marginLeft: 10 }}
    >
      Remove
    </Button>
  );
}

export default DeleteToDo;
