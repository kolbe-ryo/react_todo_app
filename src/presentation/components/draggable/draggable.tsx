import { useDraggable } from "@dnd-kit/core";
import { FC, ReactNode } from "react";

type DraggableProps = {
    id: string;
    children: ReactNode;
};

export const Draggable: FC<DraggableProps> = ({ id, children }) => {
    // useDraggableを使って必要な値をもらう
    const {
        setNodeRef,
        listeners,
        attributes,
        transform,
    } = useDraggable({
        id
    });

    const transformStyle = transform
        ? `translate(${transform.x}px, ${transform.y}px)`
        : undefined;

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={{
                transform: transformStyle,
                height: "fit-content"
            }}
        >
            {children}
        </div>
    );
};