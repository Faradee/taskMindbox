import styles from "./tasks.module.css";
import type { mode } from "./TaskList";
import type { task } from "../../App";
import type { Dispatch, SetStateAction } from "react";
const TaskListControllers = ({
  setMode,
  mode,
  setTasks,
  tasks,
}: {
  setMode: Dispatch<SetStateAction<mode>>;
  mode: mode;
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
        <button className={mode === "all" ? styles.selected : undefined} onClick={showAll}>
          All
        </button>
        <button className={mode === "active" ? styles.selected : undefined} onClick={showActive}>
          Active
        </button>
        <button className={mode === "completed" ? styles.selected : undefined} onClick={showCompleted}>
          Completed
        </button>
      </div>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};
export default TaskListControllers;
