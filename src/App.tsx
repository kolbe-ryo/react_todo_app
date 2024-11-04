import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import TodoListPage from './presentation/pages/todo-list-page/todo-list-page';
import NotFoundPage from "./presentation/pages/not-found/not-found-page";
import { SignUpPage } from "./presentation/pages/authentication/signup";
import LoginPage from "./presentation/pages/authentication/login";
import { useEffect, useState } from "react";
import { supabase } from "./infrastructure/remote/client";
import { Session } from "@supabase/supabase-js";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={session ? <TodoListPage /> : <Navigate replace to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;
