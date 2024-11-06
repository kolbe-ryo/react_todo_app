import { Todo } from "../../domain/todo/todo";
import { ITodoRepository } from "../../domain/todo/todo-repository";
import { supabase } from "./client";

export class SupabaseTodoRepository implements ITodoRepository {

    public async findAll(): Promise<Todo[]> {
        const { data , error } = await supabase
            .from('todo')
            .select()

        // TODO: エラーハンドリング
        if (error) {
            throw error;
        }

        return data?.map(todo => new Todo(
            todo.id,
            todo.title,
            todo.description,
            new Date(todo.createdAt),
            todo.userId
        )) ?? [];
    }

    // TODO 実装する
    public async update(todo: Todo): Promise<Todo[]> {
        // todosの中からidが一致するものを探し、更新する
        // this.todos = this.todos.map(oldTodo => oldTodo.getId() === todo.getId() ? todo : oldTodo);
        // return this.todos;
        throw new Error("Method not implemented.");
    }

    public async save(title: string, description: string): Promise<Todo[]> {
        // this.todos.push(todo);
        // return this.todos;
        throw new Error("Method not implemented.");
    }

    public async delete(id: string): Promise<Todo[]> {
        // this.todos = this.todos.filter(todo => todo.getId() !== id);
        // return this.todos;
        throw new Error("Method not implemented.");
    }
}