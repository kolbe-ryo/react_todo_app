
// childrenを持つエリアのみのcomponent

import { useDroppable } from "@dnd-kit/core";
import { FC, ReactNode } from "react";
import styled from "styled-components";

type DroppableProps = {
    id: string;
    children: ReactNode;
};

export const Droppable: FC<DroppableProps> = ({ id, children }) => {

    const { setNodeRef, isOver } = useDroppable({ id });

    return (
        <Wrapper ref={setNodeRef} isOver={isOver}>
            {children}
        </Wrapper>
    );
};

export default Droppable;

const Wrapper = styled.p<{ isOver: boolean }>`
    max-width: 40%;
    background-color: ${({ isOver }) => isOver ? 'rgb(240, 240, 240)' : 'white'};
`;