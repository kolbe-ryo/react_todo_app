import { Routes, Route } from "react-router-dom";
import TodoListPage from './presentation/pages/todo-list-page/todo-list-page';
import AuthenticationPage from './presentation/pages/authentication/authentication';

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<TodoListPage />} />
      <Route path="/login" element={<AuthenticationPage />} />
    </Routes>
  </div>
  )
}

export default App;
