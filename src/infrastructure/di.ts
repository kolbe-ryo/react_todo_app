import { createContext } from "react";
import { ITodoRepository } from "../domain/todo/todo-repository";
import { SupabaseTodoRepository } from "./remote/supabase-todo-repository";

// DIするrepository object
export const TodoContext = createContext<ITodoRepository>(new SupabaseTodoRepository());
// export const TodoContext = createContext<ITodoRepository>(new MockTodoRepository());