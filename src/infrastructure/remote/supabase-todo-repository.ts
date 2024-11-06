import { Todo } from "../../domain/todo/todo";
import { ITodoRepository } from "../../domain/todo/todo-repository";
import { supabase } from "./client";

export class SupabaseTodoRepository implements ITodoRepository {

    public async findAll(): Promise<Todo[]> {
        const { data, error } = await supabase
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

    public async update(todo: Todo): Promise<Todo[]> {
        // updateの実装
        const { error } = await supabase
            .from('todo')
            .update({ title: todo.getTitle(), description: todo.getDescription() })
            .eq('id', todo.getId());

        // TODO: エラーハンドリング
        if (error) {
            throw error;
        }

        return await this.findAll();
    }

    public async save(title: string, description: string): Promise<Todo[]> {
        const { error } = await supabase
            .from('todo')
            .insert({ title: title, description: description });

        // TODO: エラーハンドリング
        if (error) {
            throw error;
        }

        return await this.findAll();
    }

    public async delete(id: string): Promise<Todo[]> {
        const { error } = await supabase
            .from('todo')
            .delete()
            .eq('id', id);

        // TODO: エラーハンドリング
        if (error) {
            throw error;
        }

        return await this.findAll();
    }
}