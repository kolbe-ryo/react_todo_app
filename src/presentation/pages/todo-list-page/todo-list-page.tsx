import { TodoListPageHeader } from "./header/todo-list-header";
import { useContext, useState } from "react";
import { TodoContext } from "../../../infrastructure/di";
import { TodoStateContext } from "../../../application/state/todo-state";
import { Todo } from "../../../domain/todo/todo";
import TodoAddForm from "./body/todo-add-form";
import GridViewList from "./body/grid-view-list";
import styles from "./todo-list-page.module.css";

export const TodoListPage = () => {
  // TodosをTodoListPageのstateとして持つことで、配下コンポーネントで利用可能にする
  const [todos, setTodos] = useState<Todo[]>([]);
  const setState = setTodos;

  return (
    <TodoContext.Provider value={useContext(TodoContext)}>
      <TodoStateContext.Provider value={{todos, setState}}>
      <div className={styles.space}>
        <TodoListPageHeader />
        <TodoAddForm />
        <GridViewList />
      </div>
      </TodoStateContext.Provider>
    </TodoContext.Provider>
  );
};

export default TodoListPage;
