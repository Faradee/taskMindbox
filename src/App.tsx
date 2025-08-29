import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import TextField from "./components/TextField/TextField";

export type task = {
  title: string;
  id: number;
  completed: boolean;
};
function App() {
  const [idCounter, setIdCounter] = useState(0);
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<task[]>([]);
  const [transition, setTransition] = useState(false);
  const handleNewTask = () => {
    if (title.length !== 0) {
      setIdCounter(idCounter + 1);
      setTasks([{ title, id: idCounter, completed: false }, ...tasks]);
      setTitle("");
      setTransition(true);
      setTimeout(() => {
        setTransition(false);
      }, 0);
    }
  };
  return (
    <div className="container">
      <div className="ctrl-container">
        <p>Todos</p>
        <TextField handleNewTask={handleNewTask} title={title} setTitle={setTitle} />
        <TaskList tasks={tasks} setTasks={setTasks} transition={transition} />
      </div>
    </div>
  );
}

export default App;
