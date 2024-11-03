import { useContext, useEffect, useState } from "react";
import { Todo } from "../../../../domain/todo/todo";
import { TodoUsecase } from "../../../../application/usecase/todo/todo-usecase";
import { TodoContext } from "../../../../infrastructure/di";
import TodoCard from '../../../components/todo-card/todo-card';
import Modal from "../../../components/todo-modal/todo-modal";
import styles from './grid-view-list.module.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { todosReducer } from "../../../../application/state/todo-state";

export const GridViewList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.value); 

    // 選択されたTodoを管理するstate
    // todoが選択されたかどうかはNullか否かで判断する
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const usecase = new TodoUsecase(useContext(TodoContext));

    const fetchTodos = async (): Promise<void> => {
        const todos = await usecase.fetchTodos();
        dispatch(todosReducer(todos));
    }

    // const updateTodo = async (updatedTodo: Todo): Promise<void> => {
    //     await usecase.updateTodo(updatedTodo);
    //     await fetchTodos();
    //     setSelectedTodo(null);
    // }

    const deleteTodo = async (id: string): Promise<void> => {
        const todos = await usecase.removeTodo(id);
        dispatch(todosReducer(todos));
    }

    useEffect(() => {
        fetchTodos();
        console.log("fetch todos");
    }, []);

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
                // onUpdate={updateTodo}
            />
        </div>
    );
};

export default GridViewList;