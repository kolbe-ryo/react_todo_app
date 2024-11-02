import React, { useState } from "react";
import styles from './grid-view-list.module.css';
import { Todo } from "../../../../domain/todo/todo";
import TodoCard from '../../../components/todo-card/todo-card';
import Modal from "../../../components/todo-modal/todo-modal";

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

    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    // todoが選択されたかどうかはNullか否かで判断する
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    // ゴミ箱をクリックしてTodoを削除する関数
    const handleDelete = (id: string): void => {
        console.log(id);
        setTodos(todos.filter(todo => todo.getId() !== id));
    }

    // カードをクリックしてモーダルを開く関数
    const handleOnTap = (todo: Todo): void => {
        setSelectedTodo(todo);
    }

    // モーダルによって更新された値を受け取り、Todoリストを更新する関数
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