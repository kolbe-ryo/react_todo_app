import { Routes, Route, useNavigate } from "react-router-dom";
import TodoListPage from './presentation/pages/todo-list-page/todo-list-page';
import NotFoundPage from "./presentation/pages/not-found/not-found-page";
import { SignUpPage } from "./presentation/pages/authentication/signup";
import LoginPage from "./presentation/pages/authentication/login";
import { useEffect } from "react";

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const session = sessionStorage.getItem('session');
  //   if (session) {
  //     navigate('/');
  //   } else {
  //     navigate('/login');
  //   }
  // }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={ <NotFoundPage /> } /> 
      </Routes>
    </div>
  )
}

export default App;
