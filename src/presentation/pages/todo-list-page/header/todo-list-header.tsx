import { useNavigate } from "react-router-dom";
import styles from './todo-list-header.module.css';
import { TbLogout } from "react-icons/tb";

export const TodoListPageHeader = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>TODO List</h1>
            <h3 className={styles.subtitle}>タスクを管理するアプリ</h3>
            <TbLogout className={styles.logout} onClick={() => navigate('/login')}/>
        </div>
    );
}