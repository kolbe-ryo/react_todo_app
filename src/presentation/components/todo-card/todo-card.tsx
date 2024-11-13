import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todosReducer } from "../../../application/state/todo-state";
import { TodoUsecase } from "../../../application/usecase/todo/todo-usecase";
import { Todo } from "../../../domain/todo/todo";
import { getStatusColor } from "../../../domain/todo/value-object/status";
import { TodoContext } from "../../../infrastructure/di";
import { formatDateToYYYYMMDDHHMM } from "../../../utils/time-format";
import { StatusCard } from "./status-card/status-card";
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
      <Title color={getStatusColor(todo.getStatus())}>{todo.getTitle()}</Title>
      <p className={styles.description}>{todo.getDescription()}</p>
      <p className={styles.createdAt}>{createdAt}</p>
      <StatusCard color={getStatusColor(todo.getStatus())}>{todo.getStatus()}</StatusCard>
      <RiDeleteBin6Line className={styles.deleteBin} onClick={onDeleteTodoNoPropagation} />
    </div>
  );
};

export default TodoCard;


const Title = styled.h3<{ color: string }>`
  margin: 0;
  font-size: 1.2em;
  color: ${({ color }) => color}.;
`;