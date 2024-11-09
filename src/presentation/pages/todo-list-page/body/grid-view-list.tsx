import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosReducer } from "../../../../application/state/todo-state";
import { TodoUsecase } from "../../../../application/usecase/todo/todo-usecase";
import { Todo } from "../../../../domain/todo/todo";
import { TodoContext } from "../../../../infrastructure/di";
import { RootState } from "../../../../redux/store";
import TodoCard from '../../../components/todo-card/todo-card';
import Modal from "../../../components/todo-modal/todo-modal";
import styles from './grid-view-list.module.css';

export const GridViewList = () => {
    // DI
    const dispatch = useDispatch();
    const usecase = new TodoUsecase(useContext(TodoContext));
    const todos = useSelector((state: RootState) => state.todos.value);

    // 選択されたTodoを管理するstate
    // todoが選択されたかどうかはnullか否かで判断する
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const fetchTodos = async (): Promise<void> => {
        const todos = await usecase.fetchTodos();
        dispatch(todosReducer(todos));
    }

    const updateTodo = async (updatedTodo: Todo): Promise<void> => {
        const todos = await usecase.updateTodo(updatedTodo);
        dispatch(todosReducer(todos));
        setSelectedTodo(null);
    }

    // 初回のみ実行したいので、空の配列を第二引数に渡す
    useEffect(() => {
        fetchTodos();
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles.gridView}>
            {todos.map(todo => (
                <TodoCard
                    key={todo.getId()}
                    todo={todo}
                    onTap={setSelectedTodo}
                />
            ))}
            {/* // todoが選択された場合のみModalを表示する */}
            {selectedTodo && (<Modal
                todo={selectedTodo}
                onClose={() => setSelectedTodo(null)}
                onUpdate={updateTodo}
            />)}
        </div>
    );
};

export default GridViewList;