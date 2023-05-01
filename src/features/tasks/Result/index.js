import { ResultWrapper, SpanWrapper } from "./styled";
import { useDispatch } from "react-redux";
import { removeTask, completeTask } from "../tasksSlice";

const Result = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleCompleteTask = (id) => {
    dispatch(completeTask(id));
  };

  return (
    <div>
      {tasks.map((task) =>
        task.isHidden ? null : (
          <ResultWrapper
          onClick={() => handleCompleteTask(task.id)}
          key={task.id}>
            <span 
            style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            <SpanWrapper onClick={() => handleRemoveTask(task.id)}>🗑️</SpanWrapper>
          </ResultWrapper>
        )
      )}
    </div>
  );
};

export default Result;
