import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function AddToDo({ setTodos }) {
  function handleSubmit(event) {
    //Stops default refreshing
    event.preventDefault();
    //Getting input from the form
    const item = event.target.elements.newitem.value;
    const todo = {
      id: Math.random(),
      description: item,
      completed: false,
    };
    //Add new item into the state object
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
    document.getElementById("newitem").value = "";
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Add Item"
          name="newitem"
          variant="standard"
        />

        <Button
          variant="contained"
          color="primary"
          size="medium"
          style={{ marginLeft: 10, height: 50 }}
          type="submit"
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddToDo;
