
export enum Status {
    todo = "TODO",
    progress = "PROGRESS",
    done = "DONE",
}

export function getStatusColor(status: Status): string {
    switch (status) {
        case Status.todo:
            return "lightblue";
        case Status.progress:
            return "pink";
        case Status.done:
            return "gray";
    }
}

export function statusValueOf(status: string): Status | undefined {
    switch (status.toUpperCase()) {
        case Status.todo:
            return Status.todo;
        case Status.progress:
            return Status.progress;
        case Status.done:
            return Status.done;
        default:
            return undefined;
    }
}

export default Status;