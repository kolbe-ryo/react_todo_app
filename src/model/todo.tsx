
export class Todo {
    private id: number;
    private title: string;
    private description: string;
    private createdAt: Date;

    constructor(id: number, title: string, description: string) {
        // このクラスのバリデーションを行う
        if (!id) {
            throw new Error("id is required");
        }
        if (!title) {
            throw new Error("title is required");
        }
        if (!description) {
            throw new Error("description is required");
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

    public getDescription(): string {
        return this.description;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }
}