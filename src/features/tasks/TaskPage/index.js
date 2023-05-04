import { useParams } from "react-router-dom";
import { DivTaskWrapper, HeaderTaskWrapper } from "./styled";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

const TaskPage = () => {

    const { id } = useParams();
    
    return (
        <>
        <HeaderTaskWrapper>
            <h1>Task details</h1>
            <h4>{id}</h4>
        </HeaderTaskWrapper>
        <DivTaskWrapper>
            nana    
        </DivTaskWrapper>
        </>
    );
}

export default TaskPage;
