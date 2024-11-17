import { Status, getStatusColor, statusValueOf } from './status';

describe('Status Enumのテスト', () => {
    test('Statusカラーが正しく取得可能なこと', () => {
        expect(getStatusColor(Status.todo)).toBe('lightblue');
        expect(getStatusColor(Status.progress)).toBe('pink');
        expect(getStatusColor(Status.done)).toBe('gray');
    });

    test('設定されているStringを渡すとStatusを返却すること', () => {
        expect(statusValueOf('TODO')).toBe(Status.todo);
        expect(statusValueOf('PROGRESS')).toBe(Status.progress);
        expect(statusValueOf('DONE')).toBe(Status.done);
    });

    test('設定されていないStringを渡すとundefinedを返却すること', () => {
        expect(statusValueOf('INVALID')).toBeUndefined();
        expect(statusValueOf('')).toBeUndefined();
    });

    test('LowerCaseで設定されているStringを渡すとStatusを返却すること', () => {
        expect(statusValueOf('todo')).toBe(Status.todo);
        expect(statusValueOf('progress')).toBe(Status.progress);
        expect(statusValueOf('done')).toBe(Status.done);
    });
});