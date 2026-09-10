import type { TaskPriority } from "../types/Task";

type TaskCardProp = {
  title: string;
  id: number;
  description: string;
  assignee: string;
  category: string;
  priority: TaskPriority;
};


const TaskCard = ({
  title,
  description,
  assignee,
  category,
  priority,
}: TaskCardProp) => {
const priorityColor =
  priority === "Hög"
    ? "bg-red-400"
    : priority === "Medel"
      ? "bg-yellow-300"
      : "bg-green-200";

  return (
    <article className="relative flex h-56 w-56 shrink-0 flex-col items-center justify-center gap-4 rounded-3xl border-2 border-gray-300 bg-orange-400 p-4 text-center shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{category}</p>
      <p>{description}</p>
      <p>Tilldelad: {assignee}</p>
      <p className={`absolute -top-4 right-0.5 whitespace-nowrap rounded-2xl  border-2 border-black  px-3 py-1 font-bold ${priorityColor}`}>
        Prioritet: {priority}
      </p>
    </article>
  );
};

export default TaskCard;
