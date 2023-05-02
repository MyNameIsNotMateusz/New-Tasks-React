import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav `
  display: flex;
  justify-content: center;
  margin-top: 20px;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 5px;
    }
  }
`;

export const StyledNavLink = styled(NavLink) `
  border: none;
  border-radius: 5px;
  background-color: #2195f38c;
  color: white;
  padding: 5px 20px;
  cursor: pointer;
  transition: 0.5s;
  text-decoration: none;
  font-size: large;

  &.active {
    background-color: #2196f3;
  }

  &:hover {
    background-color: #2196f3;
  }
`;
