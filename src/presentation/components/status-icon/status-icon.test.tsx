import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Status from '../../../domain/todo/value-object/status';
import { StatusIcon } from './status-icon';

describe('StatusIcon', () => {
    test('todoステータスの時、BsPersonStandingが表示されること', () => {
        render(<StatusIcon status={Status.todo} color="blue" />);
        const icon = screen.getByTestId('BsPersonStanding');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveAttribute('color', 'blue');
    });

    test('progressステータスの時、FaRunningが表示されること', () => {
        render(<StatusIcon status={Status.progress} color="green" />);
        const icon = screen.getByTestId('FaRunning');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveAttribute('color', 'green');
    });

    test('doneステータスの時、MdEmojiPeopleが表示されること', () => {
        render(<StatusIcon status={Status.done} color="red" />);
        const icon = screen.getByTestId('MdEmojiPeople');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveAttribute('color', 'red');
    });

    test('unknownステータスの時、何も表示されないこと', () => {
        render(<StatusIcon status={'unknown' as Status} color="black" />);
        const icon = screen.queryByTestId('BsPersonStanding');
        expect(icon).not.toBeInTheDocument();
    });
});