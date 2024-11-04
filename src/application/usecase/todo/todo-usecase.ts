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

    async updateTodo(todo: Todo): Promise<Todo[]> {
        return this.todoRepository.update(todo);
    }

    async addTodo(title: string, description: string): Promise<Todo[]> {
        const todo = new Todo("", title, description, new Date());
        return this.todoRepository.save(todo);
    }

    async removeTodo(id: string): Promise<Todo[]> {
        return this.todoRepository.delete(id);
    }
}