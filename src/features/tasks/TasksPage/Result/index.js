import { ResultWrapper, SpanWrapper, DivWrapper } from "./styled";
import { useDispatch } from "react-redux";
import { removeTask, completeTask } from "../../tasksSlice";
import { Link } from "react-router-dom";

const Result = ({ tasks }) => {

  const dispatch = useDispatch();

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleCompleteTask = (id) => {
    dispatch(completeTask(id));
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
  }

  return (
    <div>
    </div>
  );
  
  
};

export default Result;
