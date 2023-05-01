import { DivWrapper, Button } from "./styled"
import { completeAllTasks, hideCompletedTasks } from "../tasksSlice";
import { useDispatch } from "react-redux";

const Buttons = () => {

  const dispatch = useDispatch();

    const handleCompleteAllTasks = () => {
        dispatch(completeAllTasks());
    }
    
    const handleHideCompletedTasks = () => {
      dispatch(hideCompletedTasks());
  }

  return (
    <DivWrapper>
      <Button
      onClick={handleCompleteAllTasks}
      className="complete-button">
        Complete all
      </Button>
      <Button
      onClick={handleHideCompletedTasks}
      >Hide completed
      </Button>
    </DivWrapper>
  );
};


export default Buttons;


