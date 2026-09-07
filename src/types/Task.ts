type TaskStatus = "todo" | "doing" | "done";
export type TaskPriority = "Låg" | "Medel" | "Hög"; 

export type Task = {
    id: number;
    title: string;
    description: string;
    category: string;
    assignee: string;
    priority: TaskPriority;
    status: TaskStatus;
}
