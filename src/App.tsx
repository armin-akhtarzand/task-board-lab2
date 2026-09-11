import Column from "./components/Column";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
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

  const todo: Task[] = tasks.filter((task) => task.status === "todo");
  const doing: Task[] = tasks.filter((task) => task.status === "doing");
  const done: Task[] = tasks.filter((task) => task.status === "done");

  return (
    <div className="min-h-screen bg-orange-50 text-gray-900">
      <Header></Header>
      <main className="space-y-12 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-3">
          <Column title="Todo">
            <div className="flex flex-wrap justify-center gap-8 px-5 py-2.5">
              {todo.map((task) => (
                <TaskCard
                  id={task.id}
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  assignee={task.assignee}
                  priority={task.priority}
                  category={task.category}
                ></TaskCard>
              ))}
            </div>
          </Column>
          <Column title="Doing">
            <div className="flex flex-wrap justify-center gap-8 px-5 py-2.5">
              {doing.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  assignee={task.assignee}
                  priority={task.priority}
                  category={task.category}
                ></TaskCard>
              ))}
            </div>
          </Column>
          <Column title="Done">
            <div className="flex flex-wrap justify-center gap-8 px-5 py-2.5">
              {done.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  assignee={task.assignee}
                  priority={task.priority}
                  category={task.category}
                ></TaskCard>
              ))}
            </div>
          </Column>
        </div>
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
