import React from "react";
import styles from "./todo-modal.module.css";

type ModalProps = {
  isOpen: boolean;
  todo: { id: number; title: string; description: string } | null;
  onClose: () => void;
  onSave: (updatedTodo: { id: number; title: string; description: string }) => void;
  onDelete: (id: number) => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, todo, onClose, onSave, onDelete }) => {
  if (!isOpen || !todo) return null;

  const handleSave = () => {
    onSave({ ...todo });
    onClose();
  };

  return (
    <div className={styles.modal}>
      <h3>Edit {todo.title}</h3>
      {/* フォームやボタンで編集 */}
      <button onClick={handleSave}>Save</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
