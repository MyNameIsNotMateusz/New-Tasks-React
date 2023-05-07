import Header from "../../../common/Header";
import Form from "./Form";
import Result from "./Result";
import Buttons from "./Buttons";
import Search from "./Search";
import { useAutoFocus } from "../../../useAutoFocus";
import { useSelector } from "react-redux";
import { selectTasksByQuery } from "../tasksSlice";
import { useLocation } from "react-router-dom";


const TasksPage = () => {

  const { inputRef } = useAutoFocus();

  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  const tasks = useSelector(state => selectTasksByQuery(state, query));


  return (
    <>
      <Header />
      <Form
        onInputRef={inputRef}
      />
      <Buttons
        tasks={tasks}
      />
      <Search />
      <Result
        tasks={tasks}
      />
    </>
  );
}

export default TasksPage;
