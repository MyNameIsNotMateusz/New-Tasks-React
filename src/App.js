import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { StyledNavLink, NavWrapper } from "./styled";
import Tasks from "./features/tasks/Tasks";
import Autor from "./features/tasks/author/Author";

const App = () => (
  <HashRouter>
    <NavWrapper>
      <ul>
        <li>
          <StyledNavLink to="/tasks">Tasks</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/author">Author</StyledNavLink>
        </li>
      </ul>
    </NavWrapper>
    <Routes>
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/author" element={<Autor />} />
      <Route path="/" element={<Navigate to="/tasks" />} />
    </Routes>
  </HashRouter>
);

export default App;