import { SiAdguard } from "react-icons/si";
import { UserAuthentication } from '../../../domain/authentication/user-auth';
import { useNavigate } from 'react-router-dom';
import styles from './signup.module.css';

export const SignUpPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.authContainer}>
            <h1 className={styles.authTitle}>Sign Up</h1>
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
                <button type="submit" className={styles.authButton}>Sign Up</button>
            </form>
            <button onClick={() => navigate('/login')} className={styles.toggleButton}>
                "すでにアカウントをお持ちですか？"
            </button>
        </div>
    );
};

export default SignUpPage;
