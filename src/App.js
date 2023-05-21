import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { StyledNavLink, NavWrapper } from "./styled";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/tasks/author/AuthorPage";

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default App;