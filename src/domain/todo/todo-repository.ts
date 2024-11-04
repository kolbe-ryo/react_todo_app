import { Todo } from "./todo";

export interface ITodoRepository {
    findAll(): Promise<Todo[]>;
    update(todo: Todo): Promise<Todo[]>;
    save(todo: Todo): Promise<Todo[]>;
    delete(id: string): Promise<Todo[]>;
}