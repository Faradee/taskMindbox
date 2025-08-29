import type { task } from "../../App";
import styles from "./tasks.module.css";
import CheckIcon from "@mui/icons-material/Check";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
const Task = ({ task, toggle }: { task: task; toggle: () => void }) => {
  return (
    <div className={`${styles.task} ${task.completed ? styles.completed : undefined}`}>
      <div onClick={toggle} className={task.completed ? styles.inactiveIcon : styles.activeIcon}>
        {task.completed ? <CheckIcon color="success" /> : <CircleOutlinedIcon />}
      </div>
      <div>{task.title}</div>
    </div>
  );
};
export default Task;
