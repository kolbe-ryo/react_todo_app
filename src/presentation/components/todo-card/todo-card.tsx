import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { todosReducer } from "../../../application/state/todo-state";
import { TodoUsecase } from "../../../application/usecase/todo/todo-usecase";
import { Todo } from "../../../domain/todo/todo";
import { TodoContext } from "../../../infrastructure/di";
import { formatDateToYYYYMMDDHHMM } from "../../../utils/time-format";
import styles from "./todo-card.module.css";

type TodoCardProps = {
  todo: Todo;
  onTap: (todo: Todo) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ todo, onTap }) => {
  // DI
  const dispatch = useDispatch();
  const usecase = new TodoUsecase(useContext(TodoContext));

  const createdAt = formatDateToYYYYMMDDHHMM(todo.getCreatedAt());

  const onDeleteTodoNoPropagation = async (event: React.MouseEvent<SVGElement>): Promise<void> => {
    event.stopPropagation();
    console.log(todo.getId());
    const todos = await usecase.removeTodo(todo.getId());
    dispatch(todosReducer(todos));
  }

  return (
    <div className={styles.card} onClick={() => onTap(todo)}>
      <h3>{todo.getTitle()}</h3>
      <p className={styles.status}>{todo.getStatus()}</p>
      <p className={styles.description}>{todo.getDescription()}</p>
      <p className={styles.createdAt}>{createdAt}</p>
      <RiDeleteBin6Line className={styles.deleteBin} onClick={onDeleteTodoNoPropagation} />
    </div>
  );
};

export default TodoCard;
