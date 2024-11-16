import { AuthState } from './auth-state';

describe('AuthState', () => {
    let authState: AuthState;

    beforeEach(() => {
        authState = AuthState.getInstance();
        authState.setUserId(''); // テストの前にuserIdをリセット
    });

    test('AuthStateはシングルトンであること', () => {
        const instance1 = AuthState.getInstance();
        const instance2 = AuthState.getInstance();
        expect(instance1).toBe(instance2);
    });

    test('userIdが設定可能であること', () => {
        authState.setUserId('user123');
        expect(authState.getUserId()).toBe('user123');
    });

    test('userIdにundefinedを設定すると空文字が代わりに設定されること', () => {
        authState.setUserId(undefined);
        expect(authState.getUserId()).toBe('');
    });
});