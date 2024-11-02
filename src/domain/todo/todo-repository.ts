import { Todo } from "./todo";

export interface TodoRepository {
    findAll(): Promise<Todo[]>;
    save(todo: Todo): Promise<void>;
    delete(id: number): Promise<void>;
}