import { Todo } from "../../domain/todo/todo";
import { ITodoRepository } from "../../domain/todo/todo-repository";

export class TodoUsecase {

    private todoRepository: ITodoRepository;

    constructor(todoRepository: ITodoRepository) {
        this.todoRepository = todoRepository;
    }

    async fetchTodos(): Promise<Todo[]> {
        return this.todoRepository.fetchAll();
    }

    async updateTodo(todo: Todo): Promise<Todo[]> {
        await this.todoRepository.update(todo);
        return await this.fetchTodos();
    }

    async addTodo(title: string, description: string): Promise<Todo[]> {
        await this.todoRepository.save(title, description);
        return await this.fetchTodos();
    }

    async removeTodo(id: string): Promise<Todo[]> {
        await this.todoRepository.delete(id);
        return await this.fetchTodos();
    }
}