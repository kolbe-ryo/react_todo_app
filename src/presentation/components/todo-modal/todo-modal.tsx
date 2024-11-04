import React, { useState, useEffect, useContext } from "react";
import { Todo } from "../../../domain/todo/todo";
import { formatDateToYYYYMMDDHHMM } from "../../../utils/time-format";
import { IoCloseSharp } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { TodoUsecase } from "../../../application/usecase/todo/todo-usecase";
import { TodoContext } from "../../../infrastructure/di";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { todosReducer } from "../../../application/state/todo-state";
import styles from "./todo-modal.module.css";

type ModalProps = {
  isOpen: boolean;
  todo: Todo | null;
  onClose: () => void;
  // onUpdate: (updatedTodo: Todo) => Promise<void>;
};

const Modal: React.FC<ModalProps> = ({ isOpen, todo, onClose }) => {
  const dispatch = useDispatch();
  const usecase = new TodoUsecase(useContext(TodoContext));
  const todos = useSelector((state: RootState) => state.todos.value);

  // Modalコンポーネント作成時のデフォルトのTodoはnullのため、todo選択によって変更されたことをこのコンポーネントに伝えるため
  useEffect(() => {
    setUpdatedTodo(todo);
  }, [todo]);

  const [updatedTodo, setUpdatedTodo] = useState<Todo | null>(todo);

  // todoが存在しない場合ガードするので、以降はtodoが存在することが保証される
  if (!isOpen || !todo) return null;

  const createdAt = formatDateToYYYYMMDDHHMM(todo.getCreatedAt());

  const updateTodo = async (e: React.FormEvent): Promise<void> => {
    const todos = await usecase.updateTodo(updatedTodo!);
    dispatch(todosReducer(todos));
    setUpdatedTodo(null);
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
            value={updatedTodo?.getTitle() || ""}
            onChange={(e) => setUpdatedTodo(updatedTodo!.updateTitle(e.target.value))}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={updatedTodo?.getDescription() || ""}
            onChange={(e) => setUpdatedTodo(updatedTodo!.updateDescription(e.target.value))}
          />
        </div>
        <p className={styles.description}>{todo.getDescription()}</p>
        <p className={styles.createdAt}>{createdAt}</p>
        <RxUpdate className={styles.update} onClick={updateTodo} />
        <IoCloseSharp className={styles.close} onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
