import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { StyledNavLink, NavWrapper } from "./styled";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/tasks/author/AuthorPage";

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
      <Route path="/tasks/:id" element={<TaskPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/author" element={<AuthorPage />} />
      <Route path="/" element={<Navigate to="/tasks" />} />
    </Routes>
  </HashRouter>
);

export default App;