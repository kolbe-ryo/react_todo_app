
// タイトルとエラー内容を格納するエラーを継承したオブジェクト
export class ErrorWithMessage extends Error {

    private title: string;

    constructor(title: string, message: string) {
        super(message);
        this.title = title;
    }
}