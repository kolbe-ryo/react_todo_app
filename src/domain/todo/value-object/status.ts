
export enum Status {
    todo = "TODO",
    progress = "PROGRESS",
    done = "DONE",
}

export function getStatusColor(status: Status): string {
    switch (status) {
        case Status.todo:
            return "teal";
        case Status.progress:
            return "pink";
        case Status.done:
            return "gray";
    }
}

export default Status;