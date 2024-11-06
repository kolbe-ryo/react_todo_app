import { v4 as uuidv4 } from 'uuid';
import { ErrorWithMessage } from "../../error/error";

// ユーザークラスを作成
// 基本はSupabaseの機能で満足するため、最低限のvalidationのみ実装
export class UserAuthentication {

    public static emailValidationReg: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";

    public static passwordValidationReg: string = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8,}";
}