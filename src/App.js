import Tasks from "./features/tasks/Tasks"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Autor from "./features/tasks/author/Author";

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/zadania" element={<Tasks />} />
      <Route path="/autor" element = {<Autor />} />
    </Routes>
  </BrowserRouter>
);

export default App;
