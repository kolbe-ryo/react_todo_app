import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { SiAdguard } from 'react-icons/si';
import { supabase } from "./../../../infrastructure/remote/client";
import styles from './auth.module.css';

export const AuthPage = () => {
    return (
        <div className={styles.authContainer}>
            <h1 className={styles.authTitle}>Authentication</h1>
            <SiAdguard className={styles.icon} />
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={[]}
            />
        </div>
    );
};

export default AuthPage;
