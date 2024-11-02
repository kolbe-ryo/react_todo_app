// ユーザークラスを作成
export class UserAuthentication {

    private email: string;
    private password: string;


    constructor(
        email: string,
        password: string
    ) {
        if (!email) {
            throw new Error("email is required");
        }
        if (!password) {
            throw new Error("password is required");
        }
        this.email = email;
        this.password = password;
    }
}