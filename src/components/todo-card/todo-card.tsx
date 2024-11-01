import React from "react";
import styles from "./todo-card.module.css";

type TodoCardProps = {
  todo: { id: number; title: string; description: string };
  onDelete: (id: number) => void;
  onEdit: (todo: { id: number; title: string; description: string }) => void;
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
