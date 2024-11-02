import { useContext, useEffect, useState } from "react";
import { Todo } from "../../../../domain/todo/todo";
import { TodoUsecase } from "../../../../application/usecase/todo/todo-usecase";
import TodoCard from '../../../components/todo-card/todo-card';
import Modal from "../../../components/todo-modal/todo-modal";
import styles from './grid-view-list.module.css';
import { TodoContext } from "../../../../infrastructure/di";

const initialTodos = [
    new Todo("Todo 1", "Description 1 So Long Word and test break card widget to next line overflow hidden any text above 3 linesDescription 1 So Long Word and test break card widget to next line overflow hidden any text"),
    new Todo("Todo 2", "Description 2"),
    new Todo("Todo 3", "Description 3"),
    new Todo("Todo 4", "Description 4"),
    new Todo("Todo 5", "Description 5"),
    new Todo("Todo 6", "Description 6"),
    new Todo("Todo 7", "Description 7"),
    new Todo("Todo 8", "Description 8"),
    new Todo("Todo 9", "Description 9"),
    new Todo("Todo 10", "Description 10"),
    new Todo("Todo 11", "Description 11"),
    new Todo("Todo 12", "Description 12"),
    new Todo("Todo 13", "Description 13"),
];

export const GridViewList = () => {
    const usecase = new TodoUsecase(useContext(TodoContext));

    // Todoリストの管理state
    const [todos, setTodos] = useState<Todo[]>([]);

    // 選択されたTodoを管理するstate
    // todoが選択されたかどうかはNullか否かで判断する
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

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
    useEffect(() => { fetchTodos() }, [todos]);

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