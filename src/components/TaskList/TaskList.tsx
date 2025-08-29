import type { SetStateAction } from "react";
import type { task } from "../../App";
import Task from "./Task";
import styles from "./tasks.module.css";
type taskListProps = { tasks: task[]; setTasks: React.Dispatch<SetStateAction<task[]>>; transition: boolean };

const TaskList = ({ tasks, setTasks, transition }: taskListProps) => {
  const toggle = (id: number) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        const arr = [...tasks];
        arr[i].completed = true;
        setTasks(arr);
      }
    }
  };
  return (
    <>
      {tasks.length ? (
        <div className={styles.taskList}>
          <div className={`${!transition ? styles.transitioned : styles.transitioning}`}>
            <div className={styles.container}>
              {tasks.map((task) => (
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
