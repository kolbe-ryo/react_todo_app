import React, { useState } from 'react';
import { SiAdguard } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { supabase } from "../../../../infrastructure/remote/client";
import styles from './signup.module.css';

export const SignUpPage = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // emailとpasswordのフォームから入力を受け取り、サインアップ処理を行う
    const signUp = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password
        })

        // TODO: エラー処理を追加する
        if (error) {
            alert(error.cause || error.message)
        } else {
            alert('メールを送信しました。ログインリンクを確認してください。')
        }
        setLoading(false);
    }

    return (
        <div className={styles.authContainer}>
            <h1 className={styles.authTitle}>Sign Up</h1>
            <SiAdguard className={styles.icon} />
            <form onSubmit={signUp} className={styles.authForm}>
                <input
                    type="email"
                    placeholder="Email"
                    className={styles.authInput}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                // pattern={UserAuthentication.emailValidationReg}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={styles.authInput}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                // pattern={UserAuthentication.passwordValidationReg}
                />
                <button type="submit" className={styles.authButton} disabled={loading}>
                    {loading ? 'Loading..' : 'Sign Up'}
                </button>
            </form>
            <button onClick={() => navigate('/login')} className={styles.toggleButton}>
                すでにアカウントをお持ちですか？
            </button>
        </div>
    );
};

export default SignUpPage;
