import type { Task, TaskStatus } from "../types/Task";
import Column from "./Column";
import TaskCard from "./TaskCard";
import { useState } from "react";

type TaskBoardProps = {
  tasks: Task[];
  onStatusChange: (id: number, status: TaskStatus) => Promise<void>;
};

const TaskBoard = ({ tasks, onStatusChange }: TaskBoardProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredTasks = tasks.filter((task) =>
    [
      task.title,
      task.description,
      task.category,
      task.assignee,
      task.priority,
    ].some((value) => value.toLowerCase().includes(normalizedSearch)),
  );

  const todo: Task[] = filteredTasks.filter((task) => task.status === "todo");
  const doing: Task[] = filteredTasks.filter((task) => task.status === "doing");
  const done: Task[] = filteredTasks.filter((task) => task.status === "done");

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-md px-4">
        <label htmlFor="task-search" className="mb-2 block font-semibold">
          Sök uppgift
        </label>

        <input
          id="task-search"
          type="search"
          value={searchTerm}
          placeholder="Sök bland uppgifter..."
          className="w-full rounded-md border border-gray-400 bg-white px-3 py-2"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-3">
        <Column title="Todo">
          <div className="flex flex-wrap justify-center gap-8 px-5 py-2.5">
            {todo.map((task) => (
              <TaskCard
                status={task.status}
                onStatusChange={onStatusChange}
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                priority={task.priority}
                category={task.category}
              />
            ))}
          </div>
        </Column>

        <Column title="Doing">
          <div className="flex flex-wrap justify-center gap-8 px-5 py-2.5">
            {doing.map((task) => (
              <TaskCard
                status={task.status}
                onStatusChange={onStatusChange}
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                priority={task.priority}
                category={task.category}
              />
            ))}
          </div>
        </Column>

        <Column title="Done">
          <div className="flex flex-wrap justify-center gap-8 px-5 py-2.5">
            {done.map((task) => (
              <TaskCard
                status={task.status}
                onStatusChange={onStatusChange}
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                priority={task.priority}
                category={task.category}
              />
            ))}
          </div>
        </Column>
      </div>
    </div>
  );
};
export default TaskBoard;
