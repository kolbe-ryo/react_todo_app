import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { SiAdguard } from "react-icons/si";
import { supabase } from "../../../../infrastructure/remote/client";
import styles from './login.module.css';

export const LoginPage = () => {
    // const [loading, setLoading] = useState(false)
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    // emailとpasswordのフォームから入力を受け取り、サインアップ処理を行う
    // const login = async (e: React.FormEvent): Promise<void> => {
    //     e.preventDefault();
    //     setLoading(true);
    //     const { error } = await supabase.auth.signInWithPassword({ email, password })

    //     // TODO: エラー処理を追加する
    //     if (error) {
    //         alert(error.cause || error.message)
    //     } else {
    //         alert('ログインに成功しました。')
    //     }
    //     setLoading(false);
    //     navigate('/');
    // }

    // TODO: SignUpの時は文言入れ替え
    return (
        <div className={styles.authContainer}>
            <h1 className={styles.authTitle}>Login</h1>
            <SiAdguard className={styles.icon} />
            {/* 自前で用意したけど、Google認証などはSupabaseの用意したComponentの方が良かったので使わない */}
            {/* SMTPの設定をGmailで行う：https://zenn.dev/ryohei0509/articles/d75abe518f9d46 */}
            {/* <form onSubmit={login} className={styles.authForm}>
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
                アカウントをお持ちでないですか？
            </button> */}
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={[]}
            />
        </div>

    );
};

export default LoginPage;
