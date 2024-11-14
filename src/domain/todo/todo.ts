import Status from "./value-object/status";

export class Todo {
    private id: string;
    private title: string;
    private description: string;
    private status: Status;
    private createdAt: Date;
    private userId: string;

    constructor(id: string, title: string, description: string | null, status: Status | null, createdAt: Date, userId: string) {
        if (!title) {
            // TODO: エラー処理を追加する
            throw new Error("入力が不正です");
        }
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