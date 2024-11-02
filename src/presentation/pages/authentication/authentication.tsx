import React, { useState } from 'react';
import styles from './authentication.module.css';

export const AuthenticationPage = () => {

  const [isLogin, setIsLogin] = useState(true);

  // ログインとサインアップの切り替え
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.authContainer}>
      <h1 className={styles.authTitle}>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form className={styles.authForm}>
        <input
          type="email"
          placeholder="Email"
          className={styles.authInput}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="有効なメールアドレスを入力してください"
        />
        {isLogin && (
          <input
            type="password"
            placeholder="Password"
            className={styles.authInput}
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
            title="大文字・小文字・数字・記号を含む8文字以上のパスワードを入力してください"
          />
        )}
        <button type="submit" className={styles.authButton}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <button onClick={toggleForm} className={styles.toggleButton}>
        {isLogin ? "アカウントをお持ちでないですか？" : "すでにアカウントをお持ちですか？"}
      </button>
    </div>
  );
};

export default AuthenticationPage;
