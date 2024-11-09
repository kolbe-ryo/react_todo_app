import { Player } from "@lottiefiles/react-lottie-player";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styles from './App.module.css';
import { AuthState } from "./application/state/auth-state";
import pageNotFoundAnimation from './asset/animations/404.json';
import { supabase } from "./infrastructure/remote/client";
import LoginPage from "./presentation/pages/authentication/login/login";
import { SignUpPage } from "./presentation/pages/authentication/signup/signup";
import NotFoundPage from "./presentation/pages/not-found/not-found-page";
import TodoListPage from './presentation/pages/todo-list-page/todo-list-page';

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
  // TODO アニメーションを変更する
  if (loading) {
    return <div className={styles.container}>
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
