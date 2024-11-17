import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../../infrastructure/di";
import StatusArea from "./body/status-area/status-area";
import TodoAddForm from "./body/todo-add-form/todo-add-form";
import { TodoListPageHeader } from "./header/todo-list-header";

export const TodoListPage = () => {
  return (
    <TodoContext.Provider value={useContext(TodoContext)}>
      <Wrapper>
        <TodoListPageHeader />
        <TodoAddForm />
        <StatusArea />
      </Wrapper>
    </TodoContext.Provider>
  );
};

const Wrapper = styled.div`
    padding: 20px 150px;
`;

export default TodoListPage;
