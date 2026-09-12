import TaskBoard from "../components/TaskBoard";
import type { Task, TaskStatus } from "../types/Task";

type TaskBoardPageProps = {
  tasks: Task[];
  onStatusChange: (id: number, status: TaskStatus) => Promise<void>;
};

const TaskBoardPage = ({ tasks, onStatusChange }: TaskBoardPageProps) => {
  return (
    <main className="space-y-12 py-8">
      <TaskBoard onStatusChange={onStatusChange} tasks={tasks}></TaskBoard>
    </main>
  );
};
export default TaskBoardPage;
