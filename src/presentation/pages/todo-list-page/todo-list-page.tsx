import { useContext } from "react";
import { TodoContext } from "../../../infrastructure/di";
import StatusArea from "./body/status-area/status-area";
import TodoAddForm from "./body/todo-add-form/todo-add-form";
import { TodoListPageHeader } from "./header/todo-list-header";
import styles from "./todo-list-page.module.css";

export const TodoListPage = () => {

  return (
    <TodoContext.Provider value={useContext(TodoContext)}>
      <div className={styles.space}>
        <TodoListPageHeader />
        <TodoAddForm />
        {/* <GridViewList /> */}
        <StatusArea />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoListPage;
