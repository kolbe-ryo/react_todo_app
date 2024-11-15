import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../../infrastructure/remote/client";
import styles from './todo-list-header.module.css';

export const TodoListPageHeader = () => {
    const navigate = useNavigate();

    const logout = async (): Promise<void> => {
        try {
            const { error } = await supabase.auth.signOut()
            if (error) {
                // TODO: エラー内容によって処理するか決める
                throw error;
            }
            navigate('/login');
        } catch {
            alert('エラーが発生しました。');
        }
    };

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>TODO List</h1>
            <h3 className={styles.subtitle}>タスクを管理するアプリ</h3>
            <TbLogout className={styles.logout} onClick={logout} />
        </div>
    );
}