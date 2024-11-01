import React, { useState } from "react";
import TodoCard from "../../components/todo-card/todo-card";
import TodoForm from "../../components/todo-form/todo-form";
import Modal from "../../components/todo-modal/todo-modal";
import { useTodos } from "../../hooks/use-todos";
import { TodoListPageHeader } from "./header/todo-list-header";

export const TodoListPage =  () => {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodos();
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleEdit = (todo: any) => setSelectedTodo(todo);
  const handleCloseModal = () => setSelectedTodo(null);

  return (
    <div>
        <TodoListPageHeader />
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
