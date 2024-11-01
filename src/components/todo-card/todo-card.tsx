import React from "react";
import styles from "./todo-card.module.css";
import { Todo } from "../../model/todo";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formatDateToYYYYMMDDHHMM } from "../../utils/time-format";

type TodoCardProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ todo, onDelete, onEdit }) => {
  let createdAt = formatDateToYYYYMMDDHHMM(todo.createdAt);
  return (
    <div className={styles.card} onClick={() => onEdit(todo)}>
      <h3>{todo.title}</h3>
      <p className={styles.description}>{todo.description}</p>
      <p className={styles.createdAt}>{createdAt}</p>
      <RiDeleteBin6Line className={styles.deleteBin} onClick={(e) => { e.stopPropagation(); onDelete(todo.id); }}/>
    </div>
  );
};

export default TodoCard;
