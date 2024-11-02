import styles from './todo-list-header.module.css';
import { TbLogout } from "react-icons/tb";

export const TodoListPageHeader = () => {
    const text = () => console.log("ログアウト");
    return (
        // 右上のヘッダー部分にログアウトアイコンを設置したい場合は、以下のコードを追加してください。
        <div className={styles.header}>
            <h1 className={styles.title}>TODO List</h1>
            <h3 className={styles.subtitle}>タスクを管理するアプリ</h3>
            <TbLogout className={styles.logout} onClick={text}/>
        </div>
    );
}