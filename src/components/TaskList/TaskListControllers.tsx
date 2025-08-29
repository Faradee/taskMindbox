import styles from "./tasks.module.css";
import type { mode } from "./TaskList";
import type { task } from "../../App";
import type { Dispatch, SetStateAction } from "react";
const TaskListControllers = ({
  setMode,
  setTasks,
  tasks,
}: {
  setMode: Dispatch<SetStateAction<mode>>;
  setTasks: Dispatch<SetStateAction<task[]>>;
  tasks: task[];
}) => {
  const activeTasks = tasks.filter((task) => task.completed !== true);
  const clearCompleted = () => {
    setTasks(activeTasks);
  };
  const showAll = () => {
    setMode("all");
  };
  const showActive = () => {
    setMode("active");
  };
  const showCompleted = () => {
    setMode("completed");
  };
  return (
    <div className={styles.controllers}>
      <div>Active tasks: {activeTasks.length}</div>
      <div className={styles.filters}>
        <button onClick={showAll}>All</button>
        <button onClick={showActive}>Active</button>
        <button onClick={showCompleted}>Completed</button>
      </div>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};
export default TaskListControllers;
