import React from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import Typography from "@mui/material/Typography";

function App() {
  //A state which will be update when we add, delete item in list
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="App">
      <Typography variant="h2" style={{ marginLeft: 20 }}>
        To Do For the Day
      </Typography>
      <ToDoList todos={todos} setTodos={setTodos} />
      <AddToDo setTodos={setTodos} />
    </div>
  );
}

export default App;
