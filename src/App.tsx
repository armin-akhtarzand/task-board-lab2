import Column from "./components/Column";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskBoard from "./components/TaskBoard";
import type { NewTask, Task } from "./types/Task";
import TaskForm from "./components/TaskForm";
import { useEffect, useState } from "react";

const apiUrl = "http://localhost:3005/api/tasks";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Kunde inte hämta tasks");
      }
      const result: Task[] = await response.json();
      setTasks(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const excecuteFetch = async () => {
      await fetchTasks();
    };
    excecuteFetch();
  }, []);
  const addTask = async (newTask: NewTask) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Kunde inte skapa task");
      }

      await fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen bg-orange-50 text-gray-900">
      <Header></Header>
      <main className="space-y-12 py-8">
        <TaskBoard tasks={tasks}></TaskBoard>
        <Column title="Formulär">
          <div className="px-4">
            <TaskForm onAddTask={addTask}></TaskForm>
          </div>
        </Column>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
