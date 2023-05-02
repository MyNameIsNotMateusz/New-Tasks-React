import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #2195f38c;
  color: white;
  font-size: large;
  padding: 5px 20px;
  cursor: pointer;
  transition: 0.5s;

  &.complete-button {
margin-right: 10px;
}

  &:hover {
    background-color: #2196f3;
  }
`;

