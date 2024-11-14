
export enum Status {
    todo = "TODO",
    progress = "PROGRESS",
    done = "DONE",
}

export function getStatusColor(status: Status): string {
    switch (status) {
        case Status.todo:
            return "orange";
        case Status.progress:
            return "lime";
        case Status.done:
            return "teal";
    }
}

export default Status;