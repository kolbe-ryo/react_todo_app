import { Todo } from "../../domain/todo/todo";
import { ITodoRepository } from "../../domain/todo/todo-repository";

export class MockTodoRepository implements ITodoRepository {
    private todos: Todo[] = [
        new Todo("1", "Todo 1", "Description 1 So Long Word and test break card widget to next line overflow hidden any text above 3 linesDescription 1 So Long Word and test break card widget to next line overflow hidden any text", new Date(), "user1"),
        new Todo("2", "Todo 2", "Description 2", new Date(), "user2"),
        new Todo("3", "Todo 3", "Description 3", new Date(), "user3"),
        new Todo("4", "Todo 4", "Description 4", new Date(), "user4"),
        new Todo("5", "Todo 5", "Description 5", new Date(), "user5"),
        new Todo("6", "Todo 6", "Description 6", new Date(), "user6"),
        new Todo("7", "Todo 7", "Description 7", new Date(), "user7"),
        new Todo("8", "Todo 8", "Description 8", new Date(), "user8"),
        new Todo("9", "Todo 9", "Description 9", new Date(), "user9"),
        new Todo("10", "Todo 10", "Description 10", new Date(), "user10"),
        new Todo("11", "Todo 11", "Description 11", new Date(), "user11"),
        new Todo("12", "Todo 12", "Description 12", new Date(), "user12"),
        new Todo("13", "Todo 13", "Description 13", new Date(), "user13"),
    ];

    public async findAll(): Promise<Todo[]> {
        return this.todos;
    }

    public async update(todo: Todo): Promise<Todo[]> {
        // todosの中からidが一致するものを探し、更新する
        this.todos = this.todos.map(oldTodo => oldTodo.getId() === todo.getId() ? todo : oldTodo);
        return this.todos;
    }

    public async save(title: string, description: string): Promise<Todo[]> {
        const todo = new Todo(
            (this.todos.length + 1).toString(),
            title,
            description,
            new Date(),
            "user1"
        );
        this.todos.push(todo);
        return this.todos;
    }

    public async delete(id: string): Promise<Todo[]> {
        this.todos = this.todos.filter(todo => todo.getId() !== id);
        return this.todos;
    }
}