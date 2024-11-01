import React, { useState } from "react";
import styles from "./todo-form.module.css";

type TodoFormProps = {
  onAddTodo: (todo: { title: string; description: string }) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
