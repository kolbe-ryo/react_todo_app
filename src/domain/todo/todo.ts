import { v4 as uuidv4 } from 'uuid';
import { ErrorWithMessage } from "../../error/error";

export class Todo {
    private id: string;
    private title: string;
    private description: string;
    private createdAt: Date;

    constructor(id: string ,title: string, description: string | null, createdAt: Date) {
        if (!title) {
            throw new ErrorWithMessage("入力が不正です", "タイトルは必須です");
        }
        this.id = id;
        this.title = title;
        this.description = description ?? "";
        this.createdAt = createdAt;
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
            id: this.id,
            title: this.title,
            description: this.description,
            createdAt: this.createdAt
        });
    }

    public static fromJson(json: string): Todo {
        const todo = JSON.parse(json);
        return new Todo(todo.id, todo.title, todo.description, new Date(todo.createdAt));
    }

    public static titleValidationReg: string = '.*[^s]+.*';

}