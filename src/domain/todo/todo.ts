import { v4 as uuidv4 } from 'uuid';
import { ErrorWithMessage } from "../../error/error";

export class Todo {
    private id: string;
    private title: string;
    private description: string;
    private createdAt: Date;
    private userId: string;

    constructor(id: string ,title: string, description: string | null, createdAt: Date, userId: string) {
        if (!title) {
            throw new ErrorWithMessage("入力が不正です", "タイトルは必須です");
        }
        this.id = id;
        this.title = title;
        this.description = description ?? "";
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

    public toJson(): string {
        return JSON.stringify({
            title: this.title,
            description: this.description,
        });
    }

    public static fromJson(json: string): Todo {
        const todo = JSON.parse(json);
        return new Todo(
            todo.id, 
            todo.title, 
            todo.description, 
            new Date(todo.createdAt), 
            todo.userId
        );
    }

    public static titleValidationReg: string = '.*[^s]+.*';

}