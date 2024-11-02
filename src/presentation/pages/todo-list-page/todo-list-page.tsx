import { TodoListPageHeader } from "./header/todo-list-header";
import GridViewList from "./body/grid-view-list";
import styles from "./todo-list-page.module.css";
import { useContext } from "react";
import { TodoContext } from "../../../infrastructure/di";

export const TodoListPage = () => {
  return (
    <TodoContext.Provider value={useContext(TodoContext)}>
      <div className={styles.space}>
        <TodoListPageHeader />
        <GridViewList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoListPage;
