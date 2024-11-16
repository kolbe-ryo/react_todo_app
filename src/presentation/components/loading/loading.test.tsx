import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Loading } from './loading';

// Playerコンポーネントをモック
jest.mock('@lottiefiles/react-lottie-player', () => ({
    Player: () => <div data-testid="mock-player" />,
}));

describe('Loading', () => {
    test('loadingがtrueのときにアニメーションが表示されること', () => {
        render(<Loading loading={true} />);

        const animationElement = screen.getByTestId('mock-player');
        expect(animationElement).toBeInTheDocument();
    });

    test('loadingがfalseのときに子要素が表示されること', () => {
        render(
            <Loading loading={false}>
                <div>Test Content</div>
            </Loading>
        );

        const contentElement = screen.getByText('Test Content');
        expect(contentElement).toBeInTheDocument();
    });

    test('loadingがtrueのときに子要素が表示されないこと', () => {
        render(
            <Loading loading={true}>
                <div>Test Content</div>
            </Loading>
        );

        const contentElement = screen.queryByText('Test Content');
        expect(contentElement).not.toBeInTheDocument();
    });
});