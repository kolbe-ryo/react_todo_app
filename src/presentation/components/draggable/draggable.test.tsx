import { useDraggable } from '@dnd-kit/core';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Draggable } from './draggable';

jest.mock('@dnd-kit/core', () => ({
    useDraggable: jest.fn(),
}));

describe('Draggable', () => {

    beforeEach(() => {
        (useDraggable as jest.Mock).mockReturnValue({
            setNodeRef: jest.fn(),
            listeners: {},
            attributes: {},
            transform: { x: 10, y: 10 },
        });
    });

    test('ドラッグ可能な要素が正しく表示されるか', () => {
        const id = 'test-id';
        const children = <div>children</div>;

        render(<Draggable id={id}>{children}</Draggable>);

        const draggableElement = screen.getByText('children');
        expect(draggableElement).toBeInTheDocument();

        // ついでにtransformプロパティが正しく適用されているか
        expect(draggableElement.parentElement).toHaveStyle('transform: translate(10px, 10px)');
    });

    test('useDraggableが呼び出されるか', () => {
        const id = 'test-id';
        const children = <div>children</div>;

        render(<Draggable id={id}>{children}</Draggable>);

        expect(useDraggable).toBeCalled();
    });
});