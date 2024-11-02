import { Routes, Route } from "react-router-dom";
import TodoListPage from './presentation/pages/todo-list-page/todo-list-page';
import AuthenticationPage from './presentation/pages/authentication/authentication';
import NotFoundPage from "./presentation/pages/not-found/not-found-page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/login" element={<AuthenticationPage />} />
        <Route path="*" element={ <NotFoundPage /> } /> 
      </Routes>
    </div>
  )
}

export default App;
