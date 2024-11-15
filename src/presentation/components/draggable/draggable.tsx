import { useDraggable } from "@dnd-kit/core";
import { FC, ReactNode } from "react";

type DraggableProps = {
    id: string;
    children: ReactNode;
};

/**
 * Draggableコンポーネントは、要素をドラッグ可能にするためのラッパーです。
 * `useDraggable`フックを使用して、ドラッグ操作に必要なプロパティやイベントリスナーを取得します。
 * 
 * @param {string} id - ドラッグ可能な要素の一意の識別子。
 * @param {React.ReactNode} children - ドラッグ可能な要素の子要素。
 * @returns {JSX.Element} ドラッグ可能な要素をラップするdiv要素。
 */
export const Draggable: FC<DraggableProps> = ({ id, children }) => {
    // useDraggableを使って必要な値をもらう
    const {
        setNodeRef,
        listeners,
        attributes,
        transform,
    } = useDraggable({ id });

    const transformStyle = transform
        ? `translate(${transform.x}px, ${transform.y}px)`
        : undefined;

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={{ transform: transformStyle, height: "fit-content" }}
        >
            {children}
        </div>
    );
};