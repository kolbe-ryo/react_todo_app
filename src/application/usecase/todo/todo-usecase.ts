import { Todo } from "../../../domain/todo/todo";
import { ITodoRepository } from "../../../domain/todo/todo-repository";

export class TodoUsecase {

    private todoRepository: ITodoRepository;

    constructor(todoRepository: ITodoRepository) {
        this.todoRepository = todoRepository;
    }

    async fetchTodos(): Promise<Todo[]> {
        return this.todoRepository.fetchAll();
    }

    async updateTodo(todo: Todo): Promise<Todo[]> {
        return this.todoRepository.update(todo);
    }

    async addTodo(title: string, description: string): Promise<Todo[]> {
        return this.todoRepository.save(title, description);
    }

    async removeTodo(id: string): Promise<Todo[]> {
        return this.todoRepository.delete(id);
    }
}