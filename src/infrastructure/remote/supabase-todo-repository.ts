import { AuthState } from "../../application/state/auth-state";
import { Todo } from "../../domain/todo/todo";
import { ITodoRepository } from "../../domain/todo/todo-repository";
import { supabase } from "./client";

export class SupabaseTodoRepository implements ITodoRepository {

    // userIdを取得するためのAuthStateインスタンスを保持
    private authState: AuthState;

    constructor() {
        this.authState = AuthState.getInstance();
    }

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
            .update({ 
                title: todo.getTitle(), 
                description: todo.getDescription(),
                userId: this.authState.getUserId(),
             })
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
            .insert({ 
                title: title, 
                description: description,
                userId: this.authState.getUserId(),
             });

        // TODO: エラーハンドリング
        if (error) {
            console.log(error);
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