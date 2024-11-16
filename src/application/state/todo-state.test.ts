import { Todo } from '../../domain/todo/todo';
import todosReducer, { todosSlice } from './todo-state';

describe('todosSlice', () => {
    test('reducerが初期値を返すこと', () => {
        const initialState = { value: [] as Todo[] };
        expect(todosReducer(undefined, { type: '' })).toEqual(initialState);
    });

    test('reducerにTodoリストを渡すと、それらが設定されてSliceのstateとして保存されること', () => {
        const initialState = { value: [] as Todo[] };
        const newTodos: Todo[] = [
            new Todo('1', 'Test Todo 1', 'Description 1', null, new Date(), 'user1'),
            new Todo('2', 'Test Todo 2', 'Description 2', null, new Date(), 'user2'),
        ];
        const action = todosSlice.actions.todosReducer(newTodos);

        const expectedState = { value: newTodos };

        expect(todosReducer(initialState, action)).toEqual(expectedState);
    });
});