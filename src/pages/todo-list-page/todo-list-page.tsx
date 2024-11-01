import React, { useState } from "react";
import TodoCard from "../../components/todo-card/todo-card";
import TodoForm from "../../components/todo-form/todo-form";
import Modal from "../../components/todo-modal/todo-modal";
import { useTodos } from "../../hooks/use-todos";
import { TodoListPageHeader } from "./header/todo-list-header";
import GridViewList from "./body/grid-view-list";
import { Todo } from "../../model/todo";
import styles from "./todo-list-page.module.css";

export const TodoListPage = () => {
    //   const { todos, addTodo, deleteTodo, updateTodo } = useTodos();
    //   const [selectedTodo, setSelectedTodo] = useState(null);

    //   const handleEdit = (todo: any) => setSelectedTodo(todo);
    //   const handleCloseModal = () => setSelectedTodo(null);

    const todos = [
        new Todo(1, "Todo 1", "Description 1"),
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

    return (
        <div className={styles.space}>
            <TodoListPageHeader />
            <GridViewList todos={todos} />
            {/* <TodoForm onAddTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <TodoCard todo={todo} onDelete={deleteTodo} onEdit={handleEdit} />
        ))}
      </div>
      <Modal
        isOpen={!!selectedTodo}
        todo={selectedTodo}
        onClose={handleCloseModal}
        onSave={updateTodo}
        onDelete={deleteTodo}
      /> */}
        </div>
    );
};

export default TodoListPage;
