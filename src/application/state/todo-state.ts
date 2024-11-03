import { createContext } from "react";
import { Todo } from "../../domain/todo/todo";

type AppContextType = {
    todos: Todo[];
    setState: (todos: Todo[]) => void;
};

export const TodoStateContext = createContext<AppContextType>({todos: [], setState: () => {}});