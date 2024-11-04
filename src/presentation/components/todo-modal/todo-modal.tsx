import React, { useState } from "react";
import { Todo } from "../../../domain/todo/todo";
import { IoCloseSharp } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import styles from "./todo-modal.module.css";

type ModalProps = {
  todo: Todo;
  onClose: () => void;
  onUpdate: (updatedTodo: Todo) => Promise<void>;
};

const Modal: React.FC<ModalProps> = ({ todo, onClose, onUpdate }) => {

  const [title, setTitle] = useState(todo.getTitle());
  const [description, setDescription] = useState(todo.getDescription());

  const onUpdateTodo = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const updatedTodos = todo.updateTitle(title).updateDescription(description);
    onUpdate(updatedTodos);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>{todo.getTitle()}</h3>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <p className={styles.description}>{todo.getDescription()}</p>
        <RxUpdate className={styles.update} onClick={onUpdateTodo} />
        <IoCloseSharp className={styles.close} onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
