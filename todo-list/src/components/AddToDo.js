import React from "react";
import Button from "@mui/material/Button";

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
        <input name="newitem" placeholder="Add Item" id="newitem"></input>
        {/* <button type="submit">Add</button> */}
        <Button
          variant="contained"
          color="success"
          size="small"
          style={{ marginLeft: 10 }}
          type="submit"
        >
          Remove
        </Button>
      </form>
    </div>
  );
}

export default AddToDo;
