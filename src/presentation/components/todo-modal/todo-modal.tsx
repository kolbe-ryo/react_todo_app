import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { Todo } from "../../../domain/todo/todo";
import { getStatusColor } from "../../../domain/todo/value-object/status";
import styles from "./todo-modal.module.css";

type ModalProps = {
  initialTodo: Todo;
  onClose: () => void;
  onUpdate: (updatedTodo: Todo) => Promise<void>;
};

/**
 * Modalコンポーネントは、ToDoアイテムの詳細を編集するためのモーダルコンポーネントです。
 * 
 * @param {ModalProps} props - モーダルコンポーネントのプロパティ
 * @param {Todo} props.initialTodo - 初期のTodoオブジェクト
 * @param {() => void} props.onClose - モーダルを閉じるためのコールバック関数
 * @param {(updatedTodo: Todo) => void} props.onUpdate - Todoを更新するためのコールバック関数
 * @returns {JSX.Element} モーダルコンポーネントのJSX要素
 */
const Modal: React.FC<ModalProps> = ({ initialTodo, onClose, onUpdate }) => {

  const [title, setTitle] = useState(initialTodo.getTitle());
  const [description, setDescription] = useState(initialTodo.getDescription());

  const color = getStatusColor(initialTodo.getStatus());

  const onUpdateTodo = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const updatedTodos = initialTodo.updateTitle(title).updateDescription(description);
    onUpdate(updatedTodos);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Title color={color}>{initialTodo.getTitle()}</Title>
        <form onSubmit={onUpdateTodo} className={styles.form}>
          <input
            type="text"
            placeholder="タイトル"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.inputTitle}
            required
            pattern={Todo.titleValidationReg}
          />
          <input
            type="text"
            placeholder="説明"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.inputDescription}
          />
          <Button type="submit" color={color} className={styles.button}>更新</Button>
        </form>
        <IoCloseSharp className={styles.close} onClick={onClose} />
      </div>
    </div>
  );
};

const Title = styled.h3<{ color: string }>`
  margin: 0;
  font-size: 1.2em;
  color: ${({ color }) => color};
`;

const Button = styled.button<{ color: string }>`
  width: 20%;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${({ color }) => color};
`;

export default Modal;
