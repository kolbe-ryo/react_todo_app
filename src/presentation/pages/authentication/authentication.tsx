import { useState } from 'react';
import styles from './authentication.module.css';
import { SiAdguard } from "react-icons/si";
import { UserAuthentication } from '../../../domain/authentication/user-auth';

export const AuthenticationPage = () => {

  const [isLogin, setIsLogin] = useState(true);

  // ログインとサインアップの切り替え
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.authContainer}>
      <h1 className={styles.authTitle}>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <SiAdguard className={styles.icon} />
      <form className={styles.authForm}>
        <input
          type="email"
          placeholder="Email"
          className={styles.authInput}
          required
          pattern={UserAuthentication.emailValidationReg}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.authInput}
          required
          pattern={UserAuthentication.passwordValidationReg}
        />
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
