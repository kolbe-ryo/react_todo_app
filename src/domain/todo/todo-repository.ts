import { Todo } from "./todo";

export interface ITodoRepository {
    fetchAll(): Promise<Todo[]>;
    update(todo: Todo): Promise<Todo[]>;
    save(title: string , description: string): Promise<Todo[]>;
    delete(id: string): Promise<Todo[]>;
}