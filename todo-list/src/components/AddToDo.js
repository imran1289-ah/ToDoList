import React from "react";

function AddToDo() {
  function handleSubmit(event) {
    //Stops default refreshing
    event.preventDefault();
    //Getting input from the form
    const item = event.target.elements.newitem.value;
    const todo = {
      id: 4,
      item,
      completed: false,
    };
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="newitem" placeholder="Add Item"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddToDo;
