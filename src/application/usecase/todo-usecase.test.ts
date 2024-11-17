import { Todo } from '../../domain/todo/todo';
import { MockTodoRepository } from '../../infrastructure/mock/mock-todo-repository';
import { TodoUsecase } from './todo-usecase';

describe('TodoUsecase', () => {

    test('fetchTodosが全てのTodoを返すこと', async () => {
        const todos: Todo[] = [
            new Todo('1', 'Test Todo 1', 'Description 1', null, new Date(), 'user1'),
            new Todo('2', 'Test Todo 2', 'Description 2', null, new Date(), 'user2'),
        ];

        const repository = new MockTodoRepository(todos);

        const todoUsecase = new TodoUsecase(repository);

        const result = await todoUsecase.fetchTodos();

        expect(result).toEqual(todos);
    });

    test('updateTodoが特定のTodoを更新し、全てのTodoを返すこと', async () => {
        const todo = new Todo('1', 'Todo', 'Description', null, new Date(), 'user1');
        const updateTodo = todo.updateTitle('Updated Todo');
        const todos = [todo, new Todo('2', 'Test Todo 2', 'Description 2', null, new Date(), 'user2')];

        const repository = new MockTodoRepository(todos);

        const todoUsecase = new TodoUsecase(repository);

        const result = await todoUsecase.updateTodo(updateTodo);

        expect(result).toEqual(todos);
        expect(result[0].getTitle()).toBe('Updated Todo');
    });

    test('addTodoがtitleとdescriptionを持つTodoをリストに追加すること', async () => {
        const title = 'New Todo';
        const description = 'New Description';

        const repository = new MockTodoRepository([]);

        const todoUsecase = new TodoUsecase(repository);

        let result;

        result = await todoUsecase.fetchTodos();

        expect(result.length).toEqual(0);

        result = await todoUsecase.addTodo(title, description);

        expect(result.length).toEqual(1);
        expect(result[0].getTitle()).toBe(title);
        expect(result[0].getDescription()).toBe(description);
    });

    test('removeTodoが指定したidのTodoを削除すること', async () => {
        const id = '1';
        const todos: Todo[] = [
            new Todo('1', 'Test Todo 1', 'Description 1', null, new Date(), 'user1'),
            new Todo('2', 'Test Todo 2', 'Description 2', null, new Date(), 'user2'),
        ];

        const repository = new MockTodoRepository(todos);

        const todoUsecase = new TodoUsecase(repository);

        let result;

        result = await todoUsecase.fetchTodos();

        expect(result.length).toEqual(2);

        result = await todoUsecase.removeTodo(id);

        expect(result.length).toEqual(1);
        expect(result[0].getId()).toEqual('2');

        // 存在しないidを指定した場合、何も起こらないし削除されない
        result = await todoUsecase.removeTodo('3');
        expect(result.length).toEqual(1);
        expect(result[0].getId()).toEqual('2');
    });
});