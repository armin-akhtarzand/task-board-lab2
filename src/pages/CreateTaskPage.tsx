import { useNavigate } from "react-router";
import type { NewTask } from "../types/Task";
import Column from "../components/Column";
import TaskForm from "../components/TaskForm";

type CreateTaskPageProps = {
  onAddTask: (task: NewTask) => Promise<void>;
};

const CreateTaskPage = ({ onAddTask }: CreateTaskPageProps) => {
  const navigate = useNavigate();

  const executeAdd = async (newTask: NewTask) => {
    await onAddTask(newTask);

    navigate("/");
  };

  return (
    <main className="space-y-12 py-8">
      <Column title="Skapa uppdrag">
        <div className="px-4">
          <TaskForm onAddTask={executeAdd}></TaskForm>
        </div>
      </Column>
    </main>
  );
};

export default CreateTaskPage;
