import { createContext } from "react";
import { ITodoRepository } from "../domain/todo/todo-repository";
import { MockTodoRepository } from "./mock/mock-todo-repository";
import { IAuthenticationRepository } from "../domain/authentication/authentication-repository";
import { SupabaseTodoRepository } from "./remote/supabase-todo-repository";

// DI repository object
export const TodoContext = createContext<ITodoRepository>(new SupabaseTodoRepository());
// export const TodoContext = createContext<ITodoRepository>(new MockTodoRepository());