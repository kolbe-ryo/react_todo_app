import Status from "./value-object/status";

/**
 * Todoクラスは、Todoアイテムのデータモデル
 */
export class Todo {
    /**
     * ToDoアイテムの一意の識別子。
     */
    private id: string;

    /**
     * ToDoアイテムのタイトル。
     */
    private title: string;

    /**
     * ToDoアイテムの説明。
     */
    private description: string;

    /**
     * ToDoアイテムのステータス。
     */
    private status: Status;

    /**
     * ToDoアイテムの作成日時。
     */
    private createdAt: Date;

    /**
     * ToDoアイテムを作成したユーザーの識別子。
     */
    private userId: string;

    /**
     * Todoクラスのインスタンスを作成します。
     * @param id - ToDoアイテムの一意の識別子。
     * @param title - ToDoアイテムのタイトル。
     * @param description - ToDoアイテムの説明。nullの場合は空文字列に設定されます。
     * @param status - ToDoアイテムのステータス。nullの場合はデフォルトでStatus.todoに設定されます。
     * @param createdAt - ToDoアイテムの作成日時。
     * @param userId - ToDoアイテムを作成したユーザーの識別子。
     */
    constructor(id: string, title: string, description: string | null, status: Status | null, createdAt: Date, userId: string) {
        console.log("CREATE TODO:", status);
        this.id = id;
        this.title = title;
        this.description = description ?? "";
        this.status = status ?? Status.todo;
        this.createdAt = createdAt;
        this.userId = userId;
    }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getStatus(): Status {
        return this.status;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public getUserId(): string | null {
        return this.userId;
    }

    public updateTitle(title: string): this {
        this.title = title;
        return this;
    }

    public updateDescription(description: string): this {
        this.description = description;
        return this;
    }

    public updateStatus(status: Status): this {
        this.status = status;
        return this;
    }

    public static titleValidationReg: string = '.*[^s]+.*';

}