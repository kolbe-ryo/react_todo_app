import React, { useState } from "react";
import styles from './grid-view-list.module.css';
import { Todo } from '../../../model/todo';
import TodoCard from '../../../components/todo-card/todo-card';
import Modal from "../../../components/todo-modal/todo-modal";

const initialTodos = [
    new Todo(1, "Todo 1", "Description 1 So Long Word and test break card widget to next line overflow hidden any text above 3 linesDescription 1 So Long Word and test break card widget to next line overflow hidden any text"),
    new Todo(2, "Todo 2", "Description 2"),
    new Todo(3, "Todo 3", "Description 3"),
    new Todo(4, "Todo 4", "Description 4"),
    new Todo(5, "Todo 5", "Description 5"),
    new Todo(6, "Todo 6", "Description 6"),
    new Todo(7, "Todo 7", "Description 7"),
    new Todo(8, "Todo 8", "Description 8"),
    new Todo(9, "Todo 9", "Description 9"),
    new Todo(10, "Todo 10", "Description 10"),
    new Todo(11, "Todo 11", "Description 11"),
    new Todo(12, "Todo 12", "Description 12"),
    new Todo(13, "Todo 13", "Description 13"),
];

export const GridViewList = () => {

    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    // todoが選択されたかどうかはNullか否かで判断する
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    // ゴミ箱をクリックしてTodoを削除する関数
    const handleDelete = (id: number): void => {
        setTodos(todos.filter(todo => todo.getId() !== id));
    }

    // カードをクリックしてモーダルを開く関数
    const handleOnTap = (todo: Todo): void => {
        // setShowModal(!showModal);
        setSelectedTodo(todo);
    }

    const handleUpdate = (updatedTodo: Todo): void => {
            setTodos(todos.map(
                todo => todo.getId() === updatedTodo.getId() ? updatedTodo : todo
            ));
        setSelectedTodo(null);
    }

    console.log(selectedTodo);

    return (
        <div className={styles.gridView}>
            {todos.map(todo => (
                <TodoCard
                    key={todo.getId()}
                    todo={todo}
                    onDelete={handleDelete}
                    onTap={handleOnTap}
                />
            ))}
            <Modal
                isOpen={selectedTodo != null}
                todo={selectedTodo}
                onClose={() => setSelectedTodo(null)}
                onUpdate={handleUpdate}
            />
        </div>
    );
};

export default GridViewList;