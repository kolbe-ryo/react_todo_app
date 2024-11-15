import { AuthState } from "../../application/state/auth-state";
import { Todo } from "../../domain/todo/todo";
import { ITodoRepository } from "../../domain/todo/todo-repository";
import Status, { statusValueOf } from "../../domain/todo/value-object/status";
import { supabase } from "./client";

export class SupabaseTodoRepository implements ITodoRepository {

    // userIdを取得するためのAuthStateインスタンスを保持
    private authState: AuthState;

    constructor() {
        this.authState = AuthState.getInstance();
    }

    /**
     * 指定されたユーザーIDに関連するすべてのTodoアイテムを取得します。
     * 
     * @returns {Promise<Todo[]>} Todoアイテムの配列を含むPromise。
     * @throws {Error} データベースからの取得中にエラーが発生した場合。
     */
    public async fetchAll(): Promise<Todo[]> {
        const { data, error } = await supabase
            .from('todo')
            .select()
            .eq('userId', this.authState.getUserId())
            .order('createdAt', { ascending: false });

        // TODO: エラーハンドリング
        if (error) {
            throw error;
        }

        return data?.map(todo => new Todo(
            todo.id,
            todo.title,
            todo.description,
            statusValueOf(todo.status) ?? Status.todo,
            new Date(todo.createdAt),
            todo.userId
        )) ?? [];
    }

    /**
     * 指定されたTodoを更新します。
     * 
     * @param {Todo} todo - 更新するTodoオブジェクト
     * @returns {Promise<Todo[]>} 更新後のTodoリストを含むPromise
     * @throws {Error} 更新中にエラーが発生した場合
     */
    public async update(todo: Todo): Promise<void> {
        // updateの実装
        console.log("update supabase: ", todo.getStatus());
        const { error } = await supabase
            .from('todo')
            .update({
                title: todo.getTitle(),
                description: todo.getDescription(),
                status: todo.getStatus(),
                userId: this.authState.getUserId(),
            })
            .eq('id', todo.getId());

        // TODO: エラーハンドリング
        if (error) {
            throw error;
        }
    }

    /**
     * 指定されたタイトルと説明を持つ新しいTodoを保存します。
     * 保存後、全てのTodoリストを取得して返します。
     *
     * @param {string} title - Todoのタイトル
     * @param {string} description - Todoの説明
     * @returns {Promise<Todo[]>} 全てのTodoリストを含むPromise
     * @throws {Error} 保存中にエラーが発生した場合
     */
    public async save(title: string, description: string): Promise<void> {
        const { error } = await supabase
            .from('todo')
            .insert({
                title: title,
                description: description,
                status: Status.todo,
                userId: this.authState.getUserId(),
            });

        // TODO: エラーハンドリング
        if (error) {
            console.log(error);
            throw error;
        }
    }

    /**
     * 指定されたIDのTodoを削除します。
     * 
     * @param {string} id - 削除するTodoのID
     * @returns {Promise<Todo[]>} 削除後の全てのTodoのリストを返します
     * @throws {Error} 削除中にエラーが発生した場合
     */
    public async delete(id: string): Promise<void> {
        const { error } = await supabase
            .from('todo')
            .delete()
            .eq('id', id);

        // TODO: エラーハンドリング
        if (error) {
            throw error;
        }
    }
}