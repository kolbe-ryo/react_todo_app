
import { ReactNode } from 'react';
import styled from 'styled-components';

interface StatusCardProps {
    color: string;
    children: ReactNode;
}

export const StatusCard: React.FC<StatusCardProps> = ({ color, children }: StatusCardProps) => {
    return (
        <Wrapper color={color}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.p<{ color: string }>`
    position: absolute;
    top: 15px;
    right: 15px;
    margin: 0 0 12px 12px;
    padding: 2px;
    border: 2px solid ${({ color }) => color};
    border-radius: 4px;
    color: white;
    font-weight: bold;
    background-color: ${({ color }) => color};
`;