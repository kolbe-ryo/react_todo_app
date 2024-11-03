import { useContext, useState } from "react";
import { TodoUsecase } from "../../../../application/usecase/todo/todo-usecase";
import { TodoContext } from "../../../../infrastructure/di";
import { TodoStateContext } from "../../../../application/state/todo-state";
import styles from "./todo-add-form.module.css";

export const TodoAddForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const usecase = new TodoUsecase(useContext(TodoContext));

    const { setState } = useContext(TodoStateContext);

    const addTodo = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        await usecase.addTodo(title, description);
        const todos = await usecase.fetchTodos();
        setState(todos);
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