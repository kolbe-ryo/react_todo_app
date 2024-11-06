import { supabase } from '../../infrastructure/remote/client';

export class AuthState {
    private userId: string = '';

    private static instance: AuthState | null = null;

    private constructor() { }

    public static getInstance(): AuthState {
        if (this.instance === null) {
            this.instance = new AuthState();
        }
        return this.instance;
    }

    public getUserId(): string {
        return this.userId;
    }

    public setUserId(userId: string | undefined): void {
        this.userId = userId ?? '';
    }
}