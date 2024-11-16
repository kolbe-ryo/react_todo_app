import { useDroppable } from "@dnd-kit/core";
import { FC } from "react";
import styled from "styled-components";
import Status from "../../../domain/todo/value-object/status";
import ListView from "../../pages/todo-list-page/body/list-view/list-view";

type DroppableProps = {
    id: Status;
};

/**
 * Droppableはドロップ可能なコンポーネントを表します。
 * 
 * @param {DroppableProps} props - コンポーネントのプロパティ。
 * @param {string} props.id - ドロップ可能エリアの識別子。
 * @returns {JSX.Element} ドロップ可能なエリアを表すJSX要素。
 */
export const Droppable: FC<DroppableProps> = ({ id }) => {

    const { setNodeRef, isOver } = useDroppable({ id });

    return (
        <Wrapper ref={setNodeRef} isOver={isOver}>
            <ListView status={id} />
        </Wrapper>
    );
};

export default Droppable;

const Wrapper = styled.p<{ isOver: boolean }>`
    min-width: 220px;
    background-color: ${({ isOver }) => isOver ? 'rgb(240, 240, 240)' : 'white'};
`;