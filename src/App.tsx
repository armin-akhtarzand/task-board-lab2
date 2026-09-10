import Column from "./components/Column";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import type { Task } from "./types/Task";
import TaskForm from "./components/TaskForm";

const tasks: Task[] = [
  {
    id: 1,
    title: "Badrummet",
    category: "Städa",
    assignee: "Börje",
    description: "Skrubba toan, dammsuga, moppa",
    priority: "Medel",
    status: "doing",
  },
  {
    id: 2,
    title: "Glödlampa",
    category: "Syssla",
    assignee: "Mario",
    description: "Byt glödlampan i källaren",
    priority: "Låg",
    status: "done",
  },
  {
    id: 3,
    title: "Middag",
    category: "Nödvändighet",
    assignee: "Luigi",
    description: "Laga en näringsrik middag",
    priority: "Hög",
    status: "todo",
  },
  {
    id: 4,
    title: "Handla",
    category: "Nödvändighet",
    assignee: "Anna",
    description: "Handla inför middagen",
    priority: "Hög",
    status: "done",
  },
  {
    id: 5,
    title: "Diska",
    category: "Städa",
    assignee: "Mario",
    description: "Lägg undan disken efter maten",
    priority: "Hög",
    status: "todo",
  },
  {
    id: 6,
    title: "TV-kontroll",
    category: "Syssla",
    assignee: "Börje",
    description: "Hitta TV-kontrollen",
    priority: "Låg",
    status: "done",
  },
  {
    id: 7,
    title: "Sopor",
    category: "Städa",
    assignee: "Mario",
    description: "Samla ihop skräp, släng sedan",
    priority: "Medel",
    status: "doing",
  },
  {
    id: 8,
    title: "Böcker",
    category: "Syssla",
    assignee: "Anna",
    description: "Sortera böckerna i ordning",
    priority: "Låg",
    status: "todo",
  },
  {
    id: 9,
    title: "Garderob",
    category: "Syssla",
    assignee: "Luigi",
    description: "Montera nya IKEA garderoben",
    priority: "Låg",
    status: "doing",
  },
];

const App = () => {
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
            <TaskForm></TaskForm>
          </div>
        </Column>
      </main>
      <Footer></Footer>
      </div>
  );
};

export default App;
