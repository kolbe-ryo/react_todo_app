import { BsPersonStanding } from "react-icons/bs";
import { FaRunning } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";
import Status from "../../../domain/todo/value-object/status";

type StatusIconProps = {
    status: Status;
    color: string;
};


// eslint-disable-next-line react/prop-types
export const StatusIcon: React.FC<StatusIconProps> = ({ status, color }) => {
    const size = '40px';
    switch (status) {
        case Status.todo:
            return <BsPersonStanding color={color} size={size} />;
        case Status.progress:
            return <FaRunning color={color} size={size} />;
        case Status.done:
            return <MdEmojiPeople color={color} size={size} />;
        default:
            return null;
    }
};