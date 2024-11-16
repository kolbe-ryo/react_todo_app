import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './not-found-page';

// Playerコンポーネントをモック
jest.mock('@lottiefiles/react-lottie-player', () => ({
    Player: () => <div data-testid="mock-player" />,
}));

describe('NotFoundPage', () => {
    test('404画面の要素が正しく表されるか', () => {
        render(<NotFoundPage />);

        // モックされたアニメーションが表示されているか確認
        const animationElement = screen.getByTestId('mock-player');
        expect(animationElement).toBeInTheDocument();

        // 404エラーメッセージが表示されているか確認
        const errorText = screen.getByText('404');
        expect(errorText).toBeInTheDocument();

        // 英語のメッセージが表示されているか確認
        const message = screen.getByText('Page Not Found');
        expect(message).toBeInTheDocument();

        // 日本語のメッセージが表示されているか確認
        const subMessage = screen.getByText('ページが見つかりません');
        expect(subMessage).toBeInTheDocument();
    });
});