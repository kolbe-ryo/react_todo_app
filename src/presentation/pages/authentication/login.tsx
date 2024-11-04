import { SiAdguard } from "react-icons/si";
import { UserAuthentication } from '../../../domain/authentication/user-auth';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

export const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.authContainer}>
            <h1 className={styles.authTitle}>Login</h1>
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
                <button type="submit" className={styles.authButton}>Login</button>
            </form>
            <button onClick={() => navigate('/signup')} className={styles.toggleButton}>
                "アカウントをお持ちでないですか？"
            </button>
        </div>
    );
};

export default LoginPage;
