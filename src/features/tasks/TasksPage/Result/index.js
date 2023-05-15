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
      {tasks.map((task) =>
        task.isHidden ? null : (
          <ResultWrapper
            onClick={() => handleCompleteTask(task.id)}
            key={task.id}>
            <span
              style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            <DivWrapper>
              <SpanWrapper>
                <Link to={`/tasks/${task.id}`} onClick={handleLinkClick}>
                  🕵
                </Link>
              </SpanWrapper>
              <SpanWrapper onClick={() => handleRemoveTask(task.id)}>🗑️</SpanWrapper>
            </DivWrapper>
          </ResultWrapper>
        )
      )}
    </div>
  );
  
  
};

export default Result;
