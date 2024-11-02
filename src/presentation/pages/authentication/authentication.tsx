import React, { useState } from 'react';
import styles from './authentication.module.css';

export const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);

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
        />
        {isLogin && (
        <input
          type="password"
          placeholder="Password"
          className={styles.authInput}
        />
        )}
        <button type="submit" className={styles.authButton}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <button onClick={toggleForm} className={styles.toggleButton}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default AuthenticationPage;
