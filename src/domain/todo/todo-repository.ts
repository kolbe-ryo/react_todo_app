import { Todo } from "./todo";

export interface ITodoRepository {
    findAll(): Promise<Todo[]>;
    save(todo: Todo): Promise<void>;
    delete(id: string): Promise<void>;
}