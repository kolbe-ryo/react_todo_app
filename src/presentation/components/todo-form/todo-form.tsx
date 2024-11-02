import { useState } from "react";
import styles from "./todo-form.module.css";

export const TodoAddForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTodo = (e: React.FormEvent): void => {
        e.preventDefault();
        setTitle("");
        setDescription("");
    }

    return (
        <div className={styles.formArea}>
            <form onSubmit={addTodo} className={styles.form}>
                <input
                    type="text"
                    placeholder="タイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={styles.inputTitle}
                    required
                    pattern=".*[^\s]+.*"
                    title="タイトルは空白は禁止されています"
                />
                <input
                    type="text"
                    placeholder="説明"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={styles.inputDescription}
                />
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    );
};

export default TodoAddForm;