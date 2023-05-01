import styled from "styled-components";

export const FormWrapper = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 600px;
    margin: auto;
    border-radius: 10px;
    background-color: rgba(0, 255, 255, 0.092);
    padding: 50px;
`;

export const LabelWrapper = styled.label`
    padding: 10px;
    font-size: large;
`;

export const InputWrapper = styled.input`
    width: 65%;
    height: 35px;
    font-size: large;
`;

export const ButtonWrapper = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #2195f38c;
    color: white;
    font-size: 15px;
    padding: 10px 20px;
    cursor: pointer;
    margin-left: 10px;
    transition: 0.5s;

    &:hover {
        background-color: #2196f3;
    }
`;

export const ButtonExampleTasks = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #2195f38c;
    color: white;
    font-size: 12px;
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    max-width: 600px;
    margin: auto;
    margin-top: 30px;

    &:hover {
        background-color: #2196f3;
    }
`;