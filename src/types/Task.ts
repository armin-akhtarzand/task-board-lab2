type TaskStatus = "todo" | "doing" | "done";
type TaskPriority = "Låg" | "Medel" | "Hög"; 

export type Task = {
    id: number;
    title: string;
    description: string;
    assignee: string;
    priority: TaskPriority;
    status: TaskStatus;
}