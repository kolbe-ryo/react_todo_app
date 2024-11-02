import { useContext, useEffect, useState } from "react";
import { Todo } from "../../../../domain/todo/todo";
import { TodoUsecase } from "../../../../application/usecase/todo/todo-usecase";
import { TodoContext } from "../../../../infrastructure/di";
import TodoCard from '../../../components/todo-card/todo-card';
import Modal from "../../../components/todo-modal/todo-modal";
import styles from './grid-view-list.module.css';

export const GridViewList = () => {
    // Todoリストの管理state
    const [todos, setTodos] = useState<Todo[]>([]);

    // 選択されたTodoを管理するstate
    // todoが選択されたかどうかはNullか否かで判断する
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const usecase = new TodoUsecase(useContext(TodoContext));

    const fetchTodos = async (): Promise<void> => {
        const todos = await usecase.fetchTodos();
        setTodos(todos);
    }

    const updateTodo = async (updatedTodo: Todo): Promise<void> => {
        await usecase.updateTodo(updatedTodo);
        await fetchTodos();
        setSelectedTodo(null);
    }

    const deleteTodo = async (id: string): Promise<void> => {
        await usecase.removeTodo(id);
        setTodos(todos.filter(todo => todo.getId() !== id));
    }

    // Todoリストを取得するとともに、todosの変更を監視し常に最新化する
    // ベストプラクティスではないかもしれないが、todosはリポジトリの最新を常に反映したいので、このような実装にした
    useEffect(() => {
        fetchTodos();
        console.log("fetch todos");
    }, [todos]);

    return (
        <div className={styles.gridView}>
            {todos.map(todo => (
                <TodoCard
                    key={todo.getId()}
                    todo={todo}
                    onDelete={deleteTodo}
                    onTap={setSelectedTodo}
                />
            ))}
            <Modal
                isOpen={selectedTodo != null}
                todo={selectedTodo}
                onClose={() => setSelectedTodo(null)}
                onUpdate={updateTodo}
            />
        </div>
    );
};

export default GridViewList;