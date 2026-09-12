import type { Task, TaskStatus } from "../types/Task";
import Column from "./Column";
import TaskCard from "./TaskCard";

type TaskBoardProps = {
  tasks: Task[];
  onStatusChange: (id: number, status: TaskStatus) => Promise<void>;
};

const TaskBoard = ({ tasks, onStatusChange }: TaskBoardProps) => {
  const todo: Task[] = tasks.filter((task) => task.status === "todo");
  const doing: Task[] = tasks.filter((task) => task.status === "doing");
  const done: Task[] = tasks.filter((task) => task.status === "done");

  return (
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
  );
};
export default TaskBoard;
