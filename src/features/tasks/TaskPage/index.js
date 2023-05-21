import { useParams } from "react-router-dom";
import { DivTaskWrapper, HeaderTaskWrapper } from "./styled";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

const TaskPage = () => {

    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    
    return (
        <>
        <HeaderTaskWrapper>
            <h1>Task details</h1>
            <h4>
          <strong>Completed:</strong> {task.completed ? "Yes 😊" : "No 😞"}
            </h4>
        </HeaderTaskWrapper>
        <DivTaskWrapper>
               {task ? task.text : "Nie znaleziono zadania 😞"}
        </DivTaskWrapper>
        </>
    );
}

export default TaskPage;
