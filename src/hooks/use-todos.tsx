import { useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState<{ id: number; title: string; description: string }[]>([]);

  const addTodo = (todo: { title: string; description: string }) => {
    setTodos([...todos, { id: Date.now(), ...todo }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo: { id: number; title: string; description: string }) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  return { todos, addTodo, deleteTodo, updateTodo };
};
