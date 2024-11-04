import { v4 as uuidv4 } from 'uuid';
import { ErrorWithMessage } from "../../error/error";

// ユーザークラスを作成
export class UserAuthentication {

    private userId: string;
    private email: string;
    private password: string;

    constructor(
        userId: string,
        email: string,
        password: string
    ) {
        if (!email) {
            throw new ErrorWithMessage("入力が不正です", "Emailは必須です");
        }
        if (!password) {
            throw new ErrorWithMessage("入力が不正です", "Passwordは必須です");
        }
        this.userId =  uuidv4();
        this.email = email;
        this.password = password;
    }

    public static emailValidationReg: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";

    public static passwordValidationReg: string = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8,}";
}