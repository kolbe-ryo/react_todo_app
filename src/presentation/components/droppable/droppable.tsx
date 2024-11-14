
// childrenを持つエリアのみのcomponent

import { useDroppable } from "@dnd-kit/core";
import { FC, ReactNode } from "react";
import styled from "styled-components";

type DroppableProps = {
    id: string;
    children: ReactNode;
};

export const Droppable: FC<DroppableProps> = ({ id, children }) => {

    const { setNodeRef, isOver } = useDroppable({ id })

    return (
        <Wrapper ref={setNodeRef} isOver={isOver}>
            {children}
        </Wrapper>
    );
};

export default Droppable;

const Wrapper = styled.p<{ isOver: boolean }>`
    max-width: 33%;
    background-color: ${({ isOver }) => isOver ? 'rgb(234, 234, 234)' : 'white'};
`;