import { TodoListPageHeader } from "./header/todo-list-header";
import GridViewList from "./body/grid-view-list";
import styles from "./todo-list-page.module.css";

export const TodoListPage = () => {

  return (
    <div className={styles.space}>
      <TodoListPageHeader />
      <GridViewList />
    </div>
  );
};

export default TodoListPage;
