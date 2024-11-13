import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Todo } from "../../../domain/todo/todo";
import styles from "./todo-modal.module.css";

type ModalProps = {
  initialTodo: Todo;
  onClose: () => void;
  onUpdate: (updatedTodo: Todo) => Promise<void>;
};

const Modal: React.FC<ModalProps> = ({ initialTodo, onClose, onUpdate }) => {

  const [title, setTitle] = useState(initialTodo.getTitle());
  const [description, setDescription] = useState(initialTodo.getDescription());

  const onUpdateTodo = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const updatedTodos = initialTodo.updateTitle(title).updateDescription(description);
    onUpdate(updatedTodos);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>{initialTodo.getTitle()}</h3>
        <form onSubmit={onUpdateTodo} className={styles.form}>
          <input
            type="text"
            placeholder="タイトル"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.inputTitle}
            required
            pattern=".*[^\s]+.*"
            title="タイトルは空白は禁止されています"
          />
          <input
            type="text"
            placeholder="説明"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.inputDescription}
          />
          <button type="submit" className={styles.button}>更新</button>
        </form>
        <IoCloseSharp className={styles.close} onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
