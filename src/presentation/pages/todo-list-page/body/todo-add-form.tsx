import { useContext, useState } from "react";
import { TodoUsecase } from "../../../../application/usecase/todo/todo-usecase";
import { TodoContext } from "../../../../infrastructure/di";
import { useDispatch } from "react-redux";
import { todosReducer } from "../../../../application/state/todo-state";
import styles from "./todo-add-form.module.css";
import { Todo } from "../../../../domain/todo/todo";

export const TodoAddForm = () => {
    const dispatch = useDispatch();
    const usecase = new TodoUsecase(useContext(TodoContext));

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTodo = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        const todos = await usecase.addTodo(title, description);
        dispatch(todosReducer(todos));
        setTitle("");
        setDescription("");
    };

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
                    pattern={Todo.titleValidationReg}
                    title="タイトルは空白は禁止されています"
                />
                <input
                    type="text"
                    placeholder="説明"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={styles.inputDescription}
                />
                <button type="submit" className={styles.button}>追加</button>
            </form>
        </div>
    );
};

export default TodoAddForm;