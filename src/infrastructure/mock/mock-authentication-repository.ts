import { IAuthenticationRepository } from "../../domain/authentication/authentication-repository";

export class MockAuthenticationRepository implements IAuthenticationRepository {
    async signup(email: string): Promise<string> {
        return "signup";
    }
    async login(email: string, password: string): Promise<string> {
        return "login";
    }
    async logout(userId: string): Promise<void> {
        return;
    }
}