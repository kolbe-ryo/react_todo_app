import { Todo } from "./todo";
import Status from "./value-object/status";

// Todoオブジェクトのテスト
describe("Todoオブジェクトのテスト", () => {
    const id = "id";
    const title = "title";
    const description = "description";
    const status = Status.todo;
    const createdAt = new Date();
    const userId = "userId";

    it("Todoプロパティが正しく設定されていること", () => {
        const todo = new Todo(id, title, description, status, createdAt, userId);
        expect(todo.getId()).toBe(id);
        expect(todo.getTitle()).toBe(title);
        expect(todo.getDescription()).toBe(description);
        expect(todo.getStatus()).toBe(status);
        expect(todo.getCreatedAt()).toBe(createdAt);
    });

    it("nullableなプロパティがデフォルト値で設定されること", () => {
        const todo = new Todo(id, title, null, null, createdAt, userId);
        expect(todo.getId()).toBe(id);
        expect(todo.getTitle()).toBe(title);
        expect(todo.getDescription()).toBe("");
        expect(todo.getStatus()).toBe(Status.todo);
        expect(todo.getCreatedAt()).toBe(createdAt);
    });

    // updateのテスト
    it("特定のプロパティのみTodoが更新可能なこと", () => {
        const todo = new Todo(id, title, description, status, createdAt, userId);
        const newTitle = "newTitle";
        const newDescription = "newDescription";
        const newStatus = Status.done;
        todo.updateTitle(newTitle);
        todo.updateDescription(newDescription);
        todo.updateStatus(newStatus);
        expect(todo.getTitle()).toBe(newTitle);
        expect(todo.getDescription()).toBe(newDescription);
        expect(todo.getStatus()).toBe(newStatus);
    });

    // Todo.titleValidationRegを用いた正規表現のテスト
    it("title設定用のバリデーションによって空文字が検出されること", () => {
        const titleValidationReg = Todo.titleValidationReg;
        const title = "title";
        const invalidTitle = "";
        expect(title.match(titleValidationReg)).toBeTruthy();
        expect(invalidTitle.match(titleValidationReg)).toBeNull();
    });
});