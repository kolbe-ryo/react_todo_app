import { ErrorWithMessage } from "../error/error";

// ユーザークラスを作成
export class UserAuthentication {

    private email: string;
    private password: string;

    constructor(
        email: string,
        password: string
    ) {
        if (!email) {
            throw new ErrorWithMessage("入力が不正です", "Emailは必須です");
        }
        if (!password) {
            throw new ErrorWithMessage("入力が不正です", "Passwordは必須です");
        }
        this.email = email;
        this.password = password;
    }
}