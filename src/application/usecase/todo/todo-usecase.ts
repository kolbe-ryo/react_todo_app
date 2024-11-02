import { Todo } from "../../../domain/todo/todo";
import { ITodoRepository } from "../../../domain/todo/todo-repository";

export class TodoUsecase {

    private todoRepository: ITodoRepository;

    constructor(todoRepository: ITodoRepository) {
        this.todoRepository = todoRepository;
    }

    async fetchTodos(): Promise<Todo[]> {
        return this.todoRepository.findAll();
    }

    async addTodo(todo: Todo): Promise<void> {
        return this.todoRepository.save(todo);
    }

    async removeTodo(id: string): Promise<void> {
        return this.todoRepository.delete(id);
    }
}