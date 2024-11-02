import { Todo } from "./todo";

export interface ITodoRepository {
    findAll(): Promise<Todo[]>;
    update(todo: Todo): Promise<void>;
    save(todo: Todo): Promise<void>;
    delete(id: string): Promise<void>;
}