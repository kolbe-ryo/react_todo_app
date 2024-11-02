import { ErrorWithMessage } from "../error/error";

export class Todo {
    private id: number;
    private title: string;
    private description: string | null;
    private createdAt: Date;

    constructor(id: number, title: string, description: string | null) {
        // このクラスのバリデーションを行う
        if (!id) {
            throw new ErrorWithMessage("入力が不正です", "IDは必須です");
        }
        if (!title) {
            throw new ErrorWithMessage("入力が不正です", "タイトルは必須です");
        }
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = new Date();
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string | null {
        return this.description;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }
}