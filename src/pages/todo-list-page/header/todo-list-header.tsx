import styles from './todo-list-header.module.css';

export const TodoListPageHeader = () => {
    return (
        <div>
            <h1 className={styles.title}>TODO List</h1>
            <h3 className={styles.subtitle}>タスクを管理するアプリ</h3>
        </div>
    );
}