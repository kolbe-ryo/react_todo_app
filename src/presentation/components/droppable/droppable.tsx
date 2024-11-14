
// childrenを持つエリアのみのcomponent

import { useDroppable } from "@dnd-kit/core";
import { FC } from "react";
import styled from "styled-components";
import Status from "../../../domain/todo/value-object/status";
import GridViewList from "../../pages/todo-list-page/body/grid-view-list/grid-view-list";

type DroppableProps = {
    id: Status;
};

export const Droppable: FC<DroppableProps> = ({ id }) => {

    const { setNodeRef, isOver } = useDroppable({ id });

    return (
        <Wrapper ref={setNodeRef} isOver={isOver}>
            <GridViewList status={id} />
        </Wrapper>
    );
};

export default Droppable;

const Wrapper = styled.p<{ isOver: boolean }>`
    max-width: 40%;
    min-width: 220px;
    background-color: ${({ isOver }) => isOver ? 'rgb(240, 240, 240)' : 'white'};
`;