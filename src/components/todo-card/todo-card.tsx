import React, { useState } from "react";
import styles from "./todo-card.module.css";
import { Todo } from "../../model/todo";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formatDateToYYYYMMDDHHMM } from "../../utils/time-format";
import Modal from "../todo-modal/todo-modal";

type TodoCardProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onTap: (todo: Todo) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ todo, onDelete, onTap }) => {
  const createdAt = formatDateToYYYYMMDDHHMM(todo.getCreatedAt());

  const onDeleteNoPropagation = (event: any): void => {
    event.stopPropagation();
    onDelete(todo.getId())
  }

  return (
    <div className={styles.card} onClick={() => onTap(todo)}>
      <h3>{todo.getTitle()}</h3>
      <p className={styles.description}>{todo.getDescription()}</p>
      <p className={styles.createdAt}>{createdAt}</p>
      <RiDeleteBin6Line className={styles.deleteBin} onClick={onDeleteNoPropagation} />
    </div>
  );
};

export default TodoCard;
