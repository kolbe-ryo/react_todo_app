import React from "react";
import { TodoListPageHeader } from "./header/todo-list-header";
import { useContext } from "react";
import { TodoContext } from "../../../infrastructure/di";
import TodoAddForm from "./body/todo-add-form";
import GridViewList from "./body/grid-view-list";
import styles from "./todo-list-page.module.css";

export const TodoListPage = () => {

  return (
    <TodoContext.Provider value={useContext(TodoContext)}>
      <div className={styles.space}>
        <TodoListPageHeader />
        <TodoAddForm />
        <GridViewList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoListPage;
