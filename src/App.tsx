import Column from "./components/Column";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import type { Task } from "./types/Task";

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
    <>
      <Header></Header>
      <main>
        <div className="board-container">
        <Column title="Todo">
          <div className="taskcard-container">
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
          <div className="taskcard-container">
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
          <div className="taskcard-container">
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
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;

/*         <section className="taskcard-container">
          <TaskCard
            priority="Hög"
            category="Frontend"
            assignee="Armin"
            description="Bygg formuläret för kontakt sidan till appen"
            id={1}
            title="Bygga formulär"
          ></TaskCard>
          <TaskCard
            priority="Låg"
            category="Design"
            assignee="Adam"
            description="Skapa global header för appen"
            id={2}
            title="Skapa header"
          ></TaskCard>
          <TaskCard
            priority="Medel"
            category="Test"
            assignee="Anna"
            description="Skriv tester för formuläret till appen"
            id={3}
            title="Skriv tester"
          ></TaskCard>
        </section> */
