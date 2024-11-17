import { Todo } from "./todo";

export interface ITodoRepository {
    fetchAll(): Promise<Todo[]>;
    update(todo: Todo): Promise<void>;
    save(title: string, description: string): Promise<void>;
    delete(id: string): Promise<void>;
}