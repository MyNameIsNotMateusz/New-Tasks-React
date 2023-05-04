import Header from "../../../common/Header";
import Form from "./Form";
import Result from "./Result";
import Buttons from "./Buttons";
import { useAutoFocus } from "../../../useAutoFocus";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";


const TasksPage = () => {

  const { inputRef } = useAutoFocus();

  const { tasks } = useSelector(selectTasks);

  return (
    <>
      <Header />
      <Form 
      onInputRef={inputRef}
      />
      <Buttons
        tasks={tasks}
      />
      <Result
        tasks={tasks}
      />
    </>
  );
}

export default TasksPage;
