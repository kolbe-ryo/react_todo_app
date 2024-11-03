import { TodoListPageHeader } from "./header/todo-list-header";
import GridViewList from "./body/grid-view-list";
import styles from "./todo-list-page.module.css";
import { useContext, useState } from "react";
import { TodoContext } from "../../../infrastructure/di";
import TodoForm from "../../components/todo-form/todo-form";
import { TodoStateContext } from "../../../application/state/todo-state";
import { Todo } from "../../../domain/todo/todo";

export const TodoListPage = () => {
  // TodosをTodoListPageのstateとして持つことで、配下コンポーネントで利用可能にする
  const [todos, setTodos] = useState<Todo[]>([]);
  const setState = setTodos;

  return (
    <TodoContext.Provider value={useContext(TodoContext)}>
      <TodoStateContext.Provider value={{todos, setState}}>
      <div className={styles.space}>
        <TodoListPageHeader />
        <TodoForm />
        <GridViewList />
      </div>
      </TodoStateContext.Provider>
    </TodoContext.Provider>
  );
};

export default TodoListPage;
