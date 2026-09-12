import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateTaskPage from "./pages/CreateTaskPage";
import TaskBoardPage from "./pages/TaskBoardPage";
import type { NewTask, Task } from "./types/Task";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

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
      <Routes>
        <Route path="/" element={<TaskBoardPage tasks={tasks}></TaskBoardPage>}>
        </Route>
        <Route path="/create" element={<CreateTaskPage onAddTask={addTask}></CreateTaskPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;