import React, { useState } from "react";
import styles from "./todo-modal.module.css";
import { Todo } from "../../model/todo";
import { formatDateToYYYYMMDDHHMM } from "../../utils/time-format";
import { IoCloseSharp } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";

type ModalProps = {
  isOpen: boolean;
  todo: Todo | null;
  onClose: () => void;
  onUpdate: (updatedTodo: Todo) => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, todo, onClose, onUpdate }) => {

  const [updatedTodo, setUpdatedTodo] = useState<Todo | null>(todo);

  if (!isOpen || !todo) return null;

  console.log(todo);
  console.log(updatedTodo);

  const createdAt = formatDateToYYYYMMDDHHMM(todo.createdAt);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>{todo.title}</h3>
        <p className={styles.description}>{todo.description}</p>
        <p className={styles.createdAt}>{createdAt}</p>
        <RxUpdate className={styles.update} onClick={() => onUpdate(updatedTodo!)} />
        <IoCloseSharp className={styles.close} onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
