import TaskBoard from "../components/TaskBoard";
import type { Task } from "../types/Task";

type TaskBoardPageProps = {
  tasks: Task[];
};

const TaskBoardPage = ({ tasks }: TaskBoardPageProps) => {
  return (
    <main className="space-y-12 py-8">
      <TaskBoard tasks={tasks}></TaskBoard>
    </main>
  );
};
export default TaskBoardPage;
