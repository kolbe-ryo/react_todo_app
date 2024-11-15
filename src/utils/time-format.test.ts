import { formatDateToYYYYMMDDHHMM } from './time-format';

describe('formatDateToYYYYMMDDHHMM', () => {
    test('正しくフォーマットできること', () => {
        const date = new Date(2023, 9, 15, 14, 30); // 2023-10-15 14:30（Dateは0が1月なのでフォーマット側で+1している）
        const formattedDate = formatDateToYYYYMMDDHHMM(date);
        expect(formattedDate).toBe('2023/10/15 14:30');
    });

    test('月日・時間は1桁の場合0埋めすること', () => {
        const date = new Date(2023, 0, 1, 9, 5); // 2023-01-01 09:05
        const formattedDate = formatDateToYYYYMMDDHHMM(date);
        expect(formattedDate).toBe('2023/01/01 09:05');
    });

    test('年末最終分はその時刻が表示されること', () => {
        const date = new Date(2023, 11, 31, 23, 59); // 2023-12-31 23:59
        const formattedDate = formatDateToYYYYMMDDHHMM(date);
        expect(formattedDate).toBe('2023/12/31 23:59');
    });
});