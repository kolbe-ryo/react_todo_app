import { supabase } from '../../infrastructure/remote/client';

export class AuthState {
    private userId: string | undefined;

    private static instance: AuthState | null = null;

    private constructor() { }

    public static getInstance(): AuthState {
        if (this.instance === null) {
            this.instance = new AuthState();
        }
        return this.instance;
    }

    public getUserId(): string | undefined {
        return this.userId;
    }

    public async setUserId(): Promise<void> {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
            throw error;
        }
        console.log(data);
        this.userId = data.user?.id ?? null;
    }
}