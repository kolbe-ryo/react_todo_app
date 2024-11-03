import { createContext, ReactNode, useContext, useState } from "react";
import { Todo } from "../../domain/todo/todo";
import { TodoContext } from "../../infrastructure/di";
import { TodoUsecase } from "../usecase/todo/todo-usecase";

type TodoContextType = {
    todos: Todo[];
    setState: (todos: Todo[]) => void;
};

export const TodoStateContext = createContext<TodoContextType | undefined>(undefined);