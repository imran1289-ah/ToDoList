import React from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

function App() {
  //A state which will be update when we add, delete item in list
  const [todos, setTodos] = React.useState([
    { id: 1, description: "Homework", completed: false },
    { id: 2, description: "Gym", completed: false },
    { id: 3, description: "Go to work", completed: false },
  ]);
  return (
    <div className="App">
      <h1>To Do For the Day</h1>
      <ToDoList todos={todos} setTodos={setTodos} />
      <AddToDo setTodos={setTodos} />
    </div>
  );
}

export default App;
