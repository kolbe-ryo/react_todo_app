import { Todo } from "../../domain/todo/todo";
import { ITodoRepository } from "../../domain/todo/todo-repository";

export class MockTodoRepository implements ITodoRepository {
    private todos: Todo[] = [
        new Todo("Todo 1", "Description 1 So Long Word and test break card widget to next line overflow hidden any text above 3 linesDescription 1 So Long Word and test break card widget to next line overflow hidden any text"),
        new Todo("Todo 2", "Description 2"),
        new Todo("Todo 3", "Description 3"),
        new Todo("Todo 4", "Description 4"),
        new Todo("Todo 5", "Description 5"),
        new Todo("Todo 6", "Description 6"),
        new Todo("Todo 7", "Description 7"),
        new Todo("Todo 8", "Description 8"),
        new Todo("Todo 9", "Description 9"),
        new Todo("Todo 10", "Description 10"),
        new Todo("Todo 11", "Description 11"),
        new Todo("Todo 12", "Description 12"),
        new Todo("Todo 13", "Description 13"),
    ];

    public async findAll(): Promise<Todo[]> {
        return this.todos;
    }

    public async update(todo: Todo): Promise<void> {
        // todosの中からidが一致するものを探し、更新する
        this.todos = this.todos.map(oldTodo => oldTodo.getId() === todo.getId() ? todo : oldTodo);
    }

    public async save(todo: Todo): Promise<void> {
        this.todos.push(todo);
    }

    public async delete(id: string): Promise<void> {
        this.todos = this.todos.filter(todo => todo.getId() !== id);
    }
}