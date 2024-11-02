
export interface IAuthenticationRepository {
    signup(email: string): Promise<string>;
    login(email: string, password: string): Promise<string>;
    logout(userId: string): Promise<void>;
}