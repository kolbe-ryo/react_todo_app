import React, { useState } from "react";
import { TodoListPageHeader } from "./header/todo-list-header";
import GridViewList from "./body/grid-view-list";
import styles from "./todo-list-page.module.css";

export const TodoListPage = () => {

  //   const { todos, addTodo, deleteTodo, updateTodo } = useTodos();
  //   const [selectedTodo, setSelectedTodo] = useState(null);

  //   const handleEdit = (todo: any) => setSelectedTodo(todo);
  //   const handleCloseModal = () => setSelectedTodo(null);

  return (
    <div className={styles.space}>
      <TodoListPageHeader />
      <GridViewList />
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
