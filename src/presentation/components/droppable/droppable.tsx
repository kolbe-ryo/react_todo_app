import { useDroppable } from "@dnd-kit/core";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import Status from "../../../domain/todo/value-object/status";

type DroppableProps = {
    id: Status;
    children: ReactNode;
};

/**
 * Droppableはドロップ可能なコンポーネントを表します。
 * 
 * @param {DroppableProps} props - コンポーネントのプロパティ。
 * @param {string} props.id - ドロップ可能エリアの識別子。
 * @param {string} props.children - ドロップ可能エリアの子要素。
 * @returns {JSX.Element} ドロップ可能なエリアを表すJSX要素。
 */
export const Droppable: FC<DroppableProps> = ({ id, children }) => {

    const { setNodeRef, isOver } = useDroppable({ id });

    return (
        <Wrapper ref={setNodeRef} isOver={isOver}>
            {children}
        </Wrapper>
    );
};

export default Droppable;

const Wrapper = styled.div<{ isOver: boolean }>`
    min-width: 220px;
    background-color: ${({ isOver }) => isOver ? 'rgb(240, 240, 240)' : 'white'};
`;