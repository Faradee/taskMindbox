import { useState, type SetStateAction } from "react";
import type { task } from "../../App";
import Task from "./Task";
import TaskListControllers from "./TaskListControllers";
import styles from "./tasks.module.css";
export type mode = "all" | "active" | "completed";
type taskListProps = { tasks: task[]; setTasks: React.Dispatch<SetStateAction<task[]>>; transition: boolean };

const TaskList = ({ tasks, setTasks, transition }: taskListProps) => {
  const [mode, setMode] = useState<mode>("all");

  const toggle = (id: number) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        const arr = [...tasks];
        arr[i].completed = true;
        setTasks(arr);
      }
    }
  };
  let filtered;
  const activeTasks = tasks.filter((task) => task.completed !== true);
  const completedTasks = tasks.filter((task) => task.completed === true);
  switch (mode) {
    case "all":
      filtered = tasks;
      break;
    case "active":
      filtered = activeTasks;
      break;
    case "completed":
      filtered = completedTasks;
      break;
    default:
      filtered = tasks;
  }
  return (
    <>
      <TaskListControllers tasks={tasks} mode={mode} setMode={setMode} setTasks={setTasks} />
      {filtered.length ? (
        <div className={styles.taskList}>
          <div className={`${!transition || mode === "completed" ? styles.transitioned : styles.transitioning}`}>
            <div className={styles.container}>
              {filtered.map((task) => (
                <Task key={task.id} task={task} toggle={() => toggle(task.id)} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default TaskList;
