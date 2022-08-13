import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

function App() {
  const todos = [
    { id: 1, description: "Homework", completed: false },
    { id: 2, description: "Gym", completed: false },
    { id: 3, description: "Go to work", completed: false },
  ];
  return (
    <div className="App">
      <h1>To Do For the Day</h1>
      <ToDoList todos={todos} />
      <AddToDo />
    </div>
  );
}

export default App;
