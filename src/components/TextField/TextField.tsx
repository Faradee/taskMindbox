import type { SetStateAction, Dispatch } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SendIcon from "@mui/icons-material/Send";
import styles from "./textField.module.css";
type textFieldProps = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  handleNewTask: () => void;
};
const TextField = ({ handleNewTask, setTitle, title }: textFieldProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleNewTask();
      }}
    >
      <div className={styles.textField}>
        <ArrowForwardIosIcon color="disabled" />
        <input
          type="text"
          placeholder="Название задания..."
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <div className={styles.icon} onClick={handleNewTask}>
          <SendIcon color="disabled" />
        </div>
      </div>
    </form>
  );
};
export default TextField;
