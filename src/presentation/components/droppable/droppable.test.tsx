import { useDroppable } from '@dnd-kit/core';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Status from '../../../domain/todo/value-object/status';
import { Droppable } from './droppable';

// useDroppable フックをモック
jest.mock('@dnd-kit/core', () => ({
    useDroppable: jest.fn(),
}));

describe('Droppable', () => {
    beforeEach(() => {
        (useDroppable as jest.Mock).mockReturnValue({
            setNodeRef: jest.fn(),
        });
    });

    test('子要素が正しく設定されること', () => {
        render(
            <Droppable id={Status.todo}>
                Test Content
            </Droppable>
        );

        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    test('useDroppableが正しいidで呼ばれること', () => {
        render(
            <Droppable id={Status.todo}>
                Test Content
            </Droppable>
        );

        expect(useDroppable).toHaveBeenCalledWith({ id: Status.todo });
    });

});