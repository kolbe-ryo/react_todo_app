import { IAuthenticationRepository } from "../../../domain/authentication/authentication-repository";


export class AuthenticationUseCase {
    private authenticationRepository: IAuthenticationRepository;

    constructor(authenticationRepository: IAuthenticationRepository) {
        this.authenticationRepository = authenticationRepository;
    }

    async signup(email: string): Promise<string> {
        return this.authenticationRepository.signup(email);
    }

    async login(email: string, password: string): Promise<string> {
        return this.authenticationRepository.login(email, password);
    }

    async logout(userId: string): Promise<void> {
        return this.authenticationRepository.logout(userId);
    }
}