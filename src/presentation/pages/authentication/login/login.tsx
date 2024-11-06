import { SiAdguard } from "react-icons/si";
import { UserAuthentication } from '../../../../domain/authentication/user-auth';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { supabase } from "../../../../infrastructure/remote/client";
import { useState } from "react";

export const LoginPage = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // emailとpasswordのフォームから入力を受け取り、サインアップ処理を行う
    const login = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password })

        // TODO: エラー処理を追加する
        if (error) {
            alert(error.cause || error.message)
        } else {
            alert('ログインに成功しました。')
        }
        setLoading(false);
        navigate('/');
    }

    return (
        <div className={styles.authContainer}>
            <h1 className={styles.authTitle}>Login</h1>
            <SiAdguard className={styles.icon} />
            <form onSubmit={login} className={styles.authForm}>
                <input
                    type="email"
                    placeholder="Email"
                    className={styles.authInput}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    pattern={UserAuthentication.emailValidationReg}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={styles.authInput}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    pattern={UserAuthentication.passwordValidationReg}
                />
                <button type="submit" className={styles.authButton} disabled={loading}>
                    {loading ? 'Loading..' : 'Login'}
                </button>
            </form>
            <button onClick={() => navigate('/signup')} className={styles.toggleButton}>
                "アカウントをお持ちでないですか？"
            </button>
        </div>
    );
};

export default LoginPage;
