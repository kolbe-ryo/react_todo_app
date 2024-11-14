
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

export default Status;