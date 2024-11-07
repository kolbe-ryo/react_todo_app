import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import TodoListPage from './presentation/pages/todo-list-page/todo-list-page';
import NotFoundPage from "./presentation/pages/not-found/not-found-page";
import { SignUpPage } from "./presentation/pages/authentication/signup/signup";
import LoginPage from "./presentation/pages/authentication/login/login";
import { useEffect, useState } from "react";
import { supabase } from "./infrastructure/remote/client";
import { Session } from "@supabase/supabase-js";
import { AuthState } from "./application/state/auth-state";
import { GoStopwatch } from "react-icons/go";
import styles from './App.module.css';
import { Player } from "@lottiefiles/react-lottie-player";
import pageNotFoundAnimation from './asset/animations/404.json';

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const authState = AuthState.getInstance();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      authState.setUserId(data?.session?.user.id);
      setLoading(false);
    });

    supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      authState.setUserId(session?.user?.id);
      setLoading(false);
      navigate('/');
    });
  }, []);

  // TODO: Widgetの分離
  if (loading) {
    return <div className={styles.container}>
      // TODO アニメーションを変更する
      <Player
        autoplay
        loop
        src={pageNotFoundAnimation}
        className={styles.animation}
      />
    </div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={!session ? <LoginPage /> : <TodoListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
