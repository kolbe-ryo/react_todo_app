import React from "react";
import styles from "./todo-card.module.css";
import { Todo } from "../../model/todo";

type TodoCardProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ todo, onDelete, onEdit }) => {
  return (
    <div className={styles.card} onClick={() => onEdit(todo)}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={(e) => { e.stopPropagation(); onDelete(todo.id); }}>🗑️</button>
    </div>
  );
};

export default TodoCard;
