import styled from "styled-components";

export const ResultWrapper = styled.p`
  color: #000000ba;
  max-width: 600px;
  margin: auto;
  margin-top: 35px;
  background-color: rgb(250 0 250 / 9%);
  padding: 8px 20px;
  border-radius: 5px;
  font-size: large;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  visibility: ${props => props.isHidden ? "hidden" : "visible"};
`;

export const SpanWrapper = styled.span`
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      transform: scale(1.2);
    }
`;