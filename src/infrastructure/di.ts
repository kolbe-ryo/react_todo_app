import { createContext } from "react";
import { ITodoRepository } from "../domain/todo/todo-repository";
import { MockTodoRepository } from "./mock/mock-todo-repository";
import { IAuthenticationRepository } from "../domain/authentication/authentication-repository";
import { MockAuthenticationRepository } from "./mock/mock-authentication-repository";

// DIするrepository object
export const TodoContext = createContext<ITodoRepository>(new MockTodoRepository());
export const AuthContext = createContext<IAuthenticationRepository>(new MockAuthenticationRepository());