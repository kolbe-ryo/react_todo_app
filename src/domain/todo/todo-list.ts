import { Todo } from "./todo";


export class TodoList {
    private todos: Todo[] = [];

    constructor(todos: Todo[]) {
        this.todos = todos;
    }

    public getTodos(): Todo[] {
        return this.todos;
    }

    public add(todo: Todo): void {
        this.todos.push(todo);
    }

    public remove(todo: Todo): void {
        this.todos = this.todos.filter(t => t.getId() !== todo.getId());
    }

    public update(todo: Todo): void {
        this.todos = this.todos.map(t => {
            if (t.getId() === todo.getId()) {
                return todo;
            }
            return t;
        });
    }
}