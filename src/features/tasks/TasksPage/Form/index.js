import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks, fetchExampleTasks } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { FormWrapper, LabelWrapper, InputWrapper, ButtonWrapper, ButtonExampleTasks } from "./styled"

const Form = (props) => {

    const [task, setTask] = useState("");
    const [buttonText, setButtonText] = useState("Get Example Tasks");

    const handleClick = () => {
        setButtonText("Loading...");
        setTimeout(() => {
            dispatch(fetchExampleTasks());
            setButtonText("Get Example Tasks");
        }, 400);
    };

    const dispatch = useDispatch();

    const addTask = (event) => {
        event.preventDefault();
        const inputValue = event.target.elements.taskInput.value.trim();
        if (inputValue) {
            dispatch(addTasks({
                id: nanoid(),
                text: inputValue,
                completed: false,
                isHidden: false,
            }));
            setTask("");
        }
    };



    return (
        <div>
            <FormWrapper onSubmit={addTask}
                className="form"
            >
                <LabelWrapper>
                    Please enter the task below that you would like to add to your task list.
                </LabelWrapper>
                <InputWrapper
                    maxlength="80" required
                    placeholder="Enter your task"
                    type="text"
                    name="taskInput"
                    ref={props.onInputRef}
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                />
                <ButtonWrapper
                    type="submit">
                    Add your task
                </ButtonWrapper>

            </FormWrapper>
            <ButtonExampleTasks onClick={handleClick} >
                    {buttonText}
            </ButtonExampleTasks>
        </div>
    );
};

export default Form;